const glazingPrices = {
	"Keep original": 0.0,
	"Sugar milk": 0.0,
	"Vanilla milk": 0.50,
	"Double chocolate": 1.50
};

const packPrices = {
	"1": 1, "3": 3, "6": 5, "12": 10
};


const basePrice = parseFloat(document.querySelector('#myspan').textContent.replace(/[^0-9.-]+/g,""));
let currentGlazingPrice = 0; // keep original
let currentPackPrice = 1; // 1

/* Populate glazing options with corresponding price adaptation values */
const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
	const option = document.createElement("option");
	option.textContent = glazing;
	option.value = price;
	glazingSelect.appendChild(option);
}

/* Populate pack options with corresponding price adaptation values */
const packSelect = document.querySelector("select#pack-options");

for (const [pack, price] of Object.entries(packPrices)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = price;
	packSelect.appendChild(option);
}

/* Record the current glazing option and update the total price */
function glazingChange(element) {
	currentGlazingPrice = parseFloat(element.value);
	saveGlaze(element.innerHTML);
	updateTotalPrice();
}

/* Record the current pack option and update the total price */
function packChange(element) {
	currentPackPrice = parseFloat(element.value);
	saveSize(element.innerHTML);
	updateTotalPrice();
}

function updateTotalPrice() {
	const totalPrice = (basePrice + currentGlazingPrice) * currentPackPrice;
	const totalPriceField = document.querySelector("#add-cart span");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}