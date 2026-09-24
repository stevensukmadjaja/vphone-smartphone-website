document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-card");
    const grid = document.getElementById("productGrid");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");

            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            grid.classList.remove("grid-layout", "scroll-layout");
            grid.classList.add("horizontal-grid");

            products.forEach(product => {
                const match = category === "all" || product.getAttribute("data-category") === category;
                product.style.display = match ? "block" : "none";
            });
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

if (hamburger && navMobile) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMobile.classList.toggle("active");

        // Prevent body scroll when menu is open
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

const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlaySpecs = document.getElementById("overlaySpecs");
const overlayImage = document.getElementById("overlayImage");
const overlayClose = document.getElementById("overlayClose");

const productDetails = {
    gx1: {
        title: "V-Phone GX1",
        specs: [
            "6.7-inch AMOLED, 120Hz, HDR10+",
            "Snapdragon 870, Adreno 650",
            "64MP + 12MP + 5MP cameras",
            "5400mAh, 16GB RAM"
        ],
        image: "../../photos/imagesproduct/gx1.png"
    },
    gx2: {
        title: "V-Phone GX2",
        specs: [
            "6.9-inch OLED, 144Hz",
            "Snapdragon 8 Gen 2",
            "108MP + 12MP",
            "6000mAh, 18GB RAM"
        ],
        image: "../../photos/imagesproduct/gx2.png"
    },
    camone: {
        title: "V-Phone CamOne",
        specs: [
            "50MP main sensor",
            "12MP ultra-wide, 5MP macro",
            "OIS, Night mode",
            "4500mAh, 8GB RAM"
        ],
        image: "../../photos/imagesproduct/camone.png"
    },
    camx: {
        title: "V-Phone CamX",
        specs: [
            "64MP triple camera setup",
            "Periscope zoom lens",
            "HDR Pro+, 4K video",
            "4800mAh, 12GB RAM"
        ],
        image: "../../photos/imagesproduct/camx.png"
    },
    lite: {
        title: "V-Phone Lite",
        specs: [
            "6.2-inch HD+",
            "Snapdragon 680",
            "13MP rear camera",
            "4000mAh, 4GB RAM"
        ],
        image: "../../photos/imagesproduct/lite.png"
    },
    go: {
        title: "V-Phone Go",
        specs: [
            "6.0-inch LCD",
            "Unisoc processor",
            "8MP camera",
            "3500mAh, 3GB RAM"
        ],
        image: "../../photos/imagesproduct/go.png"
    }
};

document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const product = productDetails[id];

        if (product) {
            overlayTitle.textContent = product.title;
            overlaySpecs.innerHTML = product.specs.map(s => `<li>${s}</li>`).join("");
            overlayImage.innerHTML = `<img src="${product.image}" alt="${product.title}" />`;
            overlay.classList.remove("hidden");

            // Prevent body scroll when overlay is open
            document.body.style.overflow = "hidden";
        }
    });
});

overlayClose.addEventListener("click", () => {
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
});

const footerLink = document.querySelector(".footer-link");
if (footerLink) {
    footerLink.addEventListener("click", () => {
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = "../about/about.html";
        }, 500); // match fade transition
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1); // ambil 'gaming', 'camera', dll
    const validCategories = ["all", "gaming", "camera", "budget"];

    if (validCategories.includes(hash)) {
        const targetBtn = document.querySelector(`.filter-btn[data-category="${hash}"]`);
        if (targetBtn) targetBtn.click();
    }
});