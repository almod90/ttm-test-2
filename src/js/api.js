const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onPost('/api/test-1').reply(function (config) {
    const data = JSON.parse(config.data);

    if (data.username.length <= 0) return response("Please input username");
    if (data.password.length <= 0) return response("Please input password");

    if (data.username !== "test" || data.password !== "1234") return response("Invalid credentials");

    if (data.token !== "test_token") return response("Invalid token");

    return response();
});

const response = function (error = "") {
    if (error.length === 0) {
        return [200, {
            success: true
        }];
    } else {
        return [200, {
            success: false,
            error: error
        }];
    }
};
