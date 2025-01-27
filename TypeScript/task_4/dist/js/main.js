/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var cpp = new Subjects.Cpp();
var react = new Subjects.React();
var java = new Subjects.Java();
var teacher = {
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
//# sourceMappingURL=main.js.map