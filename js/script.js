

// tässä uutiset-sivuille javaS versio nav barille (ehdotus)!

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", function () {
        // Tarkistetaan onko menu jo auki
        if (sidebarMenu.classList.contains("open")) {
            sidebarMenu.classList.remove("open");
            overlay.classList.remove("active");
        } else {
            sidebarMenu.classList.add("open");
            overlay.classList.add("active");
        }
    });

    overlay.addEventListener("click", function () {
        sidebarMenu.classList.remove("open");
        overlay.classList.remove("active");
    });
});

// <---> //



function convertTemperature() {
    // Hae käyttäjän syöttämät arvot
    const temp = parseFloat(document.getElementById('temp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    // Tarkista, onko lämpötila kelvollinen
    if (isNaN(temp)) {
        document.getElementById('result').innerHTML = "Syötä kelvollinen lämpötila.";
        document.getElementById('result').classList.remove('hidden');
        return;
    }

    // Tarkista, onko lämpötila alle absoluuttisen nollapisteen
    if (temp < -273.15) {
        document.getElementById('result').innerHTML = "Lämpötila ei voi olla alle absoluuttisen nollapisteen (-273,15 °C).";
        document.getElementById('result').classList.remove('hidden');
        return;
    }

    // Muunna lämpötila valitun yksikön mukaan
    if (fromUnit === toUnit) {
        result = temp;
    } else if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = (temp * 9/5) + 32;
        } else if (toUnit === "Kelvin") {
            result = temp + 273.15;
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            result = (temp - 32) * 5/9;
        } else if (toUnit === "Kelvin") {
            result = (temp - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            result = temp - 273.15;
        } else if (toUnit === "Fahrenheit") {
            result = (temp - 273.15) * 9/5 + 32;
        }
    }

    // Näytä tulos
    document.getElementById('result').innerHTML = `Muunnos: ${result.toFixed(2)} ${toUnit}`;
    document.getElementById('result').classList.remove('hidden');
}
