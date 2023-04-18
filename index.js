const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const renderTeam = require('./src/page-template');


const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const teamMembers = [];
const addToTeam = [];

console.log("\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n");

const questions = () => {
    const createTeam = async () => {
        const { teamMember } = await inquirer.prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'Which type of team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', "I don't want to add more team members"],
            },
        ]);

        switch (teamMember) {
            case 'Manager':
                await createManager();
                break;
            case 'Engineer':
                await createEngineer();
                break;
            case 'Intern':
                await createIntern();
                break;
            default:
                buildTeam();
        }
    };

    const createManager = async () => {
        const { managerName, managerId, managerEmail, managerOffNum } = await inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the manager's id?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'managerOffNum',
                message: "What is the manager's office number?",
            },
        ]);

        const manager = new Manager(managerName, managerId, managerEmail, managerOffNum);
        teamMembers.push(manager);
        addToTeam.push(managerId);
        createTeam();
    };

    const createEngineer = async () => {
        const { engineerName, engineerId, engineerEmail, engineerGitHub } = await inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's id?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is the engineer's GitHub username?",
            },
        ]);

        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
        teamMembers.push(engineer);
        addToTeam.push(engineerId);
        createTeam();
    };

    const createIntern = async () => {
        const { internName, internId, internEmail, internGithub } = await inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's id?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern",
            },
            {
                type: 'imput',
                name: 'internGithub',
                mesage: "What is ther intern's Github username",
            },
        ]);

        const intern = new Intern(internName, internId, internEmail, internGithub);
        teamMembers.push(Intern);
        addToTeam.push(internId);
        createTeam();
    };


    }