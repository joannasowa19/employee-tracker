// this below is boiler plate code for connecting to mySQL
const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "figo_1357_",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

// start the search function
function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        "Add employee",
        "Add department",
        "Add role",
        "Update employee role"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View all employees":
          employeeList();
          break;
        case "View all departments":
          departmentList();
          break;
        case "View all roles":
          rolesList();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Update employee role":
          updateRole();
          break;
      }
    });
}

// employee function
function employeeList() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "Which employee would you like to find?"
    })
    .then(function(answer) {
      var query =
        "SELECT first_name, last_name, role_id, manager_id FROM employees WHERE ?";
      connection.query(query, { employee: answer.employee }, function(
        err,
        res
      ) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Employee: " +
              res[i].first_name +
              res[i].last_name +
              res[i].role_id +
              res[i].manager_id
          );
        }
        runSearch();
      });
    });
}

// department function
function departmentList() {
  inquirer
    .prompt({
      name: "pickDepartment",
      type: "input",
      message: "Which department would you like to search for?"
    })
    .then(function(answer) {
      switch (answer.pickDepartment) {
        case "Marketing":
          pickDepartment = "1";
          break;
        case "Sales":
          pickDepartment = "2";
          break;
        case "Accounting":
          pickDepartment = "3";
          break;
      }
      var data = [];
      var dept = pickDepartment;
      var query = "SELECT employee_name FROM departments WHERE ?";
      connection.query(query, `${dept}`, function(err, res) {
        if (err) throw err;
        res.forEach(person => {
          let employeeInfo = [
            `${person.first_name} ${person.last_name}`,
            `${person.title}`,
            `$${person.salary}`
          ];
          data.push(employeeInfo);
        });
        runSearch();
      });
    });
}

// roles function
function rolesList() {
  inquirer
    .prompt({
      name: "pickRole",
      type: "input",
      message: "Which role would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT title, salary, department_id FROM roles WHERE ?";
      connection.query(query, { pickRole: answer.pickRole }, function(
        err,
        res
      ) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Role: " + res[i].title + res[i].salary + res[i].department_id
          );
        }
        runSearch();
      });
    });
}

// add employee function
function addEmployee() {
  inquirer
    .prompt({
      name: "newEmployee",
      type: "input",
      message: "Would you like to add a new employee?"
    })
    .then(function(answer) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id
        },
        err => {
          if (err) throw err;
          console.log("your new employee was added");
        }
      );
    });
}

// add department function
function addDepartment() {
  inquirer
    .prompt({
      name: "newDepartment",
      type: "input",
      message: "Would you like to add a new department?"
    })
    .then(function(answer) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          employee_name: answer.employee_name,
          department_name: answer.department_name
        },
        err => {
          if (err) throw err;
          console.log("your new department was added");
        }
      );
    });
}

// add role function
function addRole() {
  inquirer
    .prompt({
      name: "newRole",
      type: "input",
      message: "Would you like to add a new role?"
    })
    .then(function(answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        err => {
          if (err) throw err;
          console.log("your new role was added");
        }
      );
    });
}

// update roles function
function updateRole() {
  inquirer
    .prompt({
      name: "updateEmployee",
      type: "input",
      message: "Which employee would you like to update?"
    })
    .then(function(answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        err => {
          if (err) throw err;
          console.log("your employee update was created");
        }
      );
    });
}
