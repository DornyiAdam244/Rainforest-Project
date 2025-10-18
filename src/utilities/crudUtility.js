import { ref, watch } from 'vue';
import User from '../data/user';
const apiKey = "https://reeldev.hu/api/68f0bc4f541ae089479746";
const registeredUser = ref(await getRegisteredUserFromJSON());
watch(registeredUser, async (newUser, oldUser) => await switchRegisteredUsers(newUser, oldUser));

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
    return User.userInstanceFromJSON(await fetchRegisteredUser());
}


async function updateSeenAnimalsForRegisteredUser() {
    await postUserChanges(registeredUser.value, "registeredUser");
    const idFromUsersTable = User.userInstanceFromJSON(await fetchUserByName(registeredUser.value.getName())).getCrudId();
    await postUserChanges(registeredUser.value, "users", idFromUsersTable);
}

async function fetchUserId(id, destination = "users") {
    try {
        return await (await fetch(`${apiKey}/${destination}/${id}`)).json();
    }
    catch (e) {
        console.error(e);
    }
}

async function fetchRegisteredUser() {
    try {
        return (await (await fetch(`${apiKey}/registeredUser`)).json())[0] || null;
    }
    catch (e) {
        console.error(e);
    }
}

async function postUserChanges(user, destination = "users", id=null) {
    try {
        console.log(user.toJSON());
        console.log(JSON.stringify(user.toJSON()));
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

async function switchRegisteredUsers(newUser, oldUser) {
    try {   
        if (oldUser) {
            await fetch(`${apiKey}/registeredUser/${oldUser.getCrudId()}`, {
                method: 'DELETE'
            });
        }
        if (newUser) {
            await addUser(newUser, "registeredUser");
        }
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


export { addUser, fetchUserId, fetchUserByName, fetchRegisteredUser, postUserChanges, switchRegisteredUsers, registeredUser, updateSeenAnimalsForRegisteredUser };