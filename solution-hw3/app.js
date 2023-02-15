let currentGlazePrice = 0;
let currentPackSize = 1;
let basePrice = parseFloat(document.getElementById('price').innerHTML.replace(/[^0-9.-]+/g,""));


function glazingChange(glazeIndex) {
    let glazeOptionsPrices = [0, 0, 0.5, 1.5];
    currentGlazePrice = glazeOptionsPrices[glazeIndex];
    calculatePrice();
}

function packSizeChange(packSize) {
    currentPackSize = packSize;
    calculatePrice();
}

function calculatePrice() {
    document.getElementById('price').innerHTML =  "$" + ((basePrice + currentGlazePrice)*currentPackSize).toFixed(2).toString();
}