import React from 'react';
import $ from 'jquery';

class ValidationService {

    validateLogin() {

        if ($('#username').val() == '') {
            $('#username').addClass('invalid');
            $('#username').prop('aria-invalid', 'true');
            return false;
        }
        if ($('#password').val().length < 6) {
            $('#password').addClass('invalid');
            $('#password').prop('aria-invalid', 'true');
            return false;
        }
        return true;
    }

    validateRegister() {

        if ($('#name').val() == '') {
            $('#name').addClass('invalid');
            $('#name').prop('aria-invalid', 'true');
            return false;
        }
        if ($('#username').val() == '') {
            $('#username').addClass('invalid');
            $('#username').prop('aria-invalid', 'true');
            return false;
        }
        let reg = /\S+@\S+\.\S+/;
        if (!reg.test($('#email').val())) {
            $('#email').addClass('invalid');
            $('#email').prop('aria-invalid', 'true');
            return false;
        }
        if ($('#password').val().length < 6) {
            $('#password').addClass('invalid');
            $('#password').prop('aria-invalid', 'true');
            return false;
        }
        if ($('#confirmedPassword').val() !== $('#password').val()) {
            $('#confirmedPassword').addClass('invalid');
            $('#confirmedPassword').prop('aria-invalid', 'true');
            return false;
        }
        return true;
    }

    validateEditProfile() {

        if ($('#name').val() == '') {
            $('#name').addClass('invalid');
            $('#name').prop('aria-invalid', 'true');
            return false;
        }
        let reg = /\S+@\S+\.\S+/;
        if (!reg.test($('#email').val())) {
            $('#email').addClass('invalid');
            $('#email').prop('aria-invalid', 'true');
            return false;
        }
        if ($('#about').val() == '') {
            $('#about').addClass('invalid');
            $('#about').prop('aria-invalid', 'true');
            return false;
        }
        if ($('#short-about').val() == '') {
            $('#short-about').addClass('invalid');
            $('#short-about').prop('aria-invalid', 'true');
            return false;
        }
        let url = /^(http|https):\/\//;
        if (!url.test($('#avatar').val())) {
            $('#avatar').addClass('invalid');
            $('#avatar').prop('aria-invalid', 'true');
            return false;
        }
        return true;
    }
}

export const validationService = new ValidationService();