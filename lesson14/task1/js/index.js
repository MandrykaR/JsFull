let memoryNum = 0;

export const add = (num) => {
    memoryNum += num;
    return ramNum;
}

console.log(add(21));

export const decrease = (num) => {
    memoryNum -= num;
    return ramNum;
}

console.log(decrease(23));

export const reset = () => {
    ramNum = 0;
}

export const getMemo = () => {
    return ramNum;
}