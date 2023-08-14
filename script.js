let studentsArr = [
  { name: "John", dept: "CSE", age: 20, isPlaced: true },
  { name: "Jack", dept: "ECE", age: 21, isPlaced: false },
  { name: "Mary", dept: "EEE", age: 18, isPlaced: false },
  { name: "Robert", dept: "IT", age: 19, isPlaced: true },
];
let placedStudentsArr = [];
for (let i = 0; i < studentsArr.length; i++) {
  if (studentsArr[i].isPlaced) {
    placedStudentsArr.push(studentsArr[i]);
  }
}
console.log(placedStudentsArr);

let studentNameStartsWithJ = [];
for (let i = 0; i < studentsArr.length; i++) {
  if (studentsArr[i].name.startsWith("J")) {
    studentNameStartsWithJ.push(studentsArr[i]);
  }
}
console.log(studentNameStartsWithJ);

let studentAgeGreaterThan20 = [];
for (const student of studentsArr) {
  if (student.age >= 20) {
    studentAgeGreaterThan20.push(student);
  }
}

let studentNameWithA = [];
for (const student of studentsArr) {
  if (student.name.includes("a")) {
    studentNameWithA.push(student);
  }
}
console.log(studentNameWithA);

let studentAge20and19 = [];
for (const student of studentsArr) {
  if (student.age == 20 || student.age == 19) {
    studentAge20and19.push(student);
  }
}
console.log(studentAge20and19);
