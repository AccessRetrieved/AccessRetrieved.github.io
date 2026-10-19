var url_string = window.location.href;
var url = new URL(url_string);
var useDefaultViewer = url.searchParams.get('useDefaultViewer');

if (useDefaultViewer === "default") {
    window.location = 'https://accessretrieved.github.io/Concert.pdf';
} else if (useDefaultViewer === "canvascrolling") {
    window.location = 'https://www.canva.com/design/DAFJjj7INOk/aUVuHBv_SEs5iumXHP0zBw/view?website#2';
} else if (useDefaultViewer === 'swipe') {
    window.location = 'https://accessretrieved.github.io/Concert';
} else {
    window.location = 'https://www.canva.com/design/DAFJjj7INOk/aUVuHBv_SEs5iumXHP0zBw/view?website#2';
};