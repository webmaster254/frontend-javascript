interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
    
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
    
const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "New York"
};
    
const studentsList: Student[] = [student1, student2];
    
const table = document.createElement("table");
    
for (const student of studentsList) {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
}
    
document.body.appendChild(table);
