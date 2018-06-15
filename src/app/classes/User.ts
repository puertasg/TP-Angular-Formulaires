export class User {
    private _email: string;
    private _password: string;

    constructor() { }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }

}