// Generate markdown for the README
function generateMarkdown(response) {
    return `
    
    ## Title
    ${response.Title}

    ## Table of Contents
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributors](#contributors)
    *[Test](#test)
    *[Questions](#questions)

    ## Description
    ${response.Description}

    ## Installation
    ${response.Install}

    ## Usage
    ${response.Usage}

    ##License
    ${response.License}

    ## Contributors
    ${response.Contributors}

    ## Test
    ${response.Test}

    ## Questions
    Contact/

    Github: [${response.Github}](https://github.com/ianf777)

    Email: [${response.Email}](ianwfuzzy@gmail.com)

    `;
}
module.exports = generateMarkdown