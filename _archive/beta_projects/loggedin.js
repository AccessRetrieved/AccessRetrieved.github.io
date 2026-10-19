const query = window.location.search

function check() {
    if (query.includes('&loggedin=true')) {
        //pass
    } else {
        window.location = 'https://accessretrieved.github.io/beta_projects.html'
    }
}