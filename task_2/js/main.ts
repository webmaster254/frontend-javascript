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