export default class User {
    private className = 'User';
    private fname: string = '';
    private lname: string = '';
    private email: string = '';
    private userToken = '';
    private userAuthenticated: boolean = false;
    private userAuthorized: boolean = false;

    /**
     * Get user's first name.
     * @returns {string} fname
     */
     getFname(): string {
        return this.fname;
    }

    /**
     * Set user's first name.
     * @param {string} fname
     */
    setFname(fname: string): void {
        this.fname = fname;
    }

    /**
     * Get user's last name.
     * @returns {string} lname
     */
     getLname(): string {
        return this.lname;
    }

    /**
     * Set user's last name.
     * @param {string} lname
     */
    setLname(lname: string): void {
        this.lname = lname;
    }

    /**
     * Get user's email address.
     * @returns {string} email
     */
     getEmail(): string {
        return this.email;
    }

    /**
     * Set user's email address.
     * @param {string} email
     */
    setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Get user's authentication token, such as a: SAML token, SiteMinder sessionId, and so on.
     * @returns {string} userToken
     */
    getUserToken(): string {
        return this.userToken;
    }

    /**
     * Set user's authentication token, such as a: SAML token, SiteMinder sessionId, and so on.
     * @param {string} userToken
     */
    setUserToken(userToken: string): void {
        this.userToken = userToken;
    }

    /**
     * Get user's authentication status.
     * @returns {boolean} userAuthenticated
     */
    isUserAuthenticated(): boolean {
        return this.userAuthenticated;
    }

    /**
     * Flips user's authentication status, retrieve updated status with isUserAuthenticated function.
     */
    setUserAuthenticated(): void {
        this.userAuthenticated !== this.userAuthenticated;
    }

    /**
     * Get user's authorization status.
     * @returns {boolean} userAuthorized
     */
    isUserAuthorized(): boolean {
        return this.userAuthorized;
    }

    /**
     * Flips user's authorization status, retrieve updated status with isUserAuthorized function.
     */
    setUserAuthorized(): void {
        this.userAuthorized !== this.userAuthorized;
    }

    /**
     * Returns a representation of the object in the format of a trace log message.
     * @returns {string} traceLogMsg
     */
    traceLog(): string {
        return `TRACE | - ${this.className} - | ${JSON.stringify(this)}`;
    }
}