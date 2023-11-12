const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];


export const dayOfWeek = (date, days) => {
    let resultDay = new Date(date);
    resultDay.setDate(resultDay.getDate() + days);

    let dayOfWeekIndex = resultDay.getDay();

    return week[dayOfWeekIndex]
}

console.log(dayOfWeek(new Date(2023, 10, 12), 1));































