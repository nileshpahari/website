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
    document.querySelector("#sidebar").classList.toggle("hidden");
    show = false;
})


document.addEventListener('DOMContentLoaded', () => {
    // First string
    const typed1 = new Typed('#typed1', {
        strings: ["I'm Nilesh Pahari,"],
        typeSpeed: 50,
        showCursor: true,
        onComplete: () => {

            document.querySelector('.typed1 > .typed-cursor').style.display = 'none';

            // Second string
            const typed2 = new Typed('#typed2', {
                strings: ["currently doing a BTech in"],
                typeSpeed: 50,
                showCursor: true,

                onComplete: () => {
                    document.querySelector('.typed2 > .typed-cursor').style.display = 'none';
                    // Third string
                    new Typed('#typed3', {
                        strings: ["Computer Science and Engineering"],
                        typeSpeed: 50,
                        showCursor: true,
                        onComplete: () => {
                            document.querySelector('.typed3 > .typed-cursor').style.display = 'none';
                        }
                    });
                }
            });
        }
    });
});