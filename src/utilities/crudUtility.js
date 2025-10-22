import { ref, watch } from 'vue';
import User from '../data/user';
const apiKey = "https://reeldev.hu/api/68f0bc4f541ae089479746";
const registeredUser = ref(await getRegisteredUserFromJSON());
const bestQuiz = ref(registeredUser.value?.getBestQuizResult() || 0);

watch(registeredUser, async (newUser, oldUser) => {
    localStorage.setItem("registeredUser", newUser ? newUser.getCrudId() : "");
});

async function addUser(user, destination = "users") {
    try {
        await fetch(`${apiKey}/${destination}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user.toJSON())
        });
    }
    catch (e) {
        console.error(e);
    }
}

async function getRegisteredUserFromJSON() {
    return User.userInstanceFromJSON(await fetchRegisteredUserData());
}

async function updateRegisteredUserData() {
    await postUserChanges(registeredUser.value, "users", getRegisteredUserIdFromLocalstorage());
}

async function fetchRegisteredUserData() {
    const registeredUserId = getRegisteredUserIdFromLocalstorage();
    const usersJsonList = await (await fetch(`${apiKey}/users`)).json();
    return usersJsonList.find(user => user.id === registeredUserId) || null;
}


function getRegisteredUserIdFromLocalstorage() {
    return localStorage.getItem("registeredUser");
}

async function postUserChanges(user, destination = "users", id) {
    if (!id) return;
    try {
        await fetch(`${apiKey}/${destination}/${id || user.getCrudId()}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user.toJSON())
        });

    }
    catch (e) {
        console.error(e);

    }
}

async function fetchUsers() {
    try {
        return await (await fetch(apiKey + "/users")).json();
    }
    catch (e) {
        console.error(e);
    }
}

async function fetchUserByName(name) {
    try {
        const userList = await fetchUsers();
        return userList.find(user => user.name == name);
    }
    catch (e) {
        console.error(e);

    }
}


export { addUser, fetchUserByName, fetchRegisteredUserData, postUserChanges, updateRegisteredUserData, registeredUser, bestQuiz };