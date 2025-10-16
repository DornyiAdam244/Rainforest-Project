export default class User {
    #crudId
    #name;
    #password;

    constructor(name, password, crudId) {
        this.#name = name;
        this.#password = password;
        this.#crudId = crudId || null;
    }

    static userInstanceFromJSON(json) {
        if (json) return new User(json.name, json.password, json.crudId);
        return null;
    }

    getCrudId = () => this.#crudId;
    getName = () => this.#name;
    getPassword = () => this.#password;

    setName = name => this.#name = name;
    setPassword = password => this.#password = password;

    toJSON() {
        return {
            name: this.#name,
            password: this.#password
        }
    }
}