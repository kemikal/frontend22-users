let namesList = document.getElementById("namesList");
let userInfo = document.getElementById("userInfo");
let saveName = document.getElementById("saveName");
let saveEmail = document.getElementById("email");
let saveGender = document.getElementById("gender");
let saveNameBtn = document.getElementById("saveNameBtn");

fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {
    console.log("users", data);

    printNames(data);
})

function printNames(names) {
    let ul = document.createElement("ul")
    names.map(name => {
        let li = document.createElement("li");
        li.innerText = name.userName + " - (" + name.home + ")";

        li.addEventListener("click", () => {
            console.log("Klick på user", name.id);
            printUserInfo(name.id)
        })

        ul.appendChild(li)
    })
    namesList.innerHTML = "";
    namesList.appendChild(ul);
}

function printUserInfo(userId) {
    // HÄMTA USER INFO OCH PRINTA
    fetch("http://localhost:3000/users/" + userId)
    .then(res => res.json())
    .then(data => {
        console.log("user info", data);
        let button = document.createElement("button")

        if (data.home) {
            button.innerText = "Hemma"
        } else {
            button.innerText = "Borta"
        }
        
        button.addEventListener("click", () => {
            toggleIsHome(userId);
        })

        userInfo.innerHTML = "";
        userInfo.prepend(button);
    })
}

function toggleIsHome(userId) {
    fetch("http://localhost:3000/toggleUser/" + userId)
    .then(res => res.json())
    .then(data => {
        userInfo.innerHTML = "";
        printNames(data);
    })
}

saveNameBtn.addEventListener("click", () => {

    let newUser = {
        name: saveName.value,
        email: saveEmail.value,
        gender: saveGender.value
    }

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log("POST DATA", data);
        printNames(data);
    })
})