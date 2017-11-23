import React from "react";
import DataService from "../../services/dataService";
import { IMG_PLACEHOLDER } from "../../constants";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                name: "loading...",
                about: "loading...",
                commentsCount: "0",
                postsCount: "0",
                avatarUrl: IMG_PLACEHOLDER
            }
        };

        this.dataService = new DataService();
        this.successProfile = this.successProfile.bind(this);
    }
    // personal methods
    collectProfileInfo() {
        this.dataService.fetchProfile(this.successProfile, this.errorProfile);
    }

    successProfile(profile) {
        console.log(profile);

        this.setState({ profile });
    }

    errorProfile(error) {
    }

    // lifecycle methods

    componentDidMount() {
        this.collectProfileInfo();
    }


    render() {
        return (
            <main className="center">
                <div>
                    <img src={this.state.profile.avatarUrl} style={{"width": "300px"}}  alt="" className="circle responsive-img"/>
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
            </main>
        );
    }

}