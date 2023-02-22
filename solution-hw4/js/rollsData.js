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

const cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
var currentGlaze = "a";
var currentSize = 0;
var currentPrice = 0.0;
const cartBtn = document.querySelector("#cart-button");


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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


cartBtn.addEventListener('click', () => {
    const roll = addNewRoll(rollType, currentGlaze, currentSize, currentPrice);
    cart.push(roll);
    console.log(cart);
});











