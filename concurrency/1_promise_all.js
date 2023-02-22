function firsPromise() {
    return new Promise((resolve) => {
        resolve(`first promise`);
    });
}

function secondPromise() {
    return new Promise((resolve) => {
        resolve(`second promise`);
    });
}

function thirdPromise() {
    return new Promise((resolve) => {
        resolve(`third promise`);
    });
}

export {firsPromise, secondPromise, thirdPromise};