class ContentHTMLGenerator {

    constructor(manager) {
        this.manager = manager;
        this.htmlContent = '';

        this.managerHTMLContent = `<div class="member manager">
    <div class="member-header">
        <h2>${this.manager.getName()}</h2>
        <h3><img src="./assets/Images/manager.png" width="20px" height="20px">
            Manager</h3>
    </div>
    <div class="member-details">
        <h5 class="member-item">ID : ${this.manager.getId()}</h5>
        <h5 class="member-item">Email : <a href="mailto:${this.manager.getEmail()}">${this.manager.getEmail()}</a></h5>
        <h5 class="member-item">Office Number : ${this.manager.getOfficeNumber()}</h5>
    </div>
</div>`;
        this.teamMemberHTMLContentArray = this.manager.getMyTeamMembers().map(element => {
            if (element.getRole() === 'Engineer') {
                return `<div class="member enginner">
                <div class="member-header">
                    <h2>${element.getName()}</h2>
                    <h3><img src="./assets/Images/engineer.png" width="20px" height="20px">
                        Engineer</h3>
                </div>
                <div class="member-details">
                    <h5 class="member-item">ID : ${element.getId()}</h5>
                    <h5 class="member-item">Email : <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></h5>
                    <h5 class="member-item">Github : <a href="${element.getGithubProfile()}" target="_blank">${element.getGithubProfile()}</a></h5>
                </div>
            </div>`;
            }
            else {
                return `<div class="member intern">
                <div class="member-header">
                    <h2>${element.getName()}</h2>
                    <h3><img src="./assets/Images/intern.png" width="20px" height="20px">
                        Intern</h3>
                </div>
                <div class="member-details">
                    <h5 class="member-item">ID : ${element.getId()}</h5>
                    <h5 class="member-item">Email : <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></h5>
                    <h5 class="member-item">School : ${element.getSchool()}</h5>
                </div>
            </div>`;

            }
        });
        this.teamMemberHTMLContent = this.teamMemberHTMLContentArray.join('\r\n');
        this.createdHTML =
            `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My-Team</title>
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    
    <body class="myTeam">
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="team">
                ${this.managerHTMLContent}
                ${this.teamMemberHTMLContent}
                </div>
            </div>
        </main>
        <footer></footer>
        <!-- Added link to the jQuery library -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="./assets/JS/script.js"></script>
    </body>
    </html>
    `;
    }
    getCreatedHTMLContent() {
        return this.createdHTML;
    }
}

module.exports = ContentHTMLGenerator;