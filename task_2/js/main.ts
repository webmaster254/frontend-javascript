//DirectrorInterface with 3 expected methods
interface DirectorsInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//TeacherInterface with 3 expected methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

//class Directors implements DirectorsInterface
class Director implements DirectorsInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a coffee break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}
  
function createEmployee(salary: number | string): Director | Teacher {
    //if salary is a number and less than 500 - It should return a new Teacher
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200)); // Returns Teacher
console.log(createEmployee(1000)); // Returns Director
console.log(createEmployee('$500')); // Returns Director

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200))); // Returns Teacher
console.log(executeWork(createEmployee(1000))); // Returns Director
console.log(executeWork(createEmployee('$500'))); // Returns Director

// Define a String literal type allowing only Math or History
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

console.log(teachClass('Math')); // Returns 'Teaching Math'
console.log(teachClass('History')); // Returns 'Teaching History'