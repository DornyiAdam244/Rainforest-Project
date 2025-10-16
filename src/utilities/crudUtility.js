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


export { addUser };