const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name,id,email,gitHub){

    super(name,id,email,gitHub);
    
    }


    getRole() {
        return 'Manager'
    };

 }

module.exports = Manager