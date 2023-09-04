const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

function loadBillionaires() {
	return new Promise((resolve, reject) => {
		const billionaires = [];

		fs.createReadStream(
			path.join(__dirname, '..', '..', 'data', 'billionaires.csv')
		)
			.pipe(
				parse({
					comment: '#',
					columns: true,
				})
			)
			.on('data', (billionaire) => {
				if (billionaire) {
					billionaires.push(billionaire);
				}
			})
			.on('error', (err) => {
				console.log(err);
				reject(err);
			})
			.on('end', () => {
				resolve(billionaires);
			});
	});
}

module.exports = {
	loadBillionaires,
};
