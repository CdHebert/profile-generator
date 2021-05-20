const Engineer = require('./Engineer')

class Intern extends Engineer {
    constructor (name,id,email,gitHub){

    super(name,id,email,gitHub);

   
    
    }


    getRole() {
        return 'Intern'
    };

 }

module.exports = Intern