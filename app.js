// function get() {
//     const Http = new XMLHttpRequest();
//     const url = 'http://192.168.50.177:3000/bulb';
//     Http.open("GET", url);
//     Http.send();



//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
// }

function signup(){
var names = document.getElementById("names").value
var email = document.getElementById("email").value
var password = document.getElementById("password").value
}
 
var user ={
    name: names ,
     email: emails ,
     password: passwords ,
}

function post() {
    const Http = new XMLHttpRequest();
    const url = 'http://LocalHost:3000/bulb';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ name: "M Ahmed Khan", time: "2pm" }));

    Http.onreadystatechange = (e) => {
       console.log(Http.responseText)
    }
}
// function put() {
//     const Http = new XMLHttpRequest();
//     const url = 'http://192.168.50.177:3000/bulb';
//     Http.open("PUT", url);
//     Http.send();

//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
// }
// function dlt() {
//     const Http = new XMLHttpRequest();
//     const url = 'http://192.150.177:3000/bulb';
//     Http.open("DELETE", url);
//     Http.send();

//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
// }