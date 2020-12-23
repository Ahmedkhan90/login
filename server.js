// let express = require("express")
// let app = express();
// let user =[];


// // app.use("/bulb",function middleWere(req, res, nex) {
// //     console.log("URL is:", req.url())
// //     console.log("URL is:", req.baseUrl())
// //     console.log("URL is:", req.connection())
// //     console.log("URL is:", req.method())
// //     res.send("some response")
// // } );
// // app.get("/bulb",function middleWere(req, res, nex) {
    
// //     res.send("some response")
// // } );
// // app.post("/bulb",function middleWere(req, res, nex) {
   
// //     res.send("some response")
// // } );
// // app.put("/bulb", function middleWere(req, res, nex) {
    
// //     res.send("some response")
// // });
// // app.delete("/bulb",function middleWere(req, res, nex) {
    
// //     res.send("some response")
// // });

// // function middleWere(req, res, nex) {
// //     console.log("URL is:", req.url())
// //     console.log("URL is:", req.method())
// //     res.send("some response")
// // }
// server.listen(PORT, () => {
//     console.log("server is running on port: " + PORT);
// })

let users = [
    {name: "Ahmed" , emails: "dx.ahmedkhan@gmail.com", password:"12345"},
    {name: "Qadeer" , emails: "qadeerahmed@gmail.com", password:"23456"}
];
    



let express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser');
const { dirxml } = require("console");

let app = express();

app.use(cors());

// app.use(function (req, res, next) {
//     console.log("Method is: ", req.method)
//     console.log("URL is: ", req.url)
//     console.log("connection is: ", req.connection.remoteAddress)
//     console.log("connection is: ", req.connection.remotePort)
//     // res.send("some response");
//     next();
// });

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get("/bulb", function (req, res, next) {
    res.send("bulb is On");
});

app.post("/signup", function (req, res, next) {
user.push(req.body)
    console.log("body: ", req.body);
    res.send("bulb is created");
});

app.put("/bulb", function (req, res, next) {
    res.send("Bulb state is changed");
});

app.delete("/bulb", function (req, res, next) {
    res.send("bulb is deleted");
});



app.listen(3000, () => {
    console.log("server is running on 3000");
})