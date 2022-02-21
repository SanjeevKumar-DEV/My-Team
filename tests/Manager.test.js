const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Manager object with passing arguements to constructor, with values name 'Sanjeev Kumar', id 12345 and email 'sanjeevkumar@me.com' and officeNumber '34567'", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const officeNumber = '34567';

            // Act
            const obj = new Manager(name, id, email, officeNumber);

            // Assert
            expect(obj.name).toEqual('Sanjeev Kumar');
            expect(obj.id).toEqual('12345');
            expect(obj.email).toEqual('sanjeevkumar@me.com');
            expect(obj.officeNumber).toEqual('34567');
        });

        // Exception test
        it("should throw an error if not provided a name parameter value", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const officeNumber = '';
            const manager = () => new Manager(name, id, email, officeNumber);
            const err = new Error(
                "Expected parameter 'office number' to be required parameter"
            );

            // Assert
            expect(manager).toThrowError(err);
        });


    });
});
