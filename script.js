//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
   get name(){
	   return this._name;
   }
   set age(age){
	   this._age = age;
   }
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
// example usage:
const student1 = new Student("john", 20);
student1.study(); // output : John is studying 
const teacher1 = new Teacher("Professor Smith", 35)
teacher1.teach(); // output: Professor sm
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
