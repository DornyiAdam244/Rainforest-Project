export default class User {
    #crudId
    #name;
    #password;
    #seenAnimals;

    constructor(name, password, crudId, seenAnimals) {
        this.#name = name;
        this.#password = password;
        this.#crudId = crudId || null;
        this.#seenAnimals = seenAnimals || new Set();
    }

    static userInstanceFromJSON(json) {
        if (json) return new User(json.name, json.password, json.id, new Set(json.seenAnimals || []));
        return null;
    }

    getCrudId = () => this.#crudId;
    getName = () => this.#name;
    getPassword = () => this.#password;
    getSeenAnimals = () => this.#seenAnimals;
    addSeenAnimal = animalId => this.#seenAnimals.add(animalId);

    setName = name => this.#name = name;
    setPassword = password => this.#password = password;
    setSeenAnimals = seenAnimals => this.#seenAnimals = seenAnimals;

    toJSON() {
        return {
            name: this.getName(),
            password: this.getPassword(),
            seenAnimals: Array.from(this.getSeenAnimals())
        }
    }
}