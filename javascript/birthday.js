function send() {
    const date = new Date();
    let timestamp = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;

    // email1: Dvr26oXdPwo7PFemv
    // email2: vYmkiJjIiaZVa_Ij7
    emailjs.init("vYmkiJjIiaZVa_Ij7");
    var params = {
      content: '生日票圈已收到'
    };

    // email1: service_hudz3ml, template_937eie7
    // email2: service_srz6fxd, template_rtc56rf
    emailjs.send('service_srz6fxd', 'template_l85th1a', params).then(function(response) {
      console.log('Success!', response.status, response.text);
    }, function(error) {
      console.log('Failed!', error);
    });
};