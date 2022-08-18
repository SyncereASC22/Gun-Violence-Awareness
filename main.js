const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.error(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



const sucessfulLookup = (position) => {
const { latitude, longitude } = position.coords;
fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9fa9e857121f4f148fd860f295c8104c`)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        const lat = myJson.results[0].geometry.lat;
        const lng = myJson.results[0].geometry.lng;
        if (lat >= 30 && lat <= 35  && lng >= -84 && lng <= -79){
            console.log("chicken");
            console.log(lat);
            console.log(lng);
            const p = document.createElement("p");
            p.innerText = lat;
            document.body.appendChild(p);
        }
        if (lat >= 38 && lat <= 40  && lng >= -90 && lng <= -75){
            document.getElementById("gunny").innerHTML = "MD Death Count in 2021: 724"
        }
    })
};

navigator.geolocation.getCurrentPosition(sucessfulLookup, console.log);







