if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                // update location
                const locationElement = document.getElementById('location');
                locationElement.textContent = data.display_name;
                locationElement.href = `https://www.google.com/maps/search/?api=1&query${lat},${lon}`

                // update maps
                myMap(lat, lon)
            })
            .catch(error => {
                console.error("Error occurred while getting location: " + error.message);
                document.getElementById('location').textContent = "Unable to retrieve address.";
            });

    }, function (error) {
        console.error("Error occurred while getting location: " + error.message);
        document.getElementById('location').textContent = "Unable to retrieve location.";
    });
} else {
    // Geolocation not supported
    console.log("Geolocation is not supported by this browser.");
    document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
}


function myMap(lat, lng) {
    var mapProp = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}