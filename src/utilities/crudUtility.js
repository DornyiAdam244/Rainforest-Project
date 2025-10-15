const apiKey = "https://crudcrud.com/api/5587de141e0541b8b4cb595bc96ee857/users";


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


export { addUser };