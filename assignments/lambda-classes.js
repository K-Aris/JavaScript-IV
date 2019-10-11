// Lambda School 

class Person {
    constructor(personProp) {
        this.firstName = personProp.firstName; 
        this.lastName = personProp.lastName; 
        this.age = personProp.age; 
        this.location = personProp.location; 
    }
    speak() {
        return `Hello my name is ${this.firstName} ${this.lastName}, I'm from ${this.location}`; 
    }
}

class Instructor extends Person {
    constructor(instProp) {
        super(instProp);
        this.goodAt = instProp.goodAt;
        this.favLang = instProp.favLang;
        this.motto = instProp.motto;
        }
        demo(subject) {
            return `Today we are learning about ${subject}`;
        }
        grade(student, subject) {
            return `${student.firstName} receives a perfect score on ${subject}`; 
        }
}


class Student extends Person {
    constructor(studentProp) {
        super(studentProp);
        this.previousBackground = studentProp.previousBackground; // what they did before
        this.className = studentProp.className; //PT 11
        this.favSubj = studentProp.favSubj; //an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript'
    }
    //   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    listSubjects() {
        return `${this.firstName} likes ${this.favSubj}`; 
        // return - favSubj logged out one by one 
    }

    PRAssignment(subject) {
        return `${this.firstName} has submitted a PR for: ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.firstName} has begun sprint challenge on ${subject}`;
    }
}


class ProjectManagers extends Instructor {
    constructor(pmProp){
        super(pmProp);  
        this.gradClassName = pmProp.gradClassName;
        this.favInstructor = pmProp.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.firstName} announces to ${slackChannel}, @channel standy times!`;
    }

    debugCode(student, subject) {
        return `${this.firstName} debugs ${student.firstName}'s code on ${subject}`; 
    }
}


const amy = new Person({
    firstName: "Amy",
    lastName: "Another",
    age: 25,
    location: "Canada", 
})


const fred = new Instructor({
    firstName: 'Fred',
    lastName: 'Jones',
    location: 'Bedrock',
    age: 37,
    favLang: 'JavaScript',
    goodAt: 'Front-end',
    motto: "Don't forget the homies", 
});


const chris = new Student ({
    firstName: 'Chis',
    lastName: 'Hernz',
    location: 'Cali',
    age: 37,
    previousBackground: "Pilates Instructor",
    className: "WebPt11",
    favSubj: "cobal"
});

const bill  = new ProjectManagers({
    firstName: 'Bill',
    lastName: 'Gates',
    location: 'Microsoft',
    age: 92,
    favLang: 'Wine',
    goodAt: 'Being A Billionaire',
    motto: "We be curing polio",
    gradClassName: "DOS for Dummies",
    favInstructor: "Steve Jobs",
});

//Person
console.log(amy);

//Instructor
console.log(fred);
console.log(fred.speak()); 
console.log(fred.demo("CSS"));
console.log(fred.grade(chris, "Theoretical Physics"));

//Student 
console.log(chris);
console.log(chris.listSubjects());
console.log(chris.PRAssignment("super computing"));
console.log(chris.sprintChallenge("AI"));

//ProjectManagers
console.log(bill);
console.log(bill.standUp("Code4Life"));
console.log(bill.debugCode(chris, "AS400")); 


//Constructor Check 
console.log(Person);
console.log(Student);
console.log(Instructor);
console.log(ProjectManagers);





// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
