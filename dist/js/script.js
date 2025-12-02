function openPopup() {
  document.getElementById("loginPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let valid = true;

  // Reset errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Name validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Nama tidak boleh kosong.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText =
      "Email tidak boleh kosong.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Email salah.";
    valid = false;
  }

  // Pesan singkat validation
  if (password === "") {
    document.getElementById("passwordError").innerText =
      "Pesan singkat tidak boleh kosong.";
    valid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Tuliskan minimal 6 karakter.";
    valid = false;
  }

  // Jika valid → kirim
  if (valid) {
    alert("Form berhasil dikirim!");
  }
});
// swiper

  try {
    if (window.Swiper) {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        slidesPerView: 1,
        spaceBetween: 20,

        breakpoints: {
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 }
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      console.warn("Swiper not available; skipping slider init.");
    }
  } catch (err) {
    console.warn("Swiper init failed:", err);
  }

// vidio hero
// Pastikan script dijalankan setelah DOM ready
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("heroVideo");
  const btn = document.getElementById("videoControlBtn");
  const icon = document.getElementById("videoIcon");

  // Safety: jika elemen tidak ditemukan, hentikan
  if (!video || !btn || !icon) {
    console.error("Video control: element not found");
    return;
  }

  // Set awal ikon berdasarkan state video
  function updateIcon() {
    if (video.paused) {
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    } else {
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    }
  }

  // Klik tombol untuk toggle
  btn.addEventListener("click", function (e) {
    if (video.paused) {
      video.play().catch(err => {
        // autoplay mungkin diblokir di browser — beri info di console
        console.warn("Video play failed:", err);
      });
    } else {
      video.pause();
    }
    updateIcon();
  });

  // Update icon saat state berubah (mis. user pause via devtools)
  video.addEventListener("play", updateIcon);
  video.addEventListener("pause", updateIcon);

  // Inisialisasi ikon
  updateIcon();
});
// navbar
// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {  // ketika scroll lebih dari 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Pilih semua link yang mengarah ke anchor di halaman
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    link.addEventListener('click', function () {
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      // Tutup navbar collapse di mobile, biarkan browser handle anchor default
      const collapseEl = document.querySelector('.navbar-collapse');
      if (collapseEl && collapseEl.classList.contains('show')) {
        try {
          if (window.bootstrap && window.bootstrap.Collapse) {
            const instance = window.bootstrap.Collapse.getInstance(collapseEl) || new window.bootstrap.Collapse(collapseEl, { toggle: false });
            instance.hide();
          } else {
            collapseEl.classList.remove('show');
          }
        } catch (_) {
          collapseEl.classList.remove('show');
        }
      }
      // Biarkan default click memproses hash; smooth di CSS
    });
  });
});
