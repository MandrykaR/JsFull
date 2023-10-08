export const createArrayOfFunctions = (num) => {

    let arr = [];

    if (typeof num !== 'number') {
        return null;
    }

    if (!num === undefined) {
        return [];
    }

    for (let i = 0; i < num; i++) {
        arr.push(function () {
            return i
        })
    }
    return arr;
}

createArrayOfFunctions(9)[8]();