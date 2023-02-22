//yg terjadi kemudian jika ada & tidak ada

const stok = {
    coffeBeans: 250,
    water: 1000
}

const checkStok = () => {
    return new Promise((resolve, reject) => {
        if (stok.coffeBeans >= 16 && stok.water >= 250) {
            resolve(`Stock enought, can make coffee`);
        } else {
            reject(`Srock no enought`);
        }
    });
};

//function for resolve & reject
const handleSuccess = resolveValue => {
    console.log(resolveValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStok().then(handleSuccess, handleFailure);