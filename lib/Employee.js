class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be required parameter");
        }
        if (typeof id !== 'string' || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be required parameter");
        }
        if (typeof email !== 'string' || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be required parameter");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;