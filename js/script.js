

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


