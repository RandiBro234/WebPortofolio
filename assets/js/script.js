/* ==========================================
   MOBILE DRAWER
========================================== */
const hamburger = document.querySelector(".hamburger");
const drawer = document.getElementById("mobileDrawer");
const overlay = document.getElementById("drawerOverlay");

function openDrawer() {
    drawer.classList.add("open");
    hamburger.classList.add("active");
    overlay.classList.add("visible");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    drawer.classList.remove("open");
    hamburger.classList.remove("active");
    overlay.classList.remove("visible");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
    if (drawer.classList.contains("open")) {
        closeDrawer();
    } else {
        openDrawer();
    }
});

overlay.addEventListener("click", closeDrawer);

document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeDrawer();
    }
});


/* ==========================================
   SCROLL TOP BUTTON
========================================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth"
    });
});


/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("scrollProgress");

function updateProgress() {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    const ratio = total > 0 ? doc.scrollTop / total : 0;
    progressBar.style.width = (ratio * 100) + "%";
}

window.addEventListener("scroll", updateProgress);
updateProgress();


/* ==========================================
   ACTIVE NAVBAR
========================================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const height = section.clientHeight;
        if (scrollY >= top) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }
    });
});


/* ==========================================
   REVEAL ON SCROLL
========================================== */

const reveal = document.querySelectorAll(
    ".section-title,.skill-card,.project-card,.timeline-item,.certificate-card,.stat-card,.portrait-panel,.readout-card"
);

function revealElement() {
    reveal.forEach(item => {
        const windowHeight = window.innerHeight;
        const top = item.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealElement);

revealElement();


/* ==========================================
   PROJECT CARD HOVER
========================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    });
});