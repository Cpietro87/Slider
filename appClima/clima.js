const apiKey = 'su api key generada';
const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const kelvin = 272.15;

document.getElementById('btnBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad) {

    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => montrarDatosClima(response))
}

function montrarDatosClima(response) {
    console.log(response);
    const datosClima = document.getElementById('datosClima');
    datosClima.innerHTML = '';

    const nombreCiudad = response.name;
    const nombrePais = response.sys.country;
    const temperatura = response.main.temp;
    const humedad = response.main.humidity;
    const descripcion = response.weather[0].description;
    const icon = response.weather[0].icon;
    

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`;

    const ciudadTemp = document.createElement('p');
    ciudadTemp.textContent = `La temperatura es ${Math.floor(temperatura - kelvin)} ºC`;

    const ciudadDes = document.createElement('p');
    ciudadDes.textContent = descripcion;

    const iconClima = document.createElement('img');
    iconClima.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const ciudadHum = document.createElement('p');
    ciudadDes.textContent = `La humedad es: ${humedad}%`;

    datosClima.appendChild(ciudadTitulo);
    datosClima.appendChild(ciudadTemp);
    datosClima.appendChild(ciudadDes);
    datosClima.appendChild(iconClima);
    datosClima.appendChild(ciudadHum);



}