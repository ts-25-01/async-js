// 1. Diese Funktion:
function multipliziere(a, b) {
    return a * b;
}
// als Arrow Function
const multipliziere1 = (a,b) =>  a * b; 

// 2. Diese Funktion:
function istGerade(zahl) {
    return zahl % 2 === 0;
}

const istGerade1 = (zahl) => zahl % 2 === 0;

// 3. Diese Funktion:
function begrüßeNutzer() {
    return "Willkommen auf unserer Website!";
}

const greetUser = () => "Willkommen auf unsere Website!";

console.log(greetUser());

// 4. Diese Funktion:
function berechneFlaeche(breite, hoehe) {
    const flaeche = breite * hoehe;
    console.log(`Die Fläche beträgt: ${flaeche} qm`);
    return flaeche;
}

const computeArea = (width, height) => width * height;

const computeArea1 = (width, height) => {
    const area = width * height;
    console.log(`Die Fläche beträgt: ${area} qm`);
    return area;
}

console.log(computeArea(2,3));