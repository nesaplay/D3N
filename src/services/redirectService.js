export default class RedirectService {

    goTo(path) {
        window.location.assign(`#/${path}`);
        // this.props.history.push(`/${path}`);
    }
};