function renderTeam(team) {
  return team.map((employee) => {
    if (employee.getRole() === "Manager") {
      return `<div class="employee">
        <h2>${employee.getName()}</h2>
        <h3>${employee.constructor.name}</h3>
        <p>ID: ${employee.getId()}</p>
        <p>Email: ${employee.getEmail()}</p>
        <p>Office Number: ${employee.officeNumber}</p>
        </div>`
    } else if (employee.getRole() === "Engineer") {
      return `<div class="employee">
        <h2>${employee.getName()}</h2>
        <h3>${employee.constructor.name}</h3>
        <p>ID: ${employee.getId()}</p>
        <p>Email: ${employee.getEmail()}</p>
        <p>Github: ${employee.github}</p>
        </div>`
    } else if (employee.getRole() === "intern") {
      return `<div class="employee">
        <h2>${employee.getName()}</h2>
        <h3>${employee.constructor.name}</h3>
        <p>ID: ${employee.getId()}</p>
        <p>Email: ${employee.getEmail()}</p>
        <p>School: ${employee.school}</p>
        </div>`
    }
  })
}
function generatePage(team) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="style.css" rel="stylesheet">
    
    </head>
    <body>
        <header class="title"> 
            <p>My Team</p>
        </header>
        <div class="team">
          ${renderTeam(team)}
        </div>
    </body>
    </html>`
}

module.exports = generatePage
