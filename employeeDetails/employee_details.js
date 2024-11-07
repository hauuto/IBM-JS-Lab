

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
];

// Function to display all employees
function displayEmployees(){
    document.getElementById('employeesDetails').innerHTML = employees.map((employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
}



function calculateTotalSalaries(){
    const sum = employees.reduce((total, employees) => total + employees.salary, 0)
    alert(`Total salaries of all employees is $${sum}`);
}


function displayHREmployees(){
    document.getElementById('employeesDetails').innerHTML = employees.filter(employee => employee.department === 'HR').map((employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
}


function findEmployeeById(ID){
    const foundEmployee = employees.find(employee => employee.id === ID);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;

    }else{
        document.getElementById('employeesDetails').innerHTML = `<p>Employee with ID ${ID} not found</p>`;
    }
}