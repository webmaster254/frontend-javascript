interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;  // Allow any additional attributes
}

// Example usage
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: true,  // Additional attribute
};

// Example with optional yearsOfExperience
const teacher4: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
    specialty: 'Math'  // Additional attribute
};

console.log(teacher3);
console.log(teacher4);
    