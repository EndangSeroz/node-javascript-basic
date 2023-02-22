import {firsPromise, secondPromise, thirdPromise} from "./1_promise_all.js";

const promises = [firsPromise(), secondPromise(), thirdPromise()];

Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });
