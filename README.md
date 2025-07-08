# Asynchronität in Javascript
## Wann brauchen wir await/async?
- Wenn wir eine Funktion in Javascript nutzen, die uns ein Promise zurückliefert, wie z.B. die `fetch`-Funktion
```javascript
const response = await fetch('https://api.chucknorris.io/jokes/random');
```
oder z.B. die `.json()`-Funktion
```javascript
const data = await response.json();
```
- Wenn wir ein await haben, nutze am Besten einen try-catch-Block, um Fehler abzufangen
```javascript
try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(daten);
    } catch (error) {
        console.error(error);
        p.textContent = "Fehler beim Laden"
    }
```
- sobald wir ein await haben, müssen wir vor der Funktionsdefinition ein async schreiben
```javascript
document.getElementById("load").addEventListener('click', async () => {
    const p = document.getElementById('joke');
    p.textContent = "Lade ...";

    // Jetzt wollen wir implementieren, dass wir uns Daten von der Witze API holen
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(daten);
    } catch (error) {
        console.error(error);
        p.textContent = "Fehler beim Laden"
    }
})
```
