let ville = "Paris";

const url = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=864730b6a018aa0d318e61be1a797a15&units=metric";


let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if(requete.readyState===XMLHttpRequest.DONE) {
        if(requete.status===200) {
            let reponse = requete.response;
            let meteoVille = reponse.name;
            let meteoTemperature = reponse.main.temp;
            let meteoDescription = reponse.weather[0].description;
            let meteoWind = reponse.wind.speed;
            document.querySelector('#ville').textContent = meteoVille;
            document.querySelector('#temperature').textContent = meteoTemperature;
            document.querySelector('#weatherDescription').textContent = meteoDescription;
            document.querySelector('#wind').textContent = meteoWind;
        }
        else{
            alert('Unproblème technique est survenu.');
        }
    }
}
//Actualiser la météo toutes les 5 secondes.

//meteo_day img : Changer l'icon (nuage, soleil, orage, pluie) en fonction de la météo annoncée

//meteo_hebdo : Actualiser automatique la météo, les dates des 4 prochains jours

//Ajouter un bouton pour passer en mode sombre.