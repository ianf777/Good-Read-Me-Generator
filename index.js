const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
const generateMarkdown = require("./generateMarkdown");

// Array for user input questions
const questions = [
    {
        type: "input",
        message: "What is the desired title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Write the instructions for installing your application here",
        name: "install"
    
    },
    {
        type: "input",
        message: "How do you use your app?",
        name: "usage"
        
    },
    {
        type: "list",
        message: "select the license you're using",
        name: "license",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "No License"
        
        ]
    },
    {
        type: "input",
        message: "name any contributors here",
        name: "contributors"

    },
    {
        type: "input",
        message: "how do you test this app?",
        name: "test"

    },
    {
        type: "input",
        message: "Questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];   

// Function for writing the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("readMe succesfully generated");
      });
    }

//function to initialize the porgram
function init() {
    inquirer.prompt(questions).then((answers) => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}

init()