const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

// Tasas de cambio (1 EUR a otras monedas)
const oneEuroIs = {
    "JPY": 156.5,  // 1 EUR = 156.5 JPY
    "USD": 1.07,   // 1 EUR = 1.07 USD
    "GBP": 0.87,   // 1 EUR = 0.87 GBP
};

// 1. Convierte de USD (Dólares) a JPY (Yenes japoneses)
const fromDollarToYen = (amountInUSD) => {
    const amountInEUR = amountInUSD / oneEuroIs.USD;
    const amountInJPY = amountInEUR * oneEuroIs.JPY;
    return parseFloat(amountInJPY.toFixed(2));
};

// 2. Convierte de EUR (Euros) a USD (Dólares estadounidenses)
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}
// 3. Convierte de JPY (Yenes) a GBP (Libras esterlinas)
const fromYenToPound = (amountInJPY) => {
    const amountInEUR = amountInJPY / oneEuroIs.JPY;
    const amountInGBP = amountInEUR * oneEuroIs.GBP;
    return parseFloat(amountInGBP.toFixed(2));
};


module.exports ={sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}