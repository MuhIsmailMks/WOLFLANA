// aos
// AOS.init({
//     once: true
// })

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section_links");
    const navLinks = document.querySelectorAll(".menu-list a");

    window.addEventListener("scroll", () => {
        let current = ""; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 5) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

  // Script JavaScript di sini
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('copy-btn');
    var btnSpan = document.querySelector('#copy-btn span');
    var text = document.getElementById('copy-text');
    var btnText = btn.textContent;
    var timeout;

    btn.addEventListener('click', function () {
        navigator.clipboard.writeText(text.textContent)
            .then(function () {
                btnSpan.textContent = 'Copied';
                
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    btnSpan.textContent = btnText;
                }, 1000);
            })
            .catch(function (err) {
                console.error('Failed to copy text: ', err);
            });
    });
});