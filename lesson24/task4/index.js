let students = [
    { name: 'Tom', birthDate: '12/3/2010' },
    { name: 'Ben', birthDate: '05/7/2001' },
    { name: 'Sam', birthDate: '05/15/2022' }
];

export const studentsBirthDays = (students) => {
    const studentsCopy = [...students];

    studentsCopy.sort((a, b) => new Date(b.birthDate) - new Date(a.birthDate));

    let groupedStudents = {};

    studentsCopy.forEach(student => {
        let birthDate = new Date(student.birthDate);
        let month = birthDate.toLocaleString('en-US', { month: 'short' });

        groupedStudents[month] = groupedStudents[month] ? groupedStudents[month].concat(student.name) : [student.name];
    });

    return groupedStudents;
}

let groupedByBirthdays = studentsBirthDays(students);
console.log(groupedByBirthdays);
