const query = window.location.search

if (query.includes('&loggedin=true')) {
    //pass
} else {
    window.location = 'https://accessretrieved.github.io/signin.html'
}