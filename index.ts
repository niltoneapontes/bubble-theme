const myGrades = [5, 10, 9];

const calculateAverage = (grades: number[]) => {
  const sum = grades.reduce((acc, value) => acc += value, 0);
  const exams = grades.length;

  return sum/exams;
}

calculateAverage(myGrades);

