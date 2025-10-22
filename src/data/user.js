export default class User {
    #crudId
    #name;
    #password;
    #seenAnimals;
    #quizresult;
    constructor(name, password, crudId, seenAnimals, quizresult) {
        this.#name = name;
        this.#password = password;
        this.#crudId = crudId || null;
        this.#seenAnimals = seenAnimals || new Set();
        this.#quizresult = quizresult || 0;
    }

    static userInstanceFromJSON(json) {
        if (json) return new User(json.name, json.password, json.id,new Set(json.seenAnimals || []), json.quizresult);
        return null;
    }

    getCrudId = () => this.#crudId;
    getName = () => this.#name;
    getPassword = () => this.#password;
    getBestQuizResult = () => this.#quizresult;
    getSeenAnimals = () => this.#seenAnimals;
    addSeenAnimal = animalId => this.#seenAnimals.add(animalId);

    setName = name => this.#name = name;
    setPassword = password => this.#password = password;
    setSeenAnimals = seenAnimals => this.#seenAnimals = seenAnimals;
    setBestQuizResult = quizresult => this.#quizresult = quizresult;
    toJSON() {
        return {
            name: this.getName(),
            password: this.getPassword(),
            seenAnimals: Array.from(this.getSeenAnimals()),
            quizresult: this.getBestQuizResult()
        }
    }
}