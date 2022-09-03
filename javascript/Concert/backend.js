var url_string = window.location.href;
var url = new URL(url_string);
var useDefaultViewer = url.searchParams.get('useDefaultViewer');

if (useDefaultViewer === "true") {
    window.location = 'https://accessretrieved.github.io/Concert.pdf';
} else {
    // pass
}