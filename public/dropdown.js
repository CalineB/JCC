document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const navLinks = document.querySelector(".nav_links");
    const links = document.querySelectorAll(".nav_links a"); // Sélection de tous les liens

    if (dropdown && navLinks) {
        dropdown.addEventListener("click", function(event) {
            event.stopPropagation();
            navLinks.classList.toggle("active");
        });

        document.addEventListener("click", function(event) {
            if (!event.target.closest(".dropdown") && !event.target.closest(".nav_links")) {
                navLinks.classList.remove("active");
            }
        });

        // ✅ Fermer le menu quand on clique sur un lien
        links.forEach(link => {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
            });
        });
    }
});

