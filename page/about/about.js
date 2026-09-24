console.log("About page loaded");

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    document.querySelectorAll('.info-box').forEach((box, index) => {
        box.style.animationDelay = `${0.2 + index * 0.2}s`;
    });
});

const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

if (hamburger && navMobile) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMobile.classList.toggle("active");

        if (navMobile.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    const mobileNavLinks = document.querySelectorAll(".nav-mobile a");
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });

    navMobile.addEventListener("click", (e) => {
        if (e.target === navMobile) {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMobile.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMobile.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
}

// PAGE TRANSITION FUNCTIONALITY
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = target;
        }, 500); // waktu sama seperti transition CSS
    });
});

// Footer link functionality
const footerLink = document.querySelector(".footer-link");
if (footerLink) {
    footerLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = "about.html";
        }, 500); // match fade transition
    });
}