console.log("Das Skript wird geladen");

// Button Event Listener für Chuck Norris Witze
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


// Button Event Listener für unsere Foto Galerie
document.getElementById("load-photos").addEventListener('click', async () => {
    const galleryContainer = document.getElementById("photo-gallery");
    const button = document.getElementById('load-photos');

    button.disabled = true;
    button.textContent = "Lädt Fotos.."
    galleryContainer.innerHTML = "<p> Lade die wunderschönen Fotos... </p>"

    // Jetzt wollen wir die Fotos von der API fetchen
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
        const photos = await response.json();
        console.log(photos);
        // galleryContainer.innerHTML = `<img height="200" width="200" src="${photos[0].download_url}">`;
        // Wir leeren die Galerie
        galleryContainer.innerHTML = '';
        // Fotos hinzufügen, indem wir über das photos-Array iterieren
        photos.forEach(photo => {
            const photoDiv = document.createElement('div');
            photoDiv.innerHTML = `
             <img src="${photo.download_url}" width="200" height="200">
            `
            galleryContainer.appendChild(photoDiv);
        });

        // in einer normalen for-Schleife
        // for (let i = 0; i < photos.length; i++){
        //     const photo = photos[i];
        //     const photoDiv = document.createElement('div');
        //     photoDiv.innerHTML = `
        //      <img src="${photo.download_url}" width="200" height="200">
        //     `
        //     galleryContainer.appendChild(photoDiv);

        // }

    } catch (error) {
        console.error(error);
        galleryContainer.innerHTML = "Foto konnte nicht geladen werden";
    } finally {
        button.disabled = false;
        button.textContent = "Foto laden";
    }

})



