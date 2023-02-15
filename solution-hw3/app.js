//global variable for glaze and price
//glazingChange and packSizeChange functions will update global variables
//calculatePrice will implement the 
let currentGlazePrice = 0;
let currentPackSize = 1;
let basePrice = parseFloat(document.getElementById('price').innerHTML.replace(/[^0-9.-]+/g,""));


function glazingChange(glazeIndex) {
    let glazeOptionsPrices = [0, 0, 0.5, 1.5];
    currentGlazePrice = glazeOptionsPrices[glazeIndex];
    calculatePrice();
    //document.getElementById('price').innerHTML = "$" + (glazeOptionsPrices[glaze] + basePrice).toFixed(2).toString();
}

function packSizeChange(packSize) {
    //let basePrice = parseFloat(document.getElementById('price').innerHTML.replace(/[^0-9.-]+/g,""));
    //document.getElementById('price').innerHTML =  "$" + (packSize * basePrice).toFixed(2).toString();
    currentPackSize = packSize;
    calculatePrice();
}

function calculatePrice() {
    //let basePrice = parseFloat(document.getElementById('price').innerHTML.replace(/[^0-9.-]+/g,""));
    console.log("$" + ((basePrice + currentGlazePrice)*currentPackSize).toFixed(2).toString());
    //newPrice = 
    document.getElementById('price').innerHTML =  "$" + ((basePrice + currentGlazePrice)*currentPackSize).toFixed(2).toString();
    //newBasePrice =  ((basePrice + currentGlazePrice)*currentPackSize).toFixed(2);
    //basePrice = newBasePrice;
}