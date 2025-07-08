button.addEventListener('click', function() {
    // Funktionsverhalten drin
})

button.addEventListener('click', () => {
    // Funktionsverhalten drin
})

const numbers = [1,2,3,4];

// Mit benannter Funktion
//  etwas umständlicher...
function doubleNumbers(number){
    return number * 2;
}

const doubled = numbers.map(doubleNumbers);

// Mit anonymer Funktion
const doubled1 = numbers.map(function(number){
    return number * 2;
})

// Mit anonymer Arrow Function
const doubled2 = numbers.map((x) => x * 2);