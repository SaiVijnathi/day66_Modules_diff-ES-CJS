let {studentData, students} = require("./students");

let facultyModule = require("./faculty");

studentData();
console.log("-------------");

for (let student of students) {
  console.log(`Name: ${student.name}, Age: ${student.age}, Mother's Name: ${student.motherName}, Father's Name: ${student.fatherName}`);  
  console.log("-------------");
}

facultyModule.facultyData();
console.log("-------------");
console.log(`Principal: ${facultyModule.principal}`);
console.log("-------------");
console.log(`Telugu Teacher: ${facultyModule.teluguTeacher}`);
console.log("-------------");
console.log(`Hindi Teacher: ${facultyModule.hindiTeacher}`);
console.log("-------------");
console.log(`English Teacher: ${facultyModule.englishTeacher}`);
console.log("-------------");
console.log(`Maths Teacher: ${facultyModule.mathsTeacher}`);
console.log("-------------");
console.log(`Science Teacher: ${facultyModule.scienceTeacher}`);
console.log("-------------");
console.log(`Social Teacher: ${facultyModule.socialTeacher}`);
console.log("-------------");
console.log(`Sports Teacher: ${facultyModule.sportsTeacher}`);

