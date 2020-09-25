const fs = require("fs");
const inquirer = require("inquirer");
const { type } = require("os");
const generateMarkdown = require(./generateMarkdown);

// Array for user input questions
const questions = [
    {
        type: "input",
        message: "What is the desired title of this project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Write a description of your project",
        name: "Description"
    },
    {
        type: "input",
        message: "Write the instructions for installing your application here",
        name: "Install"
    
    },
    {
        type: "input",
        message: "How do you use your app?",
        name: "Instructions"
        
    },
    {
        type: "list",
        message: "select the license you're using",
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
        name: "Contributors"

    },
    {
        type: "input",
        message: "how do you test this app?",
        name: "Test"

    },
    {
        type: "input",
        message: "Questions?",
        name: "Questions"
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name: "Github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
];   

// Function for writing the file