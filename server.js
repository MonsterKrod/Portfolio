const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.text({ type: 'text/html' }));

var enviarCorreu = function(con = {} , callback){

  var htmlE = "<h1> El usuari "+con.correu+" </h1><br>"
              +"<h3>Missatge :D </h3> <br>"
              +"<p>"+con.missatge+"</p>";

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'eunisaesea@gmail.com',
          pass: '8QK/Zv+7-[%_q}t;4k`)NaYGBcf[/4au'
      }
  });

  // setup email data with unicode symbols
  var mailOptions = {
      from: `'"Fantasama 👻" <${con.correu}>'`, // sender address
      to: 'eunisaesea@gmail.com', // list of receivers
      subject: `'${con.tema} ✔'`, // Subject line
      text: 'Hello world ?', // plain text body
      html: htmlE // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      callback(error , info);
  });

}

app.post('/enviarCorreu' ,urlencodedParser , function(req , res){

  var dades = {
    correu : req.body.email,
    tema : req.body.sub,
    missatge : req.body.missatge
  }

  enviarCorreu(dades , function(error , info) {

    var secces = true;

    if (error) {
        secces = false;
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect('/?='+secces);
  });


});

app.listen(8080);
console.log('Listening on port 8080');
