function check() {
    var obj = {
        "Infinite": "https://github.com/AccessRetrieved/server/blob/main/Music/Infinite.mp3?raw=true",
        "Suit-And-Tie": "https://github.com/AccessRetrieved/server/blob/main/Music/Suit-And-Tie.mp3?raw=true",
        "TA": "https://github.com/AccessRetrieved/server/blob/main/Music/TA.mp3?raw=true",
        "你曾是少年": "https://github.com/AccessRetrieved/server/blob/main/Music/你曾是少年.mp3?raw=true",
        "冲吧少年": "https://github.com/AccessRetrieved/server/blob/main/Music/冲吧少年.mp3?raw=true",
        "无解": "https://github.com/AccessRetrieved/server/blob/main/Music/无解.mp3?raw=true",
        "气象站台": "https://github.com/AccessRetrieved/server/blob/main/Music/气象站台.mp3?raw=true",
        "清空": "https://github.com/AccessRetrieved/server/blob/main/Music/清空.mp3?raw=true",
        "A-Thousand-Years": "https://github.com/AccessRetrieved/server/blob/main/Music/A-Thousand-Years.mp3?raw=true",
        "A-Million-Dreams": "https://github.com/AccessRetrieved/server/blob/main/Music/A-Million-Dreams.mp3?raw=true",
        "Someone-You-Loved": "https://github.com/AccessRetrieved/server/blob/main/Music/Someone-You-Loved.mp3?raw=true",
        "水": "https://github.com/AccessRetrieved/server/blob/main/Music/水.mp3?raw=true",
        "River-Flows-In-You": "https://github.com/AccessRetrieved/server/blob/main/Music/River-Flows-In-You.mp3?raw=true",
        "少年": "https://github.com/AccessRetrieved/server/blob/main/Music/少年.mp3?raw=true",
        "飞鸟和蝉": "https://github.com/AccessRetrieved/server/blob/main/Music/飞鸟和蝉.mp3?raw=true",
        "A-Sky-Full-Of-Stars": "https://github.com/AccessRetrieved/server/blob/main/Music/A-Sky-Full-Of-Stars.mp3?raw=true",
        "Rewrite-The-Stars": "https://github.com/AccessRetrieved/server/blob/main/Music/Rewrite-The-Stars.mp3?raw=true",
        "湘礼湘礼": "https://github.com/AccessRetrieved/server/blob/main/Music/湘礼湘礼.mp3?raw=true"
    }

    var str = JSON.stringify(obj, null, 2);
    document.body.innerHTML = '';
    document.write(str);
}