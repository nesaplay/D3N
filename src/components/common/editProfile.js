import React, {Component} from "react";

import ValidationService from "../../services/validationService";
import DataService from "../../services/dataService";
import Profile from "../../entities/Profile";
import { IMG_PLACEHOLDER } from "../../constants";

export default class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
        this.createInstances();
    }

    // Initialization methods

    initState() {
        return {
            name: "",
            about: "",
            email: "",
            about: "",
            aboutShort: "",
            avatarUrl: ""
        };
    }

    bindEventHandlers() {
        this.submitForm = this.submitForm.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    createInstances() {
        this.dataService = new DataService();
        this.validation = new ValidationService(); 
    }

    updateSuccess(answer) {
        console.log("we have updated a profile: ...");
        window.location.assign("#/profile");
    }
    errorFailure(error) {
        console.log("updating profile encountered an error: ...");
        console.log(error);
    }

    updateValue({ target }) {
        this.setState({
            [target.id]: target.value
        });
    }

    submitForm(event) {
        event.preventDefault();

        const {name, email, about, aboutShort, avatarUrl} = this.state;

        let modalData = {
            name,
            email,
            about,
            aboutShort,
            avatarUrl,
        };

        let profile = new Profile(modalData); 
        
        let validateChecker = this.validation.validateEditProfile();
        if (validateChecker === true) {
            this.dataService.updateProfile(profile, this.updateSuccess, this.errorFailure);        
        }
    }

    render() {
        return (
            <div className="login/register-form  col s6 container row">
                <form className="col s12" id="register-form" onSubmit={this.submitForm}>
                    <div className="input-field col s12">
                        <input id="name" type="text" required="" aria-required="" className="validate" onChange={this.updateValue} value={this.state.name} />
                        <label htmlFor="name">Name</label>
                        <span className="helper-text" data-error="Name is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={this.updateValue} value={this.state.email} />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Invalid email format" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="about" type="text" className="validate" required="" onChange={this.updateValue} value={this.state.about} />
                        <label htmlFor="about">About</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="short-about" type="text" className="validate" required="" onChange={this.updateValue} value={this.state.aboutShort} />
                        <label htmlFor="short-about">Short About</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="avatarUrl" type="text" className="validate" required="" onChange={this.updateValue} value={this.state.avatarUrl} />
                        <label htmlFor="avatarUrl">AvatarUrl</label>
                        <span className="helper-text" data-error="avatar is required" data-success="success"></span>
                    </div>
                    <input type="submit" value="Register" className="btn waves-effect waves-light blue lighten-3" />
                </form>
            </div>
        );
    }
}