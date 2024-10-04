const map = L.map('map').setView([-32.889458, -68.845839], 13); // Coordenadas iniciales (Mendoza)

// Agregar un tile layer de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Variables para marcadores
let startMarker, endMarker;

// Función para calcular distancia y tarifa
function calculatePrice(startCoords, destinationCoords) {
    const distance = map.distance(
        L.latLng(startCoords.lat, startCoords.lng),
        L.latLng(destinationCoords.lat, destinationCoords.lng)
    );

    const distanceInKm = distance / 1000; // Convierte metros a kilómetros
    const price = (distanceInKm * 1.5).toFixed(2); // Simula un precio de $1.5 por km
    return price;
}

// Evento del formulario
document.getElementById('ride-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const startLocation = document.getElementById('start').value;
    const destination = document.getElementById('destination').value;

    if (startLocation && destination) {
        
        const startCoords = { lat: -32.978611, lng: -68.760694 }; // Maipú, Mendoza
        const destinationCoords = { lat: -32.883333, lng: -68.792778 }; // Guaymallén

        // Agregar marcadores en el mapa
        if (startMarker) startMarker.remove();
        if (endMarker) endMarker.remove();

        startMarker = L.marker([startCoords.lat, startCoords.lng]).addTo(map)
            .bindPopup('Start Location').openPopup();

        endMarker = L.marker([destinationCoords.lat, destinationCoords.lng]).addTo(map)
            .bindPopup('Destination').openPopup();

        // Centrar el mapa entre los puntos
        const bounds = L.latLngBounds([startCoords, destinationCoords]);
        map.fitBounds(bounds);

        // Calcular y mostrar el precio
        const price = calculatePrice(startCoords, destinationCoords);
        document.getElementById('price').textContent = `Precio estimado: $${price}`;
    } else {
        alert('Please enter both start and destination locations.');
    }
});
