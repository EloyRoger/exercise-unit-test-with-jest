// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Test para fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// Test para fromEuroToDollar (ya lo tienes)
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
})

// Test para fromDollarToYen
test("One dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    
    // 1 USD = (1 / 1.07) EUR = 0.9346 EUR
    // 0.9346 EUR * 156.5 JPY = 146.26 JPY
    const expected = parseFloat((1 / 1.07 * 156.5).toFixed(2));
    
    expect(fromDollarToYen(1)).toBeCloseTo(expected); 
})
// Test para fromYenToPound
test("One yen should be 0.0056 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    
    // 1 JPY = (1 / 156.5) EUR = 0.0064 EUR
    // 0.0064 EUR * 0.87 GBP = 0.0056 GBP
    const expected = parseFloat((1 / 156.5 * 0.87).toFixed(4));
    
    expect(fromYenToPound(1)).toBeCloseTo(expected);
})