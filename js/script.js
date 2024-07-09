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











// input sol
// document.getElementById('numberInput').addEventListener('input', function (e) {
//     this.value = this.value.replace(/[^0-9.]/g, '');
// });

// document.querySelector('.hero__btn').addEventListener('click', function() {
//     document.getElementById('numberInput').focus();
// });


// const input = document.getElementById('numberInput');
// const suffixText = document.getElementById('suffixText');

// function adjustInputWidth() {
//     const context = document.createElement('canvas').getContext('2d');
//     context.font = getComputedStyle(input).font;
//     const text = input.value || input.placeholder || " ";
//     const width = context.measureText(text).width;

//     input.style.width = `${width + 10}px`; // 4px padding
// }

// input.addEventListener('input', adjustInputWidth); 
// adjustInputWidth();
 

// function validateAndAdjust() {
//     let value = input.value;
 
//     value = value.replace(/[^0-9.]/g, '');
 
//     if (value.startsWith('.')) {
//         value = '0' + value;
//     }
 
//     const parts = value.split('.');
//     if (parts.length > 2) {
//         value = parts[0] + '.' + parts.slice(1).join('');
//     }
 

//     // Batasi hanya satu digit setelah titik desimal
//     if (parts.length > 1 && parts[1].length > 1) {
//         parts[1] = parts[1].charAt(0); // Hanya ambil digit pertama setelah titik desimal
//         value = parts.join('.');
//     }

//       // Batasi nol di awal menjadi maksimal dua
//       if (value.startsWith('0')) {
//         // Jika titik desimal diikuti oleh lebih dari dua nol
//         value = value.replace(/^0+/, '0');
//     }


//     if (/^0[1-9]$/.test(value)) {
//         value = '0.' + value.charAt(1);
//     }
    

//     // Jika ada titik di akhir, biarkan pengguna mengedit lebih lanjut
//     if (value.endsWith('.')) {
//         input.value = value;
//         return;
//     }

//     // Mencegah input "0.0" atau "00.0"
//     if (value === '0.0') {
//         value = '0.1';
//     }

//     // Konversi ke angka dan batasi maksimum
//     const numericValue = parseFloat(value);
//     if (numericValue > 200) {
//         value = '200';
//     }

//     input.value = value;
// }

// input.addEventListener('input', validateAndAdjust);
