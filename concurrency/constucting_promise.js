const executorFunction = (resolve, reject) => {
    const isCoffeeMakerisReady = true;
    if (isCoffeeMakerisReady) {
        resolve(`Kopi berhasil dibuar`);
    } else {
        reject(`Mesin kopi tidak bisa digunakan`);
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}

console.log(makeCoffee());