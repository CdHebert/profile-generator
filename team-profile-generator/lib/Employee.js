class Employee {
    constructor(name, id, email, gitHub) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        
    }

    getName(){
        return this.name = ''
    }

    getId(){
       return this.id = ''
    }
    
    getEmail() {
        return this.email = ''
    };

    getGit () {
        return this.gitHub
    };

    getRole() {
        return 'Employee'
    };
};


module.exports = Employee;