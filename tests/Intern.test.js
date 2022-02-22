const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Intern object with passing arguements to constructor, with values name 'Sanjeev Kumar', id 12345 and email 'sanjeevkumar@me.com' and school info 'La Trobe University'", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const school = 'La Trobe University';

            // Act
            const obj = new Intern(name, id, email, school);

            // Assert
            expect(obj.name).toEqual('Sanjeev Kumar');
            expect(obj.id).toEqual('12345');
            expect(obj.email).toEqual('sanjeevkumar@me.com');
            expect(obj.school).toEqual('La Trobe University');
        });


        // Exception test
        it("should throw an error if not provided a name parameter value", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const school = '';
            const intern = () => new Intern(name, id, email, school);
            const err = new Error(
                "Expected parameter 'school' to be required parameter"
            );

            // Assert
            expect(intern).toThrowError(err);
        });


    });
});
