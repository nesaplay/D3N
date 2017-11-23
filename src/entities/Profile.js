class Profile  {
    constructor(profile) {
        this.about = profile.about;
        this.aboutShort = profile.aboutShort;
        this.avatarUrl = profile.avatarUrl;
        this.commentsCount = profile.commentsCount;
        this.name = profile.name;
        this.postsCount = profile.postsCount;
    }

    info() {
        return "This profile has: about, aboutShort, avatarUrl, commentsCount, name and postsCount";
    }
}

export default Profile;