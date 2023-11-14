const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

const rotateWeek = (arr, positions) => {
    const rotatedWeek = [...arr];
    const shifted = rotatedWeek.splice(0, positions % arr.length);
    rotatedWeek.push(...shifted);

    return rotatedWeek;
}

export const dayOfWeek = (date, days) => {
    let resultDay = new Date(date);
    resultDay.setDate(resultDay.getDate() + days);

    let dayOfWeekIndex = resultDay.getDay();
    const rotatedWeek = rotateWeek(week, 1);

    return rotatedWeek[dayOfWeekIndex];
}

































