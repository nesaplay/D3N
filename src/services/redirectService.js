class RedirectService {

    goTo(path) {
        window.location.assign(`#${path}`);
    }
};

export const redirectService = new RedirectService();