
const multiplyMyArray = async (number, array) => {
    let myArray = array.map(x => x * number);
    return myArray;
}


function multiplyVector(number, array) {
    const myPromise = new Promise(function (resolve, reject) {
        try {
            resolve(array.map(x => x * number))
        }
        catch (err) {
            reject(null)
        }
    })
    return myPromise
}

const FibonnaciNumber = (number) => {
    let n1 = 0, n2 = 1, nextTerm, arrayResult = new Array();

    for (let i = 1; i <= number; i++) {
        arrayResult.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return arrayResult;
}

module.exports = { multiplyMyArray, multiplyVector, FibonnaciNumber }