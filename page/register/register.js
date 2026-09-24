window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
    document.getElementById("name").focus(); // fitur auto focus input
});

// HAMBURGER MENU FUNCTIONALITY
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

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

// FORM VALIDATION
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    // Validate Name
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        document.getElementById("nameError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Validate Gender
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        document.getElementById("genderError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("genderError").style.display = "none";
    }

    // Validate Email
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Validate Password
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Validate Confirm Password
    if (password !== confirm) {
        document.getElementById("confirmError").textContent = "Passwords do not match.";
        document.getElementById("confirmError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("confirmError").style.display = "none";
    }

    if (valid) {
        alert("Registration successful!");
        // You can add further logic like form submission here
    }
});

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
            window.location.href = "../about/about.html";
        }, 500); // match fade transition
    });
}