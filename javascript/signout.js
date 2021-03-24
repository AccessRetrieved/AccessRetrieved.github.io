const query = window.location.search

function redirect() {
    if (query == "?signout=true&id=020592059240s0vr9j29m9mvoeirgjc4ijrtf3ow4eithfgjeiurghn39e4owrh2wfwnergijferlcgj3w04e9pri2p40q8teuryh35euirhg94ewopruefj4oi") {
        window.location = "https://accessretrieved.github.io/signin.html";
    } else {
        // pass
    }
}