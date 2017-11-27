import React from "react";
import $ from "jquery";

export default class ValidationService {

    // validateEverything(data) {
    //     if (data.email) {
    //         this.validateEmail(data.email);
    //         this.validateName(data.name);
    //         this.validatePassword(data.password);
    //         this.validateUsername(data.username);
    //         this.validateConfirmPassword(data.password, data.confirmedPassword);
    //     } else {
    //         this.validateUsername(data.username);
    //         this.validatePassword(data.password);            
    //     }
    // }

    ultimateValidation(data) {
        if (data.email) {
            let reg = /\S+@\S+\.\S+/;
            if (!reg.test(data.email)) {
                return alert("Invalid email format");
            }
            if (!data.name) {
                return alert("Please enter your name");
            }
            if (data.password.length <= 6) {
                return alert("Password should be more then 6 characters.");
            }
            if (!data.username) {
                return alert("Please enter your username");
            }
            if (data.password !== data.confirmedPassword) {
                return alert("Password didn't match!");
            }

            return true;

        } else {

            if (!data.username) {
                return alert("Please enter your username");
            }
            if (data.password.length <= 6) {
                return alert("Password should be more then 6 characters.");
            }

            return true;
        }
    }

    validateUsername(username) {
        if (!username) {
            return alert("Please enter your username");
        }
    }
    validatePassword(password) {
        if (password.length <= 6) {
            return alert("Password should be more then 6 characters.");
        }
    }
    validateConfirmPassword(password, confirmedPassword) {
        if (password !== confirmedPassword) {
            return alert("Password didn't match!");
        }
    }

    validateName(name) {
        if (!name) {
            return alert("Please enter your name");
        }
    }
    validateEmail(email) {
        let reg = /\S+@\S+\.\S+/;
        if (!reg.test(email)) {
            return alert("Invalid email format");
        }

    }
    validateLogin() {

        if ($("#username").val() == "") {
            $("#username").addClass("invalid");
            $("#username").prop("aria-invalid", "true");
            return false;
        }
        if ($("#password").val().length < 6) {
            $("#password").addClass("invalid");
            $("#password").prop("aria-invalid", "true");
            return false;
        }
        return true;
    }

    validateRegister() {

        if ($("#name").val() == "") {
            $("#name").addClass("invalid");
            $("#name").prop("aria-invalid", "true");
            return false;
        }
        if ($("#username").val() == "") {
            $("#username").addClass("invalid");
            $("#username").prop("aria-invalid", "true");
            return false;
        }
        let reg = /\S+@\S+\.\S+/;
        if (!reg.test($("#email").val())) {
            $("#email").addClass("invalid");
            $("#email").prop("aria-invalid", "true");
            return false;
        }
        if ($("#password").val().length < 6) {
            $("#password").addClass("invalid");
            $("#password").prop("aria-invalid", "true");
            return false;
        }
        if ($("#confirm-password").val().toLowerCase() !== $("#password").val().toLowerCase()) {
            $("#confirm-password").addClass("invalid");
            $("#confirm-password").prop("aria-invalid", "true");
            return false;
        }
        return true;
    }

    validateEditProfile(){

        if ($("#name").val() == "") {
            $("#name").addClass("invalid");
            $("#name").prop("aria-invalid", "true");
            return false;
        }
        let reg = /\S+@\S+\.\S+/;
        if (!reg.test($("#email").val())) {
            $("#email").addClass("invalid");
            $("#email").prop("aria-invalid", "true");
            return false;
        }
        if ($("#about").val() == "") {
            $("#about").addClass("invalid");
            $("#about").prop("aria-invalid", "true");
            return false;
        }
        if ($("#short-about").val() == "") {
            $("#short-about").addClass("invalid");
            $("#short-about").prop("aria-invalid", "true");
            return false;
        }
        let url = /^(http|https):\/\//;
        if (!url.test($("#avatar").val())) {
            $("#avatar").addClass("invalid");
            $("#avatar").prop("aria-invalid", "true");
            return false;
        }

        return true;

    }
}


