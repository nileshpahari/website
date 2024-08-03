let show = false;
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

})

const sidebarIcon = document.querySelector('#sidebar-icon');

sidebarIcon.addEventListener("click", () => {
    if (show) {
        document.querySelector("#sidebar").classList.remove("hidden");
    show = false;
    }
    else {
        document.querySelector("#sidebar").classList.add("hidden");
    show = true;
    }
})
// closeIcon.addEventListener("click", () => {
//     document.querySelector('#sidebar').classList.add("hidden")
// })