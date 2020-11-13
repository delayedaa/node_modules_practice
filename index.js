// Make your own module

let foodModule = require('./food-module');

foodModule.faveFoods.forEach(element => console.log(element));


// Experiment with implementing a package

// Chalk

let chalk = require('chalk');

console.log(chalk.blue('Wow. I turned this copy blue!'));

console.log(`Not sure if I like ${chalk.red('red')} or ${chalk.green('green')}.`);

console.log(chalk.yellow.bgMagenta.bold('GO LAKERS!'));

// Nodemailer

let nodemailer = require('nodemailer');

async function mailTest() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
  let info = await transporter.sendMail({
    from: 'viarocky@gmail.com',
    to: 'delayedaa@gmail.com',
    subject: 'Nodemailer Rocks!',
    text: `I can't believe this worked!`,
    html: '<h1>Awesome!</h1>'
  });
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

mailTest().catch(console.error);

// GraphicsMagick

let gm = require('gm');

gm('img/rex-way-QUHipae6BPU-unsplash.jpg').size((error, size) => {
  if (!error) {
    console.log(size.width, size.height);
  } else {
    console.log(error);
  }
});

gm('img/rex-way-QUHipae6BPU-unsplash.jpg').identify((error, data) => {
  if (!error) console.log(data);
})