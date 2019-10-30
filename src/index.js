import './scss/app.scss'
import axios from 'axios'
import $ from 'jquery'
import './js/api'

const $button = $('#action');

$button.click(function (e) {
    e.preventDefault();

    const object = {
        name: "Alex",
        surname: "Modin",
        email: "almod90@gmail.com",
        skills: ["PHP", "JavaScript", "Linux"]
    };

    const data = {
        json: JSON.stringify(object)
    };

    axios.post('api/test-2', data)
        .then(r => r.data)
        .then(d => {
            if (d.success) {
                alert('JSON was send and it\'s valid!');
            } else {
                //console.log(d.error);
                throw new Error(d.error);
            }
        })
        .catch(e => console.log(`Error: ${e.message}`))

});
