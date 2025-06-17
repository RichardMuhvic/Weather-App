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
            document.querySelector('#ville').textContent = meteoVille;
            document.querySelector('#temperature').textContent = meteoTemperature;
        }
        else{
            alert('Unproblème technique est survenu.');
        }
    }
}

//Actualiser la météo toutes les 5 secondes.
//meteo_day img : Changer l'icon (nuage, solei, orage, pluie) en fonction de la météo annoncée
//meteo_day h3 : Changer "Mostly Cloudy" en fonctio nde la méto annoncée
//meteo_hebdo : Actualiser automatique la météo, les dates des 4 prochains jours

//Ajouter un bouton pour passer en mode sombre.