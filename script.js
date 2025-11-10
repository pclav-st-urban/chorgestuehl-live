document.addEventListener('DOMContentLoaded', () => {
    const rahmen = document.querySelectorAll('.relief-rahmen');
    const lightbox = document.getElementById('lightbox');
    const reliefTitel = document.getElementById('relief-titel');
    const reliefFoto = document.getElementById('relief-foto');

    // Funktion zum Öffnen der Lightbox
    rahmen.forEach(element => {
        element.addEventListener('click', (event) => {
            // Daten aus dem HTML-Element (data-titel und data-url) auslesen
            const titel = event.currentTarget.getAttribute('data-titel');
            const url = event.currentTarget.getAttribute('data-url');
            
            // Inhalt der Lightbox setzen
            reliefTitel.textContent = titel;
            reliefFoto.src = url;
            
            // Lightbox anzeigen
            lightbox.classList.remove('hidden');
        });
    });

    // Funktion zum Schließen der Lightbox (Global im HTML und Skript verfügbar)
    window.schliesseLightbox = () => {
        lightbox.classList.add('hidden');
        reliefFoto.src = "";
    };

    // Schließen beim Klicken auf den dunklen Hintergrund
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            schliesseLightbox();
        }
    });
    
    // Schließen mit der ESC-Taste
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            schliesseLightbox();
        }
    });
});