export const getGreenwichTime = (date) => {
    return date.toISOString().substr(11, 5)
}

let inputDate = new Date();
getGreenwichTime(inputDate);
