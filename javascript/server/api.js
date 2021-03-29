function launch() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get("mode")

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

    if (param === "json") {
        var obj = {
            "current-time": new Date().getTime(),
            "visit-token": token(),
            "user-agent": navigator.userAgent,
            "last-visited": new Date().toLocaleString(),
            "_COMMENT": 'Use the visit-token and id for account api.'
        }
    
        var str = JSON.stringify(obj, null, 4);
        output(syntaxHighlight(str));
    } else if (param === "postRequest") {
        var prefParams = url.searchParams.get('string');
        
        var obj = {
            "current-time": new Date().getTime(),
            "request-data": prefParams,
            "last-visited": new Date().toLocaleString()
        }

        var str = JSON.stringify(obj, null, 4);
        output(syntaxHighlight(str));
    } else if (param === "hash") {
        var hashString = url.searchParams.get('string');

        function stringToHash(string) {           
            var hash = 0;
            
            if (string.length == 0) return hash;
            for (i = 0; i < string.length; i++) {
                char = string.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return hash;
        }

        var obj = {
            "original-string": hashString,
            "hashed-string": String(stringToHash(hashString))
        }

        var str = JSON.stringify(obj, null, 4);
        output(syntaxHighlight(str));
    } else if (param === "base64") {
        var base64 = url.searchParams.get('function');

        if (base64 === "encode") {
            var string = url.searchParams.get('string');

            var obj = {
                "mode": base64,
                "original-string": string,
                "base64-encoded-string": btoa(string)
            }

            var str = JSON.stringify(obj, null, 4);
            output(syntaxHighlight(str));
        } else if (base64 === "decode") {
            var string = url.searchParams.get('string');

            var obj = {
                "mode": base64,
                "original-string": string,
                "decoded-string": atob(string)
            }

            var str = JSON.stringify(obj, null, 4);
            output(syntaxHighlight(str));
        }
    }
}