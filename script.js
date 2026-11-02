function calculateGrades(students) {
  const results = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = (student.math + student.english + student.science) / 3;

    let grade;
    if (average >= 90) {
      grade = "A";
    } else if (average >= 80) {
      grade = "B";
    } else if (average >= 70) {
      grade = "C";
    } else {
      grade = "F";
    }

    results.push({
      name: student.name,
      average: average,
      grade: grade,
    });
    debugger;

    return results;
  }
}

const students = [
  { name: "Ana", math: 95, english: 88, science: 92 },
  { name: "Ben", math: 72, english: 68, science: 75 },
  { name: "Carlos", math: 83, english: 79, science: 91 },
];

const finalResults = calculateGrades(students);
console.log(finalResults);
