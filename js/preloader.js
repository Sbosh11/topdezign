function animateDiv() {
    var popup = document.getElementById("popup");
    popup.style.top = "-100vh";
    setTimeout(() => {
        window.location.replace('\home.html')
    }, 1000);
}