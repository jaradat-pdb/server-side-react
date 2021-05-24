export class User {
    fname = '';
    lname = '';
    email = '';
    isUserAuthenticated = false;
    isUserAuthorized = false;
    userToken = '';

    /**
     * Get user's authentication token.
     * @returns userToken - a string representation of the authentication token
     * (i.e. SAML token, SiteMinder sessionId, etc...)
     */
    getUserToken() {
        return this.userToken;
    }

    /**
     * Set user's authentication token.
     * @param {string} userToken - a string representation of the authentication token
     * (i.e. SAML token, SiteMinder sessionId, etc...)
     */
    setUserToken(userToken) {
        this.userToken = userToken;
    }
}