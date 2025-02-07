window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
    }, 2000); 
});

document.addEventListener("DOMContentLoaded", function() {
    var pdfEmbed = document.getElementById("pdf-embed");
    if (pdfEmbed.requestFullscreen) {
        pdfEmbed.requestFullscreen();
    } else if (pdfEmbed.mozRequestFullScreen) { // Firefox
        pdfEmbed.mozRequestFullScreen();
    } else if (pdfEmbed.webkitRequestFullscreen) { // Chrome, Safari and Opera
        pdfEmbed.webkitRequestFullscreen();
    } else if (pdfEmbed.msRequestFullscreen) { // IE/Edge
        pdfEmbed.msRequestFullscreen();
    }
});