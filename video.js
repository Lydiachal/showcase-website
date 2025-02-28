window.onload = function () {
    const video = document.querySelector("video");
    if (video) {
        video.play().catch(error => console.error("Autoplay failed:", error));
    }
};
