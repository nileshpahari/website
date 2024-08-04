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

// TYPE
// document.addEventListener('DOMContentLoaded', () => {
//     const textElement1 = document.getElementById('typed1');
//     const textElement2 = document.getElementById('typed2');
//     const textElement3 = document.getElementById('typed3');
//     const text1 = "I'm Nilesh Pahari,";
//     const text2 = "currently doing a BTech in";
//     const text3 = "Computer Science and Engineering";
//     let index1 = 0;
//     let index2 = 0;
//     let index3 = 0;

//     function type() {
//         if (index1 < text1.length) {
//             textElement1.innerHTML += text1.charAt(index1);
//             index1++;
//             setTimeout(type, 300); // Adjust the typing speed here
//         }
//         if (index2 < text2.length) {
//             textElement2.innerHTML += text2.charAt(index2);
//             index2++;
//             setTimeout(type, 300); // Adjust the typing speed here
//         }
//         if (index3 < text3.length) {
//             textElement3.innerHTML += text3.charAt(index3);
//             index3++;
//             setTimeout(type, 300); // Adjust the typing speed here
//         }
//     }

//     type();
// });

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