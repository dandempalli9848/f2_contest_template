// Initial employees array
let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

// 1. Print developers using map
function PrintDeveloperbyMap() {
    employees.map((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// 2. Print developers using forEach
function PrintDeveloperbyForEach() {
    employees.forEach((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// 3. Add new employee and print the updated array
function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
}

// 4. Remove admin(s) and print the updated array
function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

// 5. Concatenate with a new array and print the result
function ConcatinateArray() {
    const newEmployees = [
        { id: 5, name: "alice", age: "22", profession: "designer" },
        { id: 6, name: "bob", age: "24", profession: "manager" },
        { id: 7, name: "charlie", age: "21", profession: "tester" }
    ];
    const combinedArray = employees.concat(newEmployees);
    console.log(combinedArray);
}
