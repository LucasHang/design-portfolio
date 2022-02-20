const random = () => Math.floor(Math.random() * 255);
const randomRgb = () => `rgb(${random()}, ${random()}, ${random()})`;

function getQueryArrayIfExists(maybeArray: string | Array<string> | undefined): Array<string> | undefined {
    if (!maybeArray) {
        return undefined;
    }

    if (Array.isArray(maybeArray)) {
        return maybeArray;
    }

    if (typeof maybeArray === 'string') {
        return maybeArray.split(',');
    }

    return [maybeArray];
}

export { random, randomRgb, getQueryArrayIfExists };
