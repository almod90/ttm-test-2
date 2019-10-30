import './scss/app.scss'
import axios from 'axios'
import $ from 'jquery'
import './js/api'

const $form = $('#auth-form form');

$form.submit(function (e) {
    e.preventDefault();

    let data = {};
    $.each($(this).serializeArray(), function (i, field) {
        data[field.name] = field.value;
    });

    axios.post('api/test-1', data)
        .then(r => r.data)
        .then(d => {
            if (d.success) {
                alert('Authorization ok!');
            } else {
                //console.log(d.error);
                throw new Error(d.error);
            }
        })
        .catch(e => console.log(`Error: ${e.message}`))

});
