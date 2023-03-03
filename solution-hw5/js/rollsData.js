const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const glazingPrices = {
	"Original": 0.0,
	"Sugar Milk": 0.0,
	"Vanilla Milk": 0.50,
	"Double Chocolate": 1.50
};

const packPrices = {
	"1": 1, "3": 3, "6": 5, "12": 10
};

const cart = new Set();
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
var currentGlaze = "a";
var currentSize = 0;
var currentPrice = 0.0;
const cartBtn = document.querySelector("#cart-button");


class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}


function calculatePrice(basePrice, packSize, glazing) {
    const currentGlazingPrice = glazingPrices[glazing];
    const currentPackPrice = packPrices[packSize];
    const totalPrice = (basePrice + currentGlazingPrice) * currentPackPrice;
    return "$" + totalPrice.toFixed(2);
}

//HOMEWORK 5

const r1 = new Roll("Original", "Sugar Milk", 1, calculatePrice(rolls["Original"].basePrice, 1, "Sugar Milk"));
const r2 = new Roll("Walnut", "Vanilla Milk", 12, calculatePrice(rolls["Walnut"].basePrice, 12, "Vanilla Milk"));
const r3 = new Roll("Raisin", "Sugar Milk", 3, calculatePrice(rolls["Raisin"].basePrice, 3, "Sugar Milk"));
const r4 = new Roll("Apple", "Original", 3, calculatePrice(rolls["Apple"].basePrice, 3, "Original"));

cart.add(r1);
cart.add(r2);
cart.add(r3);
cart.add(r4);

console.log(cart);

cart.forEach(roll => createElement(roll));


function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart-item');

    const btnRemove = roll.element.querySelector('.remove');
    btnRemove.addEventListener('click', () => {
        removeRoll(roll);
        updateTotalPrice();
    });

    const rollListElement = document.querySelector('.cart-wrapper');
    rollListElement.prepend(roll.element);

    updateElement(roll);
    updateTotalPrice();
}

function updateElement(roll) {
    const itemImage = roll.element.querySelector('.product-image');
    const itemDetail = roll.element.querySelector('.item-detail');
    const itemPrice = roll.element.querySelector('.item-price');

    itemImage.src = "images/products/" + rolls[roll.type].imageFile;
    itemDetail.querySelector("#name").innerText = roll.type + " Cinnamon Roll";
    itemDetail.querySelector("#glaze").innerText = "Glazing: " + roll.glazing;
    itemDetail.querySelector("#pack").innerText = "Pack Size: " + roll.size;
    itemPrice.querySelector("#price").innerText = roll.basePrice;
}

function removeRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
}

function updateTotalPrice() {
    let currentTotal = 0;
    cart.forEach(roll => {
        currentTotal = currentTotal + parseFloat(roll.basePrice.replace(/[^0-9.-]+/g,""));
    })
    const checkout = document.querySelector(".checkout-info");
    checkout.querySelector(".total-price").innerText = "$" + currentTotal.toFixed(2);
}


//HOMEWORK 4

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    return roll;
}

for (var key in rolls) {
    if (key == rollType) {
        const headerElement = document.querySelector('.product-header');
        headerElement.innerText = key + " Cinnamon Roll";
        const productImage = document.querySelector('.product-image');
        productImage.src = "images/products/" + rolls[key].imageFile;
        document.getElementById("myspan").textContent = "$" + rolls[key].basePrice;
        currentPrice = rolls[key].basePrice
    }
}

function saveGlaze(element) {
    currentGlaze = element;
}

function saveSize(element) {
    currentSize = element;
}

// cartBtn.addEventListener('click', () => {
//     const roll = addNewRoll(rollType, currentGlaze, currentSize, currentPrice);
//     cart.push(roll);
//     console.log(cart);
// });











