window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    document.querySelectorAll(".promo-card").forEach((box, i) => {
        box.style.animationDelay = `${0.2 + i * 0.2}s`;
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

document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

const footerLink = document.querySelector(".footer-link");
if (footerLink) {
    footerLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = "../about/about.html";
        }, 500); // match fade transition
    });
}