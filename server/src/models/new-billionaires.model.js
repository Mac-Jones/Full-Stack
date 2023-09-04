const newBillionaires = new Map();

let ranks = 1;

const billionaire = {
	rank: 1,
	age: 52,
	name: 'Elon Musk',
	nationality: 'United States',
	netWorth: '249',
	sourceWealth: 'Tesla, SpaceX',
	year: new Date().getFullYear(),
};

newBillionaires.set(billionaire.name, billionaire);

function getAllNewBillionaires() {
	return Array.from(newBillionaires.values());
}

function addNewBillionaire(newBillionaire) {
	ranks++;
	const updatedBillionaire = {
		...newBillionaire,
		rank: ranks,
	};
	newBillionaires.set(ranks, updatedBillionaire);
}

// function addNewBillionaire(newBillionaire) {
// 	ranks++;
// 	newBillionaires.set(
// 		ranks,
// 		Object.assign(newBillionaire, {
// 			rank: ranks,
// 		})
// 	);
// }

module.exports = {
	getAllNewBillionaires,
	addNewBillionaire,
};
