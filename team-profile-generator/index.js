const inquirer = require('inquirer');
const generatePage = require('./src/page-temp');
const { writeFile } = require('../utils/generate-site');
let managedData = [];



const promptManager = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'team',
                message: 'Enter the name of your team',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a team name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Manager: enter your name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Manager: Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'mEmail',
                message: 'Manager: enter your email',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Manager: please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'Manager: enter your office number',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Manager: Please enter your office number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'mID',
                message: 'Manager: enter your ID',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Manager: please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another Engineer or Intern?',
                default: false
            }
        ])
        .then(employeeData => {
            managedData.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'employeeList',
                        message: 'What Employee did you want to add',
                        choices: ['Intern', 'Engineer']
                    }
                ])
                    .then(listAnswers => {
                        if (listAnswers.employeeList === 'Intern') {
                            promptIntern();
                        } else {
                            promptEngineer();
                        }
                    })

            } else {
                const allHTML = generatePage(managedData)
                writeFile(allHTML)
                    .then(() => {
                        console.log('file created')
                    })
            }
        })
};

const promptEngineer = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineer',
                message: 'Engineer: enter your name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Engineer: Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'eEmail',
                message: 'Engineer: enter your email',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Engineer: please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'eGit',
                message: 'Engineer: enter your GitHub userName',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Engineer: Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'eID',
                message: 'Engineer: enter your ID',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Engineer: please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another Engineer or Intern?',
                default: false
            }
        ])
        .then(employeeData => {
            managedData.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'employeeList',
                        message: 'What Employee did you want to add',
                        choices: ['Intern', 'Engineer']
                    }
                ])
                    .then(listAnswers => {
                        if (listAnswers.employeeList === 'Intern') {
                            promptIntern();
                        } else {
                            promptEngineer();
                        }
                    })

            } else {
                const allHTML = generatePage(managedData)
                writeFile(allHTML)
                    .then(() => {
                        console.log('file created')
                    })
            }
        })
};


const promptIntern = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'intern',
                message: 'Intern: enter your name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Intern: Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'iEmail',
                message: 'Intern: enter your email',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Intern: please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'iGit',
                message: 'Intern: enter your GitHub username',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Intern: Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Intern: enter your school name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Intern: Please enter your school name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'iID',
                message: 'Intern: enter your ID',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Intern: please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another Engineer or Intern?',
                default: false
            }
        ])
        .then(employeeData => {
            managedData.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'employeeList',
                        message: 'What Employee did you want to add',
                        choices: ['Intern', 'Engineer']
                    }
                ])
                    .then(listAnswers => {
                        if (listAnswers.employeeList === 'Intern') {
                            promptIntern();
                        } else {
                            promptEngineer();
                        }
                    })

            } else {
                const allHTML = generatePage(managedData)
                writeFile(allHTML)
                    .then(() => {
                        console.log('file created')
                    })
            }
        })
};

promptManager();