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


// faq
// Pilih semua elemen dengan kelas "accordion"
var accordions = document.querySelectorAll(".accordion");

// Iterasi setiap elemen "accordion"
for (var i = 0; i < accordions.length; i++) {
    var accordion = accordions[i];

    // Pilih elemen dengan kelas "accordion__header" dan "accordion__body"
    var header = accordion.querySelector(".accordion__header");
    var body = accordion.querySelector(".accordion__body");

    // Dapatkan tinggi dari elemen "accordion__body"
    var bodyHeight = body.scrollHeight;
 
    accordion.style.setProperty("--body-height", bodyHeight + "px");
 
    header.addEventListener("click", function(e) {
        this.parentElement.classList.toggle("accordion_open");
    });
}


























         // HEVC with alpha is supported ONLY on Safari >=13 / ios >=13
         // previous versions also supported HEVC but WITHOUT alpha channel (video will play with black bg)
         // Safari 13 is the first version to support mediaCapabilities
         function supportsHEVCAlpha() {
            const navigator = window.navigator;
            const ua = navigator.userAgent.toLowerCase()
            const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
            const isSafari = ((ua.indexOf('safari') != -1)&& (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
        
            return isSafari && hasMediaCapabilities
        }
        
        function isIE11() {
            return !!window.navigator.userAgent.match(/Trident\/7\./,[]);
        }
        
        if (!isIE11()) {
            const player = document.getElementById('player');
            player.src = supportsHEVCAlpha() ? '../img/footer_video.webm': '../img/footer_video.webm';
            // player.src = supportsHEVCAlpha() ? 'https://doggo.s3.amazonaws.com/output.mov': 'https://doggo.s3.amazonaws.com/output.webm';
        } 