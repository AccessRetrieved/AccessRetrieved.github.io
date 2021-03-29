function retryConnection() {
    if (navigator.onLine == true) {
        window.location = "https://accessretrieved.github.io/signin.html";
    } else {
        // pass
    }
}