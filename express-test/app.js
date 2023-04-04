var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let users = [{
    "id": "d113fb66-9ee4-4c82-9a23-b61225a4afd9",
    "userName": "Cristin",
    "email": "cpraill0@tripadvisor.com",
    "gender": "Female",
    "likes": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "home": true
  }, {
    "id": "c480db10-5ea4-4e2b-8d62-644589605bcb",
    "userName": "Holmes",
    "email": "hweber1@desdev.cn",
    "gender": "Male",
    "likes": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "home": false
  }, {
    "id": "da2b0de4-6783-4a8a-bb7e-f6dcd6025f9e",
    "userName": "Corissa",
    "email": "cgregoratti2@linkedin.com",
    "gender": "Female",
    "likes": "Duis bibendum.",
    "home": false
  }, {
    "id": "264e339c-934b-4ebc-bd7e-bde38792ecee",
    "userName": "Laurence",
    "email": "lmattiussi3@businessinsider.com",
    "gender": "Male",
    "likes": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "home": true
  }, {
    "id": "d0744ebd-5503-4f1a-b86a-79974a514686",
    "userName": "Mahmud",
    "email": "mscole4@google.es",
    "gender": "Male",
    "likes": "Suspendisse potenti.",
    "home": true
  }, {
    "id": "7a4de3c5-f9dd-482f-b376-2058edb1aa0d",
    "userName": "Marve",
    "email": "mlaunchbury5@is.gd",
    "gender": "Male",
    "likes": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    "home": false
  }, {
    "id": "699dc023-773e-4e18-b5b3-9a4f41332c0a",
    "userName": "Eden",
    "email": "erings6@github.io",
    "gender": "Female",
    "likes": "Maecenas ut massa quis augue luctus tincidunt.",
    "home": false
  }, {
    "id": "e3c2c334-7773-4f36-9530-39cc664611af",
    "userName": "Ray",
    "email": "rsweeny7@redcross.org",
    "gender": "Male",
    "likes": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    "home": true
  }, {
    "id": "7a31333c-78ec-4da1-8a80-3188eabfbbd1",
    "userName": "Dall",
    "email": "dstockney8@desdev.cn",
    "gender": "Male",
    "likes": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    "home": false
  }, {
    "id": "7f0a0168-78b4-48e6-b990-d165ff38018d",
    "userName": "Nap",
    "email": "nbreinl9@photobucket.com",
    "gender": "Male",
    "likes": "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "home": false
  }, {
    "id": "3247ca63-081b-4ada-abbf-4e85f5d48310",
    "userName": "Vassili",
    "email": "vecklya@surveymonkey.com",
    "gender": "Male",
    "likes": "Donec quis orci eget orci vehicula condimentum.",
    "home": false
  }, {
    "id": "9230dbf1-1f73-4fe0-992b-7cb788be87c1",
    "userName": "Malinda",
    "email": "melderedb@uol.com.br",
    "gender": "Female",
    "likes": "In sagittis dui vel nisl.",
    "home": true
  }, {
    "id": "9310a4cd-c922-4a8e-afcb-1cad31d73d2f",
    "userName": "Alvie",
    "email": "aiacomellic@gnu.org",
    "gender": "Male",
    "likes": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "home": true
  }, {
    "id": "57a95322-2d32-4db5-9702-0f31d59a2c2f",
    "userName": "Nathanial",
    "email": "nbourgesd@people.com.cn",
    "gender": "Male",
    "likes": "Suspendisse potenti.",
    "home": true
  }, {
    "id": "6218f7c9-29a8-4db0-871c-fda59128a599",
    "userName": "Elva",
    "email": "egaroghane@bandcamp.com",
    "gender": "Female",
    "likes": "In congue.",
    "home": true
  }, {
    "id": "4d2e77db-1ec0-4dfc-acca-c75d2a437b6b",
    "userName": "Freeland",
    "email": "flaurentf@histats.com",
    "gender": "Genderqueer",
    "likes": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "home": true
  }, {
    "id": "d8c304d6-709e-4aec-8c57-352f10bbbf57",
    "userName": "Saunderson",
    "email": "shaithwaiteg@blinklist.com",
    "gender": "Male",
    "likes": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "home": true
  }, {
    "id": "6bbfe8cf-199f-450b-b6cd-d8a9a760b95d",
    "userName": "Ericha",
    "email": "elearnedh@simplemachines.org",
    "gender": "Female",
    "likes": "Etiam justo. Etiam pretium iaculis justo.",
    "home": false
  }, {
    "id": "6b050055-6292-4a15-9382-dfe0aadb0170",
    "userName": "Yardley",
    "email": "ystarkingsi@dot.gov",
    "gender": "Male",
    "likes": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    "home": true
  }, {
    "id": "5ef1057d-713a-4759-a45e-59a6e25457cc",
    "userName": "Northrup",
    "email": "npibworthj@liveinternet.ru",
    "gender": "Male",
    "likes": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "home": true
  }];

app.get("/users", (req, res) => {
    
    let getUsers = users.map(user => {
        return {
            id: user.id,
            userName: user.userName,
            home: user.home
        }
    })

    res.status(200).json(getUsers);
})

app.get("/users/:id", (req, res) => {
    let userId = req.params.id;
    console.log("userId", userId);

    let foundUser = users.find(user => user.id == userId);
    console.log("foundUser", foundUser);

    res.status(200).json(foundUser);
})

app.get("/toggleUser/:id", (req, res) => {
    let userId = req.params.id;
    console.log("userId", userId);

    let foundUser = users.find(user => user.id == userId);

    foundUser.home = !foundUser.home;

    console.log("foundUser", foundUser);

    res.status(200).json(users);
})

app.post("/users", (req,res) => {

    let user = req.body;
    console.log("user", user);
 
    let newUser = {
        id: uuidv4(),
        userName: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        home: false,
        likes: "Lorem Ipsum, Dollars!"
    }

    users.push(newUser);

    res.status(200).json(users);
})

app.get("/test", (req, res) => {

    let head = "<style> body {background-color: black; color: gold;}</style><title>Hej</title>"

    

    res.send(head + "<h1>Hej Test route</h1><p>Här är text</p>");
})

module.exports = app;
