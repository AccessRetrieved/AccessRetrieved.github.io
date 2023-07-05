import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';

// firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCp--QML8Dg8r5XUJEiKB3-JdXOixfTPw",
    authDomain: "bike-cceb1.firebaseapp.com",
    projectId: "bike-cceb1",
    storageBucket: "bike-cceb1.appspot.com",
    messagingSenderId: "274389744864",
    appId: "1:274389744864:web:faa7649a5497fb35bce485",
    measurementId: "G-TGDKPW3RLF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var latitude = 0.0;
var longitude = 0.0;

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
                locationElement.href = `https://www.google.com/maps/search/?ll=${lat},${lon}`

                // update maps
                latitude = lat;
                longitude = lon;

                // update firebase
                updateFirebase()
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

function map() {
    navigator.geolocation.getCurrentPosition(function (pos) {
        var mapProp = {
            center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            zoom: 15,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        let markersArray = [];
        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            draggable: true
        });

        markersArray.push(marker)
    }, function (error) {
        console.log(error.message);
    })
}

async function updateFirebase() {
    try {
        const docRef = await addDoc(collection(db, "boltpro"), {
            lat: latitude.toString(),
            lng: longitude.toString()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}