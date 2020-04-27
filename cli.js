// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connection Set up
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);

    startPrompting();
});

function startPrompting() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add Department",
            "Add Role",
            "Add Employee",
            "View Department",
            "View Role",
            "View Employee",
            "Update Employee Role",
            "EXIT"]
    }).then(function (answer) {
        console.log("You selected: " + answer.action);

        switch (answer.action) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
        }
    });
}



// Functions for Adding Dept, Role, Employee 
function addDepartment()

function addRole()

function addEmployee()