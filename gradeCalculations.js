const averageExams = (valuesExam) => {
    const numberValidation = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error(`Please input number`);

    const sumValues = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumValues / valuesExam.lenght;
};

const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);

    if (average > minValues) {
        console.log(`${name} pass the exam`);
        return true;
    } else {
        console.log(`${name} fail the exam`);
        return false;
    }
};
