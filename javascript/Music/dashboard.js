// api songs
apiSongs = [

];

function check() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var param = url.searchParams.get("intro");
  var emailParam = url.searchParams.get("email");
  var passwordParam = url.searchParams.get('password');
  var progressBar = document.getElementById('slider')

  const progress = setTimeout(function() {
      progressBar.style.display = "none";
  }, 5000);

  if (param == "false") {
    closes();
  } else if (emailParam === "2140473296" && passwordParam === "-1274958547") {
    document.body.innerHTML = '';
    document.getElementById('html').classList.remove('body');

    var obj = {
      'Infinite': 'https://github.com/AccessRetrieved/server/blob/main/Music/Infinite.mp3?raw=true',
      'Suit-And-Tie': 'https://github.com/AccessRetrieved/server/blob/main/Music/Suit-And-Tie.mp3?raw=true',
      'TA': 'https://github.com/AccessRetrieved/server/blob/main/Music/TA.mp3?raw=true',
      '你曾是少年': 'https://github.com/AccessRetrieved/server/blob/main/Music/你曾是少年.mp3?raw=true',
      '冲吧少年': 'https://github.com/AccessRetrieved/server/blob/main/Music/冲吧少年.mp3?raw=true',
      '无解': 'https://github.com/AccessRetrieved/server/blob/main/Music/无解.mp3?raw=true',
      '气象站台': 'https://github.com/AccessRetrieved/server/blob/main/Music/气象站台.mp3?raw=true',
      '清空': 'https://github.com/AccessRetrieved/server/blob/main/Music/清空.mp3?raw=true',
      'A-Thousand-Years': 'https://github.com/AccessRetrieved/server/blob/main/Music/A-Thousand-Years.mp3?raw=true',
      'A-Million-Dreams': 'https://github.com/AccessRetrieved/server/blob/main/Music/A-Million-Dreams.mp3?raw=true',
      'Someone-You-Loved': 'https://github.com/AccessRetrieved/server/blob/main/Music/Someone-You-Loved.mp3?raw=true',
      '水': 'https://github.com/AccessRetrieved/server/blob/main/Music/水.mp3?raw=true',
      'River-Flows-In-You': 'https://github.com/AccessRetrieved/server/blob/main/Music/River-Flows-In-You.mp3?raw=true',
      '少年': 'https://github.com/AccessRetrieved/server/blob/main/Music/少年.mp3?raw=true',
      '飞鸟和蝉': 'https://github.com/AccessRetrieved/server/blob/main/Music/飞鸟和蝉.mp3?raw=true',
      'A-Sky-Full-Of-Stars': 'https://github.com/AccessRetrieved/server/blob/main/Music/A-Sky-Full-Of-Stars.mp3?raw=true',
      'Rewrite-The-Stars': 'https://github.com/AccessRetrieved/server/blob/main/Music/Rewrite-The-Stars.mp3?raw=true',
      '湘礼湘礼': 'https://github.com/AccessRetrieved/server/blob/main/Music/湘礼湘礼.mp3?raw=true',
    }

    var str = JSON.stringify(obj);
    document.innerHTML = '';
    document.write(str);

  } else {
    // pass
  }
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

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
const wait = setTimeout(function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  }, 500);


const interval = setTimeout(function() {
  document.getElementById('loading').style.display = "none";
  document.getElementById('leave').style.display = "block";
}, 8000);

function closeIntro() {
  document.getElementById('html').classList.remove('body');
  $('#intro').slideUp( "slow", function() {
    console.log('Loading tracks...')
    document.getElementById('intro').style.display = "none";
  })
  document.getElementById('home').style.display = "block";
}

function closes() {
  document.getElementById('html').classList.remove('body');
  document.getElementById('intro').style.display = "none";
  document.getElementById('home').style.display = "block";
}