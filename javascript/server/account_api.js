var checkInterval = 0;
var checked = 1;
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
                'GE9Ere5fMU4lof4t7IWs514IlVupqYwD']

var url_string = window.location.href;
var url = new URL(url_string);
var param = url.searchParams.get("auth");

if (tokens.includes(param) == true) {
    // pass
} else {
    window.location = 'https://accessretrieved.github.io/signin.html'
}

const waitforUpdate = setInterval(function() {
    var update = document.getElementById('updateNotice');
    const httpS = new XMLHttpRequest()
    httpS.open("GET", "https://raw.githubusercontent.com/Project-Pios/Project-Pios/main/version.txt");
    httpS.send()
    httpS.onload = () => console.log(`v${httpS.response}`);
    document.getElementById('updateBox').style.display = "none";
    update.classList.remove('alert-info');
    update.classList.add('alert-success');
    document.getElementById('updateNotice').innerHTML = `\
    <button type="button" class="close" data-dismiss="alert">&times;</button>\
	更新完毕   <svg t="1616914377162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2631" width="20" height="20"><path d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m261.696 265.376a32 32 0 0 0-42.24-2.656l-3.04 2.656-296.896 296.864-120.896-120.864a32 32 0 0 0-47.904 42.24l2.656 3.008 135.776 135.776a31.936 31.936 0 0 0 14.336 8.288 32 32 0 0 0 38.464-0.64l2.944-2.624 316.8-316.8a32 32 0 0 0 0-45.248z" fill="#2aa515" p-id="2632"></path></svg>\
    `;
    clearInterval(waitfor)
}, 157000)

function updateSettings() {
    $('#myModal').modal('hide')
    if (document.getElementById('offlineCheck').checked) {
        checked = 1;

        document.getElementById('success').innerHTML = '\
        <div class="alert alert-success alert-dismissible" id="success">\
            <button type="button" class="close" data-dismiss="alert">&times;</button>\
            更新成功!\
        </div>\
        '

        setTimeout(function() {
            document.getElementById('success').innerHTML = "";
        }, 5000)
    } else {
        checked = 0;

        document.getElementById('success').innerHTML = '\
        <div class="alert alert-success alert-dismissible" id="success">\
            <button type="button" class="close" data-dismiss="alert">&times;</button>\
            更新成功!\
        </div>\
        '

        setTimeout(function() {
            document.getElementById('success').innerHTML = "";
        }, 5000)
    }
}

const interval = setInterval(function() {
    if (navigator.onLine == false && checkInterval == 0 && checked == 1) {
        alert("无法连接服务器，请重新连接");
        checkInterval = 1;

        document.body.innerHTML = "";
        
        document.write('\
        <html>\
            <head>\
                <link rel="stylesheet" href="/css/main.css">\
                <link rel="stylesheet" href="/css/network_error.css">\
                <link rel="stylesheet" href="/css/bootstrap/bootstrap_main.css">\
                <title>Network Error</title>\
            </head>\
            <body>\
                <div class="page-content">\
                    <p style="text-align: center; margin: auto; position: absolute; top: 35%; left: 47%;">无法连接服务器，请重新连接</p>\
                    <br><br>\
                    <button onclick="retryConnection()" style="width: 60%;" class="btn btn-warning">重试</button>\
                </div>\
            </body>\
            <script src="/javascript/network_error.js"></script>\
        </html>\
        ')

    } else {
        // pass
    }
}, 100)

var i = 0;
function move() {
if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
    if (width >= 100) {
        clearInterval(id);
        i = 0;
    } else {
        width++;
        elem.style.width = width + "%";
    }
    }
}
}