const tokens = ['r3Uh67govw5KlgptejjGpmpdPgFkOjQS',
                'lramLNhHr8YzwrYr77OzRc1jQ5T1kQa0',
                'h1FULD7OvKWhU5xzWEDhrhgmdmNtVLI9',
                'se7pWRVK9FPfGTLItCg0KPQrFEMlBjuY',
                'AGQcf6MW32w8s2LqVKDZhTYTdU8lbCxi',
                'NVbmVmog4Sg6zTIKji5w7jalp9Lj6Jvj',
                'DU351h2iwt6rYu3v0SEstuox87osVFsJ',
                'n5OyZBqhUNCYQsMrphcaeuAI2eR76Ibj',
                'ueFMXxXMOVFSTwSdXecY3vdmjtt924ZR',
                'debxsurRcqo8w6S0EIqsNCDS9TbgiNCL',
                'iL6kxFtI0e5YZRzyC5EKiXriMhTrlFzT',
                'JpczeUsLoaCnEw4nYw2L3HzDVgdnfzsj',
                'ooc6fQQMH2z5K3gfLkjYtj3eEvxBtnv7',
                'hmfjzEP5riYpI6peo0SXqNIbqVVPewA0',
                'QXh4mynQABaG0fu9z4ujVAvI0s50WCsr',
                'MwLvKGQUGakepiF2wQFvOAytP9ZUiNuk',
                'vWW6AA2qR2LGdSDKmw7oDO1ZQappc4fa',
                'Clrs97BpMkgkMmgLSzBEFSfosoAh3kxq',
                'G61UXwOY6yGKiRdQqT1J6h76ZrOSNGax',
                'lmCeOdOarg55jJcUwSYr5E55bt79OTUL',
                '2xbNgvQQHkmHhmdObmryDZv6Vctcn24B',
                'VhfP2OCowSGNgUSW9Wv6p6moo0XrVXSO',
                'ptYjml3gClRITQJRG1PcPlIAIKYyA7Xu',
                'OLzdQvmcHqyzIYUTbXoCMK5NIU3NGv7D',
                'gT8F0g3TB4ci4JXLPCR2IbunxMsYr8WY',
                'g5LOiKQOktBpdTgoaJxcs71eZFzPeP4B',
                'yEdQGEb6XgIMhVLwQNuC5qaAeWYaPMzD',
                'LAiM34nGXAeIIdGDtER6TEC43VGOpQYM',
                'ZlVFVL4d7rBqHmCKWOVuICwawYQ0lFTk',
                'R0XU4kiEZaDSlWsNuIhmUldE0edRELeR',
                'oZ0ABPz9dVAevjAwJ9rn2gMdCFyWywJf',
                'JkC76d6YXhdiNLoahbKMYynqJTUZePv1',
                'baDu7pEZguXWdvOQPbI2XK5JKfxDK8Xn',
                'X3vwi17kM6cJB2P4ftSaei3x45UavY0m',
                'qjqe7r6xiBIRTdTE8wqBlaPvrnzF3ECM',
                'wIJ6xnBniC1i1oaEHbUgYUhWYAKCHUkL',
                'F6mTZUhmQqXwn3cXzyp2rO41WgxHv6OJ',
                '8YtapmFsR8imXfUw8sZKHge5rgJ2cKin',
                'j3ldFH606FPJvAq4H5PaKzxH7UzFZ5bH',
                'PlMRgpiLtwTprZdvWfrQDOQJJpKkOLwb',
                'ZSTusdXcYaNzdhoNpeHmSNUSZPLpXLDc',
                'Mqa21ZiU1eTaXE4HBtBDbuMK7Fz0XQnw',
                'L8QdkPRJGNdK6XtC01NNyGYv8LzRQkM5',
                'GE9Ere5fMU4lof4t7IWs514IlVupqYwD',
                'SvnCbREsLXIa4p7Y2kYEWGE5hYWr9AVx',
                'gum4lihOXPT64WD5SvUK6OTmASl7pFLb',
                '0hF9HO5i79zg7fa83wy2v5j8kv0XTjP5',
                'jMn1Z2UYvnvxjP8WnWeAuoKJxOw7yBJi',
                'IXf2t58us49FNjNEwoQeno7aypH85weg',
                'VF8J2rUEFRrRBh0XuvWQLX6fS6AvGR0v',
                'P8b35MBmUwgUfrUfnmsNduQm059mHLvQ',
                'xEqh5qyLtqv9SrbFgwIQajIijQMryafS',
                'NdrVoEQshDnSmy5S6OhbH0zWH5zM8UDT',
                '0rh0NXVhskM9de7rpVUX1nrTBHpHSjS0',
                '77CN3vF6agIMBAhbikVjj4wSiB42XcZb',
                '9ZN8wbFOTbyEMCCLRoVoeJN2w8o9AYHQ',
                'IWJ99Dz0iyg863p4Dl6gzLU1lAGos1m2',
                'eilnmunZXiPdL3R8U1bmwQidqITG9WNn',
                'mvOXZWAN7KMxmGT1u0afdGUM3OYH1reJ',
                'pwHxYkXQLjGpPH7ho89RCdjDP34Wz7ea',
                'is0kh1pJKniSzz76LfxsN5o3NKcWHHcz',
                '3usBit0Xulrm2sfpMjFNVqYwnZcChWUr',
                'sG62vKF8DkXYyzhKrkXO1A1UES8NvTdq',
                'unB4pNzoylfZXwjik1hNMeAh7nvnIRBz',
                '2t6A7szq0U4HlpHCREo8SUROkR2T8z9Q',
                'brQPdPBiva48lj64jI64NjQYYIeIRpGi',
                '7oUYhTFV6jTi9x9xb7iNu0ij0GVQKN57',
                'LRdSvbCuoqFXzbntPoWtHkTGgRQRVUrB']

function launch() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get("mode")

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
            "visit-token": tokens[Math.floor(Math.random() * tokens.length)],
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