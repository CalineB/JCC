document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const navLinks = document.querySelector(".nav_links");

    if (dropdown && navLinks) {
        dropdown.addEventListener("click", function(event) {
            console.log("Dropdown clicked");
            event.stopPropagation();
            navLinks.classList.toggle("active");
            console.log("Menu state:", navLinks.classList.contains("active"));
        });

        document.addEventListener("click", function(event) {
            console.log("Document clicked", event.target);
            if (!event.target.closest(".dropdown") && !event.target.closest(".nav_links")) {
                console.log("Closing menu");
                navLinks.classList.remove("active");
            }
        });
    }
});
