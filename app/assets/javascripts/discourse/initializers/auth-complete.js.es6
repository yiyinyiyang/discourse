export default {
  name: "auth-complete",
  after: "inject-objects",
  initialize() {
    if (window.location.search.indexOf('authComplete=true') !== -1) {
      const lastAuthResult = localStorage.getItem('lastAuthResult');
      if (lastAuthResult) {
        Discourse.authenticationComplete(JSON.parse(lastAuthResult));
      }
    }
  }
};

