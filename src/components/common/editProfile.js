import React from "react";
import ValidationService from "../../services/validationService";
import DataService from "../../services/dataService";
import Profile from "../../entities/Profile";
import { IMG_PLACEHOLDER } from "../../constants";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameString: "",
            about: "",
            emailString: "",
            aboutString: "",
            shortAboutString: "",
            avatarUrl: ""

        };
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.aboutChangeHandler = this.aboutChangeHandler.bind(this);
        this.shortAboutChangeHandler = this.shortAboutChangeHandler.bind(this);
        this.avatarChangeHandler = this.avatarChangeHandler.bind(this);
        this.updateSuccess = this.updateSuccess.bind(this);

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

    nameChangeHandler(event) {
        const nameString = event.target.value;

        this.setState({
            nameString
        });
    }
    emailChangeHandler(event) {
        const emailString = event.target.value;

        this.setState({
            emailString
        });
    }
    aboutChangeHandler(event) {
        const aboutString = event.target.value;

        this.setState({
            aboutString
        });
    }
    shortAboutChangeHandler(event) {
        const shortAboutString = event.target.value;

        this.setState({
            shortAboutString
        });
    }
    avatarChangeHandler(event) {
        const avatarUrl = event.target.value;

        this.setState({
            avatarUrl
        });
    }
    allModalData(event) {
        event.preventDefault();

        let modalData = {
            name: this.state.nameString,
            email: this.state.emailString,
            about: this.state.aboutString,
            aboutShort: this.state.shortAboutString,
            avatarUrl: this.state.avatarUrl,

        };

        let profile = new Profile(modalData); 
        
        
        
        let validateChecker = this.validation.validateEditProfile();
        console.log(validateChecker);
        if (validateChecker === true) {
            this.dataService.updateProfile(profile, this.updateSuccess, this.errorFailure);        
        }
    }

    render() {
        return (
            <div className="login/register-form  col s6 container row">

                <form className="col s12" id="register-form" onSubmit={this.allModalData.bind(this)}>
                    <div className="input-field col s12">
                        <input id="name" type="text" required="" aria-required="" className="validate" onChange={this.nameChangeHandler} value={event.target.value} />
                        <label htmlFor="name">Name</label>
                        <span className="helper-text" data-error="Name is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={this.emailChangeHandler} value={event.target.value} />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Invalid email format" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="about" type="text" className="validate" required="" onChange={this.aboutChangeHandler} value={event.target.value} />
                        <label htmlFor="about">About</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="short-about" type="text" className="validate" required="" onChange={this.shortAboutChangeHandler} value={event.target.value} />
                        <label htmlFor="short-about">Short About</label>
                        <span className="helper-text" data-error="username is required" data-success="success"></span>
                    </div>
                    <div className="input-field col s12">
                        <input id="avatar" type="text" className="validate" required="" onChange={this.avatarChangeHandler} value={event.target.value} />
                        <label htmlFor="avatar">AvatarUrl</label>
                        <span className="helper-text" data-error="avatar is required" data-success="success"></span>
                    </div>

                    <input type="submit" value="Register" className="btn waves-effect waves-light blue lighten-3" />

                </form>

            </div>

        );
    }
}
export default EditProfile;
