const fs = require('fs');

const writeDataToFile = (filename, contents) => {
	fs.writeFileSync(filename, JSON.stringify(contents));
}

module.exports = {
	writeDataToFile
}