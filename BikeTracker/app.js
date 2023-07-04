// Check if the Geolocation API is supported by the browser
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
  
      // Call the Nominatim API
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
          // Update the location on the page with the address
          const locationElement = document.getElementById('location');
          locationElement.textContent = data.display_name;
        })
        .catch(error => {
          console.error("Error occurred while getting location: " + error.message);
          document.getElementById('location').textContent = "Unable to retrieve address.";
        });
  
    }, function(error) {
      console.error("Error occurred while getting location: " + error.message);
      document.getElementById('location').textContent = "Unable to retrieve location.";
    });
  } else {
    // Geolocation is not supported by this browser
    console.log("Geolocation is not supported by this browser.");
    document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
  }
  