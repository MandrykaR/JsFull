const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

export const dayOfWeek = (date, days) => {
    let resultDay = new Date(date);
    resultDay.setDate(resultDay.getDate() + days - 1);

    let dayOfWeekIndex = resultDay.getDay();

    return week[dayOfWeekIndex]
}
































