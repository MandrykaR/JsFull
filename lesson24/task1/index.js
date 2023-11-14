const week = ['Su', 'Mo', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
    let resultDay = new Date(date);
    resultDay.setDate(resultDay.getDate() + days);

    let dayOfWeekIndex = resultDay.getDay();

    return week[dayOfWeekIndex]
}

































