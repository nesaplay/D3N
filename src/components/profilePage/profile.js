import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { dataService } from '../../services/dataService';
import { IMG_PLACEHOLDER } from '../../constants';
import EditProfile from '../common/editProfile';


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initState();
        this.bindEventHandlers();
    }

    // Initialization methods

    initState() {
        return {
            profile: {
                name: 'loading...',
                about: 'loading...',
                aboutShort: 'loading...',
                commentsCount: '0',
                postsCount: '0',
                avatarUrl: IMG_PLACEHOLDER,
                modalIsOpen: false,
                email: 'loading...',
                error: '',
                userId: 0
            }
        };
    }

    bindEventHandlers() {
        this.successProfile = this.successProfile.bind(this);
        this.openModal = this.openModal.bind(this);
        this.errorProfile = this.errorProfile.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // personal methods
    collectProfileInfo() {
        const userId = this.props.match.params.id;
        if (!userId) {
            dataService.fetchProfile(this.successProfile, this.errorProfile);
            return;
        }
        dataService.fetchUsersById(userId, this.successProfile, this.errorProfile);
    }

    successProfile(profile) {
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

    // lifecycle methods

    componentDidMount() {
        this.collectProfileInfo();
    }

    componentWillReceiveProps(nextProps) {
        // in case we navigate from /people/:id page to /profile
        if (this.props.match.params.id != nextProps.match.params.id) {
            dataService.fetchProfile(this.successProfile, this.errorProfile);
        }
    }

    // Render methods 

    renderModal() {

        const style = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
                position: 'absolute',
                top: '100px',
                left: '100px',
                bottom: '100px',
                right: '100px',
                border: '1px solid #ccc',
                background: '#DAE2DF',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'

            }
        };

        if (!this.props.match.params.id) {
            return (
                <article>
                    <button className="btn" onClick={this.openModal}>Edit Profile</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={style}
                    >
                        <EditProfile profile={this.newProfileData} />
                    </Modal>
                </article>
            );
        }
    }

    render() {
        
        const { avatarUrl, name, about, postsCount, commentsCount } = this.state.profile;
        const source = avatarUrl ? avatarUrl : IMG_PLACEHOLDER;
        
        return (
            <main className="center profilePage">
                <div>
                    <img src={source} style={{ 'width': '300px', 'marginTop': '20px' }} alt="" className="circle responsive-img" />
                </div>
                <div>
                    <h2 className="row col s4 offset-s4 ">
                        {name}
                    </h2>
                    <p className="row col s4 offset-s4">
                        {about}
                    </p>
                    <div className="chip col s3">
                        number of posts ({postsCount})
                        <i className=" material-icons"></i>
                    </div>
                    <div className="chip col s3">
                        Comments({commentsCount})
                        <i className=" material-icons"></i>
                    </div>
                </div>
                <div className="col s12 section">
                    {this.renderModal()}
                </div>
            </main>
        );
    }
}

ProfilePage.propTypes = {
    match: PropTypes.object
};