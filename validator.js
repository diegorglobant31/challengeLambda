
const validateBody = async (objBody) => {
    console.log(objBody.number)
    let errorMsg = null;
    if (isNaN(objBody.method) && isNaN(parseInt(objBody.method))) {
        errorMsg = { status: 406, body: 'method must be numeric' };

    }
    if (isNaN(objBody.number)) {
        errorMsg = { status: 406, body: 'number must be numeric' }
    }
    if (+(objBody.method) === 2 || +(objBody.method) === 3) {
        if (!Array.isArray(objBody.array)) {
            errorMsg = { status: 406, body: 'array must be an array' };
        }

    }
    return errorMsg
}

const validateArray = (array) => {
    const flatArray = FlatArray(array)
    let result = null;
    flatArray.map(x => !isNaN(x) ? x : result = { status: 406, body: 'array has non valid values' })
    return result;
}

function FlatArray(arr = []) {
    return arr.reduce(
        (accumulator, currentValue) =>
            accumulator.concat(
                Array.isArray(currentValue) ? FlatArray(currentValue) : currentValue
            ),
        []
    );
}

module.exports = { validateBody, validateArray }