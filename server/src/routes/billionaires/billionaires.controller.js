const { loadBillionaires } = require('../../models/billionaires.model');

async function getBillionaires(req, res) {
	try {
		const billionaires = await loadBillionaires();
		return res.status(200).json(billionaires);
	} catch (error) {
		return res.status(500).json({ error: 'Internal Server Error' });
	}
}

module.exports = { getBillionaires };
