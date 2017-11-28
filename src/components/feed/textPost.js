import React from "react";
import DataService from "../../services/dataService";

class TextPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: {
                text: "Loading post ...",
                id: ""
            }
        };

        this.dataService = new DataService();

        this.collectTextPosts = this.collectTextPosts.bind(this); 
        this.successHandler = this.successHandler.bind(this); 
        this.errorHandler = this.errorHandler.bind(this); 
    }

    collectTextPosts(){
        this.dataService.fetchTextPosts(this.successHandler, this.errorHandler);

    }

    successHandler(posts){
        this.setState({
            posts
        });
    }

    errorHandler(error){
        console.warn(error);
    }

    componentDidMount(){
        this.collectTextPosts();
    }

    render() {
        return (
            <div>
                <h4>
                    {this.state.posts.text}
                </h4>
            </div>
        );
    }
}

export default TextPost;