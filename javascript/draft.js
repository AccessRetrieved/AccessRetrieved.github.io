const http = new XMLHttpRequest()

http.open("GET", "https://raw.githubusercontent.com/Project-Pios/Project-Pios/main/version.txt");
http.send()

http.onload = () => document.getElementById('code').innerHTML = http.responseText;