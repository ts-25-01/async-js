console.log("Das Skript wird geladen");

document.getElementById("load").addEventListener('click', async () => {
    const p = document.getElementById('joke');
    const img = document.getElementById('icon');
    p.textContent = "Lade ...";

    // Jetzt wollen wir implementieren, dass wir uns Daten von der Witze API holen
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log(data);
        p.textContent = data.value;
        img.src = data.icon_url;
    } catch (error) {
        console.error(error);
        p.textContent = "Fehler beim Laden"
    }
})