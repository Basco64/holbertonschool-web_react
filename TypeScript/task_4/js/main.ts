/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />


const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = {
  firstName: "Don",
  lastName: "Diego",
  experienceTeachingC: 5,
  experienceTeachingReact: 0,
  experienceTeachingJava: 3,
};

cpp.setTeacher(teacher);
react.setTeacher(teacher);
java.setTeacher(teacher);

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
