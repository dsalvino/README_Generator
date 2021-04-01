function renderLicenseBadge (licenses) {
    switch (licenses) {
        case 'MIT':
            return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
        case 'GPLv2':
            return ('[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)');
        case 'Apache':
            return ('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
        default:
            return ('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)');
    }
};

const generateREADME = (data) =>
` 
# ${data.title}
## About
${renderLicenseBadge(data.licenses[0])}<br>
${data.description}


### Table of Contents
**[About](#about)**<br>
**[Installation Instructions](#installation-instructions)**<br>
**[Usage Information](#usage-information)**<br>
**[Test Instructions](#test-instructions)**<br>
**[Contribution Guidelines](#contribution-guidelines)**<br>
**[Licenses](#licenses)**<br>
**[Contact Me](#contact-me)**<br>

## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Test Instructions
${data.testing}
## Contribution Guidelines
${data.contribution}
## Licenses
${data.licenses}
## Contact Me
<br>${data.email}<br>
<github.com/${data.github}>`

    module.exports = generateREADME;