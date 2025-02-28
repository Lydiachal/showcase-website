

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer la catégorie depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

  
    const pageTitle = document.getElementById("page-title");
    const projectCards = document.querySelectorAll(".project-card");

    if (category) {
        
        const categoryTitles = {
            "html-css": "Profil Cards",
            "javascript": "Mini Games",
            "portfolio": "Showcase Website"
        };

        pageTitle.textContent = categoryTitles[category] || "Tous les Projets";

        
        projectCards.forEach(card => {
            if (!card.classList.contains(`category-${category}`)) {
                card.style.display = "none"; 
            } else {
                card.style.display = "block"; 
            }
        });
    } else {
        // Si aucune catégorie spécifiée, afficher tout
        pageTitle.textContent = "Tous les Projets";
    }
     document.addEventListener("DOMContentLoaded", function () {
        const video = document.querySelector("video");
        if (video) {
            video.play().catch(error => console.log("Autoplay bloqué : ", error));
        }
    });
});
