const { multiplyMyArray, multiplyVector, FibonnaciNumber } = require('./myarrays');
const { validateBody, validateArray } = require('./validator')

exports.handler = async function (event, context) {

    const body = JSON.parse(event.body);
    const valid = await validateBody(body);

    let result = '';
    if (valid === null) {
        const typeMethod = +(body.method);
        switch (typeMethod) {
            case 1:
                if (+(body.number) > 0)
                    result = { status: 200, body: FibonnaciNumber(body.number) };
                else
                    result = { status: 406, body: 'number must be positive' };
                break;
            case 2:
                result = validateArray(body.array);
                if (result === null)
                    result = { status: 200, body: await multiplyMyArray(body.number, body.array) }

                break;
            case 3:

                result = validateArray(body.array);
                if (result === null)
                    result = { status: 200, body: await Promise.all(body.array.map(x => multiplyVector(body.number, x))) }

                break;
        }

        return result;
    }
    else {
        return { statusCode: valid.status, body: valid.body }
    }
}


