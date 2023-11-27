const shmoment = (initialDate) => {
    let currentDate = new Date(initialDate);

    const operations = {
        add: (unit, value) => {
            switch (unit) {
                case 'years':
                    currentDate.setFullYear(currentDate.getFullYear() + value);
                    break;
                case 'months':
                    currentDate.setMonth(currentDate.getMonth() + value);
                    break;
                case 'days':
                    currentDate.setDate(currentDate.getDate() + value);
                    break;
                case 'hours':
                    currentDate.setHours(currentDate.getHours() + value);
                    break;
                case 'minutes':
                    currentDate.setMinutes(currentDate.getMinutes() + value);
                    break;
                case 'seconds':
                    currentDate.setSeconds(currentDate.getSeconds() + value);
                    break;
                case 'milliseconds':
                    currentDate.setMilliseconds(currentDate.getMilliseconds() + value);
                    break;
                default:
                    break;
            }
            return operations;
        },
        subtract: (unit, value) => {
            return operations.add(unit, -value);
        },
        result: () => {
            return currentDate;
        },
    };

    return operations;
};

const resultDate = shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result();
