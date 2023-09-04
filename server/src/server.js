const http = require('http');
const app = require('./app');
const { loadBillionaires } = require('./models/billionaires.model');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

async function startServer() {
	try {
		await loadBillionaires();

		server.listen(PORT, () => {
			console.log(`Listening on PORT ${PORT}`);
		});
	} catch (error) {
		console.error('Error loading data:', error);
	}
}

startServer();
