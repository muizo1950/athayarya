                                    //    untuk animasi loading
    window.addEventListener("load", () => {
            const loader = document.querySelector("#loader-wrapper");
        
        // sedikit jeda agar loading-nya terlihat sebentar (500ms)
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 500);
        });





                    // Fungsi untuk Buka-Tutup Kotak Timeline
function toggleBox(btn) {
        const box = btn.closest('.timeline-box');
        box.classList.toggle('active');
        }


                    // BAGIAN "SELENGKAPNYA" SERTIFIKAT
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");
const controls = document.querySelector(".controls-container"); 
const dotsContainer = document.querySelector(".dots-container"); 

let currentImages = []; 
let currentIndex = 0;

document.querySelectorAll('.more-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const imgElement = btn.closest('.cert-card').querySelector('img');
        
        // Ambil string dari data-images dan pecah menjadi array
        const imagesData = imgElement.getAttribute('data-images');
        
        if (imagesData) {
            currentImages = imagesData.split(','); // Pecah berdasarkan koma
        } else {
            // Fallback jika data-images tidak ada, pakai src saja
            currentImages = [imgElement.src];
        }

        // Jika gambar lebih dari 1, munculkan navigasi & dots
        if (currentImages.length > 1) {
            controls.style.display = "flex"; 
            setupDots(currentImages.length); 
        } else {
            controls.style.display = "none"; 
        }
        
        currentIndex = 0;
        showImage(currentIndex);
        modal.style.display = "flex";
    });
});

// Fungsi untuk membuat titik-titik secara dinamis (Sudah mendukung 3 dots atau lebih)
function setupDots(count) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        
        // Opsional: Klik pada dot untuk pindah halaman
        dot.addEventListener('click', () => {
            currentIndex = i;
            showImage(currentIndex);
        });
        
        dotsContainer.appendChild(dot);
    }
}

function showImage(index) {
    modalImg.src = currentImages[index].trim(); // trim() untuk hapus spasi jika ada
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Navigasi panah (Logika ini sudah otomatis mengikuti jumlah array)
document.querySelector('.next-btn').onclick = (e) => {
    e.stopPropagation();
    if (currentImages.length > 1) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showImage(currentIndex);
    }
};

document.querySelector('.prev-btn').onclick = (e) => {
    e.stopPropagation();
    if (currentImages.length > 1) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showImage(currentIndex);
    }
};

// Tutup modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };