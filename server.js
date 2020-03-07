
/*

 To Start Server (locally):
   > ssh -i <path to .pem file> ec2-user@ec2-3-132-213-41.us-east-2.compute.amazonaws.com
   > cd ReConnect
   > git pull
   > pm2 start server.js --no-daemon
 
 ^C to quit
 You can close Terminal and the server (should) still run in the background
 
 To Start Server (remotely):
   : Visit "https://o8x1621ilb.execute-api.us-east-2.amazonaws.com/default/EC2-Start-Stop"
   : Add "?action=<action>"
     : <action> can either be "start" or "stop"
   : You can also visit the AWS Console at "https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2"
*/

const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyBrlQjFfSctA_LV3fgjh-3wi6FqxXDA2xo",
    authDomain: "ss-reconnect.firebaseapp.com",
    databaseURL: "https://ss-reconnect.firebaseio.com",
    projectId: "ss-reconnect",
    storageBucket: "ss-reconnect.appspot.com",
    messagingSenderId: "418663478303",
    appId: "1:418663478303:web:0d3947e8714dd4b10d912a",
    measurementId: "G-FDYD2WEX7F"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var ref = {
  dns: database.ref("dns")
};
ref.dns.once("value", function(data) {
  var d = data.val();
  console.log(d);
});

// use database.ref("<ref>").on("value", function(data) {}); to recieve game updates

// var logOutput = "";

// var game = {
//   users: [
//     {
//       name: "Josh",
//       score: 0
//     }
//   ]
// };

// const http = require('http');

// const hostname = 'ec2-3-132-213-41.us-east-2.compute.amazonaws.com';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   var resSent = false;
//   res.statusCode = 200;
//   var url = req.url;
//   if (url.split("?").length > 1) {
//     url = url.substring(2, url.length);
//     url = url.split("&");
//     var q = {};
//     for (var i = 0; i < url.length; i++) {
//       q[url[i].split("=")[0]] = url[i].split("=")[1];
//     }
//     resSent = update(q, res);
//   }
//   if (!resSent) {
// //     serverLog("Warning", `A user was sent back no data.`);
//     res.end("type=none&message=none");
//   }
// });

// server.listen(port, hostname, () => {
//   serverLog("Success", `Server running at http://${hostname}:${port}/`);
// });

// function update(options, res) {
//   switch(options.command) {
//     case "createUser":
//       for (var i = 0; i < game.users.length; i++) {
//         if (game.users[i].name === options.user) {
//           serverLog("Error", `A user attempted to create user "${options.user}", but the username is already taken.`);
//           res.end("type=error&message=usernameTaken");
//           return true;
//         }
//       }
//       if (options.user) {
//         game.users.push({
//           name: options.user,
//           score: (options.score || 0)
//         });
//         serverLog("Success", `User "${options.user}" was created.`);
//         res.end("type=success&message=userCreated");
//         return true;
//       }
//     break;
//     case "console":
//       if (options.pass === "admin") {
//         serverLog("Warning", `Someone accessed the console at "${new Date().toString()}". If this was not you, check previous logs.`);
//         res.end("type=success&message=" + logOutput);
//         return true;
//       }
//     break;
//     case "run":
//       if (options.pass === "admin") {
//         serverLog("Warning", `Someone ran "${options.input}" at "${new Date().toString()}".`);
//         eval(decodeURI(options.input));
//         res.end("type=success&message=Code was run on server.");
//         return true;
//       }
//     break;
//   }
//   return false;
// }

// function serverLog(type, message) {
//   logOutput += `\n[${type}]: ${message}`;
//   console.log(`[${type}]: ${message}`);
// }
