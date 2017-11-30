import { SESSION_STORAGE_USER_KEY } from "../constants";

class Post  {
    constructor(post) {
        this.id = post.id;
        this.text = post.text;
        this.type = post.type;
        this.commentsNum = post.commentsNum;
        this.userId = parseInt(sessionStorage.getItem(SESSION_STORAGE_USER_KEY));
        this.dateCreated = post.dateCreated;
        this.userDisplayName = post.userDisplayName;
        this.imageUrl = post.imageUrl;
        this.videoUrl = post.videoUrl; 
    }
}

export default Post;