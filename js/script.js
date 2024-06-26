// // Tunggu sampai halaman selesai dimuat
// window.onload = function() {
//     // Dapatkan elemen canvas dan gambar
//     var canvas = document.getElementById('myCanvas');
//     var ctx = canvas.getContext('2d');
//     var img = document.getElementById('sourceImage');

//     // Gambar gambar ke canvas ketika gambar sudah siap
//     img.onload = function() {
//         // Atur ukuran canvas agar sesuai dengan gambar
//         canvas.width = img.width;
//         canvas.height = img.height;
        
//         // Gambar gambar pada canvas
//         ctx.drawImage(img, 0, 0);
//     };

//     // Ubah src untuk memicu onload jika gambar sudah dimuat sebelumnya
//     img.src = img.src;
// };
