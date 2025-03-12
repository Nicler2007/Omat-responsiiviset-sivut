

// Versio 1 Kaverilistalle-JS//


let friends = [];
const totalFriends = 10;

// Funktio kaverin lisäämiseen
function addFriend() {
    let input = document.getElementById("nameInput");
    let name = input.value.trim();

    // Tarkistetaan, että nimi ei ole tyhjä
    if (name === "") {
        alert("Et voi lisätä tyhjää nimeä!");
        return;
    }
    
    if (!/^[A-Za-zÅÄÖåäö]+$/.test(name)) {
        alert("Syötä vain kirjaimia sisältävä nimi! Yritä uudelleen.");
        return;
    }

    // Lisää nimi listaan
    friends.push(name);
    input.value = ""; // Tyhjennetään syöttökenttä

    // Päivitetään kaverilista ja tarkistetaan pelin tila
    showFriends();
    checkGameStatus();
}

// Funktio kaverilistan näyttämiseen
function showFriends() {
    let list = document.getElementById("friend-list");
    list.innerHTML = ""; // Tyhjennetään lista ennen uuden lisäämistä

    // Luodaan lista nimistä
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("div");
        li.classList.add("friend-name");
        li.textContent = friends[i];
        list.appendChild(li);
    }
}

// Tarkistetaan pelin tila (onko peli päättynyt)
function checkGameStatus() {
    let gameStatus = document.getElementById("gameStatus");
    
    if (friends.length === totalFriends) {
        gameStatus.textContent = "Peli päättyi! Olet syöttänyt kaikki kaverit!";
        document.getElementById("nameInput").disabled = true;
        document.querySelector("button").disabled = true;
    }
}

