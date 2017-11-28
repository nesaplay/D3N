import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import DataService from "../../services/dataService";
import { IMG_PLACEHOLDER } from "../../constants";
import EditProfile from "../common/editProfile";


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                name: "loading...",
                about: "loading...",
                aboutShort: "loading...",
                commentsCount: "0",
                postsCount: "0",
                avatarUrl: IMG_PLACEHOLDER,
                modalIsOpen: false,
                email: "loading...",
                error: "",
                userId: 0
            }
        };
        this.dataService = new DataService();

        this.successProfile = this.successProfile.bind(this);
        this.openModal = this.openModal.bind(this);
        this.errorProfile = this.errorProfile.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    // personal methods
    collectProfileInfo() {
        // this.dataService.fetchTextPosts(this.successProfile, this.errorProfile);
        const userId = this.props.match.params.id;
        if (!userId) {
            this.dataService.fetchProfile(this.successProfile, this.errorProfile);
            return;
        }
        this.dataService.fetchUsersById(userId, this.successProfile, this.errorProfile);
    }

    successProfile(profile) {
        // if(profile.text){
        //     console.log(profile);
        //     return;
        // }
        
        this.setState({ profile });
    }

    errorProfile(error) {
        this.setState({
            error: error.message
        }); //not sure will this work

    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    renderModal() {
        if (!this.props.match.params.id) {
            return (
                <article>
                    <button className="btn" onClick={this.openModal}>Edit Profile</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                    >
                        <EditProfile profile={this.newProfileData} />

                    </Modal>
                </article>
            );
        }
    }

    // lifecycle methods

    componentDidMount() {
        this.collectProfileInfo();
    }

    render() {
        console.log(this.state);
        this.dataService.fetchUsers(users => console.log(users));
        return (
            <main className="center">
                <div>
                    <img src={this.state.profile.avatarUrl} style={{ "width": "300px", "marginTop": "20px" }} alt="" className="circle responsive-img" />
                </div>
                <div>
                    <h2 className="row col s4 offset-s4 ">
                        {this.state.profile.name}
                    </h2>
                    <p className="row col s4 offset-s4">
                        {this.state.profile.about}
                    </p>
                    <div className="chip col s3">
                        number of posts ({this.state.profile.postsCount})
                        <i className=" material-icons"></i>
                    </div>
                    <div className="chip col s3">
                        Comments({this.state.profile.commentsCount})
                        <i className=" material-icons"></i>
                    </div>
                </div>
                {this.renderModal()}
                {/* <a className="waves-effect waves-light btn">Edit Profile</a> */}
            </main>
        );
    }

}

ProfilePage.propTypes = {
    match: PropTypes.object
};