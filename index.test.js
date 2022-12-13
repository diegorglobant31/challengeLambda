const { multiplyMyArray, multiplyVector, FibonnaciNumber } = require('./myarrays');
const { validateBody, validateArray } = require('./validator')

test('Get error from invalid body', async () => {

    const body = JSON.stringify({
        method: "1",
        array: [1, 10, 7, 9, 8, 29],
        number: 'not numeric'
    })

    expect(await validateBody(body)).toEqual({ status: 406, body: 'number must be numeric' });
})

test('Get error from invalid array value', async () => {
    const wrongValue = [1, 'wrong', 2]
    expect(await validateArray(wrongValue)).toEqual({ status: 406, body: 'array has non valid values' });
})

test('Get fibonacci secuence from a number', () => {
    expect(FibonnaciNumber(3)).toEqual([0, 1, 1]);
})

test('Get fibonacci secuence from a wrong number', () => {
    expect(FibonnaciNumber(-3)).toEqual([]);
})

test('Get product from scalar and array from a number', async () => {
    const array = [2, 3, 4, 5];
    const arrayResult = [4, 6, 8, 10];
    expect(await multiplyMyArray(2, array)).toEqual(arrayResult);
})

test('Get  calculate product between an scalar and one vector', async () => {
    const array = [[2, 3], [4, 5], [4, 1]];
    const arrayResult = [[4, 6], [8, 10], [8, 2]];
    expect(await Promise.all(array.map(x => multiplyVector(2, x)))).toEqual(arrayResult);
})