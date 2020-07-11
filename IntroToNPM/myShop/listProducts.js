console.log("=======================");
console.log("WELCOME TO MY SHOP");
console.log("=======================");

var faker = require("faker");
function print() {
	for (var i = 0; i < 10; i++) {
		console.log(faker.commerce.product() + " - " + faker.commerce.price());
		console.log();
	}
}
print();