const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an employee object with passing arguements to constructor, with values name 'Sanjeev Kumar', id 12345 and email 'sanjeevkumar@me.com'", () => {
      // Arrange
      const name = 'Sanjeev Kumar';
      const id = '12345';
      const email = 'sanjeevkumar@me.com';

      // Act
      const obj = new Employee(name, id, email);

      // Assert
      expect(obj.name).toEqual('Sanjeev Kumar');
      expect(obj.id).toEqual('12345');
      expect(obj.email).toEqual('sanjeevkumar@me.com');
    });

    // Exception test
    it("should throw an error if not provided a name parameter value", () => {
      // Arrange
      const name = '';
      const id = '12345';
      const email = 'sanjeevkumar@me.com';
      const emp = () => new Employee(name, id, email);
      const err = new Error(
        "Expected parameter 'name' to be required parameter"
      );

      // Assert
      expect(emp).toThrowError(err);
    });

    // Exception test
    it("should throw an error if not provided a id parameter value", () => {
        // Arrange
        const name = 'Sanjeev Kumar';
        const id = '';
        const email = 'sanjeevkumar@me.com';
        const emp = () => new Employee(name, id, email);
        const err = new Error(
          "Expected parameter 'id' to be required parameter"
        );
  
        // Assert
        expect(emp).toThrowError(err);
      });

      // Exception test
    it("should throw an error if not provided a email parameter value", () => {
        // Arrange
        const name = 'Sanjeev Kumar';
        const id = '12345';
        const email = '';
        const emp = () => new Employee(name, id, email);
        const err = new Error(
          "Expected parameter 'email' to be required parameter"
        );
  
        // Assert
        expect(emp).toThrowError(err);
      });


  });
});
