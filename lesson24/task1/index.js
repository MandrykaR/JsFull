
export const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return week[new Date(dateInFuture).getDay()];
}

const result = dayOfWeek(new Date(2023, 10, 12), 0)
console.log(result);































