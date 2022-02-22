const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Engineer object with passing arguements to constructor, with values name 'Sanjeev Kumar', id 12345 and email 'sanjeevkumar@me.com' and github account 'SanjeevKumar-DEV'", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const githubUsername = 'SanjeevKumar-DEV';

            // Act
            const obj = new Engineer(name, id, email, githubUsername);

            // Assert
            expect(obj.name).toEqual('Sanjeev Kumar');
            expect(obj.id).toEqual('12345');
            expect(obj.email).toEqual('sanjeevkumar@me.com');
            expect(obj.githubUsername).toEqual('SanjeevKumar-DEV');
        });

        it("should create an Engineer object with passing arguements to constructor, with values name 'Sanjeev Kumar', id 12345 and email 'sanjeevkumar@me.com' and github account 'SanjeevKumar-DEV'", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const githubUsername = 'SanjeevKumar-DEV';
            const githubProfile = `https://github.com/${githubUsername}`;

            // Act
            const obj = new Engineer(name, id, email, githubUsername);

            // Assert
            expect(obj.name).toEqual('Sanjeev Kumar');
            expect(obj.id).toEqual('12345');
            expect(obj.email).toEqual('sanjeevkumar@me.com');
            expect(obj.githubProfile).toEqual('https://github.com/SanjeevKumar-DEV');
        });

        // Exception test
        it("should throw an error if not provided a name parameter value", () => {
            // Arrange
            const name = 'Sanjeev Kumar';
            const id = '12345';
            const email = 'sanjeevkumar@me.com';
            const githubUsername = '';
            const engineer = () => new Engineer(name, id, email, githubUsername);
            const err = new Error(
                "Expected parameter 'Github Username' to be required parameter"
            );

            // Assert
            expect(engineer).toThrowError(err);
        });


    });
});
