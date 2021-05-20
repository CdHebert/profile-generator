const Engineer = require('./Engineer')

class Manager extends Engineer{
    constructor (name,id,email,gitHub, officeNumber){

    super(name,id,email,gitHub);
    this.officeNumber = officeNumber
    
    }

    getOffice(){
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    };

 }

module.exports = Manager