
	
	// 'use strict';

	// let jsonData = require('./generatedProvinces/abra.json');

	// console.log(jsonData);  

	'use strict';

	const fs = require('fs');

	fs.readFile('generatedProvinces/abra.json', (err, data) => {  
	    if (err) throw err;
	    let student = JSON.parse(data);
	    console.log(student);
	});

