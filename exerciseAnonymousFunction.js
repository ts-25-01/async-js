// Gegeben:
// Schreibe Code für folgende Aufgaben mit anonymen Arrow Functions
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const woerter = ["hallo", "welt", "javascript", "programmierung"];
const personen = [
    { name: "Anna", alter: 25 },
    { name: "Tom", alter: 17 },
    { name: "Sarah", alter: 30 }
];

// 1. Filtere alle geraden Zahlen aus dem zahlen-Array heraus
const evenNumbers = zahlen.filter((x) => x % 2 === 0);
console.log(evenNumbers);

// 2. Wandle alle Wörter in Großbuchstaben um
const upperLetters = woerter.map((x) => x.toUpperCase());
console.log(upperLetters);

// 3. Finde alle volljährigen Personen (alter >= 18)
const volljaehrig = personen.filter((x) => x.alter >= 18);
console.log(volljaehrig);

// 4. Berechne die Summe aller Zahlen

// 5. Erstelle einen Timer, der nach 2 Sekunden "Zeit abgelaufen!" ausgibt

// 6. Simuliere einen Button-Click (auch ohne echten Button):
const simulierterButton = {
    addEventListener: function(event, callback) {
        console.log(`Event "${event}" wurde registriert`);
        setTimeout(callback, 1000); // Callback nach 1 Sekunde aufrufen
    }
};
// Verwende den simulierten Button mit einer anonymen Funktion
