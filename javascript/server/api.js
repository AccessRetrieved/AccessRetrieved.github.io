var rand = function() {
    return Math.random().toString(36).substr(2);
};

var token = function() {
    return rand() + rand() + rand() + rand() + rand();
}

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function generate() {
    var obj = {
        "current-time": new Date().getTime(),
        "visit-token": token(),
        "user-agent": navigator.userAgent,
        "logged-in": null,
        "last-visited": new Date().toLocaleString()
    }

    var str = JSON.stringify(obj, null, 4);
    output(syntaxHighlight(str));
}