const {
	getAllNewBillionaires,
	addNewBillionaire,
} = require('../../models/new-billionaires.model');

console.log(getAllNewBillionaires());

function httpGetAllNewBillionaires(req, res) {
	return res.status(200).json(getAllNewBillionaires());
}

function httpAddNewBillionaire(req, res) {
	const newBillionaire = req.body;

	if (
		!newBillionaire.age ||
		!newBillionaire.name ||
		!newBillionaire.nationality ||
		!newBillionaire.netWorth ||
		!newBillionaire.sourceWealth ||
		!newBillionaire.year
	) {
		return res.status(400).json({
			error: 'Missing required property',
		});
	}

	const parsedDate = Date.parse(newBillionaire.year);

	if (isNaN(parsedDate)) {
		return res.status(400).json({
			error: 'Invalid year',
		});
	}

	newBillionaire.year = new Date(parsedDate).getUTCFullYear();

	addNewBillionaire(newBillionaire);
	return res.status(201).json(newBillionaire);
}

module.exports = { httpGetAllNewBillionaires, httpAddNewBillionaire };
