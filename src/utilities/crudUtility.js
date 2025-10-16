const apiKey = "https://reeldev.hu/api/68f0bc4f541ae089479746/users";


async function addUser(user) {
    try {
        await fetch(apiKey, {
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

async function fetchUserId(id) {
    try {
        return await (await fetch(`${apiKey}/${id}`)).json();
    }
    catch (e) {
        console.error(e);
    }
}

async function fetchUsers() {
    try {
        const a = await (await fetch(apiKey)).json();
        console.log(a);
        
        return a;
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


export { addUser, fetchUserId, fetchUserByName };