const calculadora = require('../calculadora');

// console.log(calculadora.sumar);

test ('Debe sumar numero a + b', () =>{
        expect(calculadora.sumar (10,10)).toBe(20);
})

test ('Debe restar numero a - b', () =>{
    expect(calculadora.restar (10,10)).toBe(0);
})

test ('Debe multiplicar numero a * b', () =>{
    expect(calculadora.multiplicar (10,10)).toBe(100);
})

test ('Debe dividir numero a / b', () =>{
    expect(calculadora.dividir (10,10)).toBe(1);
})

