const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name,id,email,gitHub){

    super(name,id,email,gitHub);
    
    }


    getRole() {
        return 'Intern'
    };

 }

module.exports = Intern