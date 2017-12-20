window.onload = function() {
    var button = document.querySelector(".openMenu");
    button.addEventListener("click", openMenu);

    function openMenu(e) {
        e.preventDefault();
        var nav = document.querySelector("nav");
        nav.classList.toggle("active");
    }
};