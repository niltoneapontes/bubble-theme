const myGrades = [5, 10, 9];


export class MyFunctions {
  constructor() {
  }
  
  calculateAverage = (grades: number[]) => {
    const sum = grades.reduce((acc, value) => acc += value, 0);
    const exams = grades.length;
  
    return sum/exams;
  }
}

const myFunctions = new MyFunctions();

myFunctions.calculateAverage(myGrades);

