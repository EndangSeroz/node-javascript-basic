function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");



async function main() {
    try {
        console.log("Fetching username...");
        const username = await fetchUsername();
        console.log(`You are logged in as ${username}`);
        console.log("Welcome!");
    } catch(e) {
        console.log("Username tidak ditemukan");
    }
}