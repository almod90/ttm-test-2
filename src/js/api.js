const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onPost('/api/test-2').reply(function (config) {
    const data = JSON.parse(config.data);

    try {
        JSON.parse(data.json);
    }
    catch (e) {
        response(e.message)
    }
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
