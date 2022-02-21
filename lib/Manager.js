const Employee = require('./Employee');

class Manager extends Employee{
  // Initialize team member details
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    if (typeof officeNumber !== 'string' || !officeNumber.trim().length) {
        throw new Error("Expected parameter 'office number' to be required parameter");
    }
    this.officeNumber = officeNumber;
    this.myTeamMembers = [];
  }
  getRole () {
      return 'Manager';
  }

  getMyTeamMembers() {
      return this.myTeamMembers;
  }

  getOfficeNumber() {
      return this.officeNumber;
  }

  // Add team member
  addTeamMember(teamMember) {
    this.myTeamMembers.push(teamMember);
  }

}

module.exports = Manager;