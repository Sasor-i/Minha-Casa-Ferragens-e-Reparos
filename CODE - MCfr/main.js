const navbar = document.querySelector(".main-navbar");
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.getElementById("mainMenu");

function updateNavbarState() {
    navbar?.classList.toggle("navbar-scroll", window.scrollY > 20);
}

function updateActiveLink() {
    const sections = document.querySelectorAll("main section[id]");
    let currentId = "inicio";

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 140) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isActive);
        link.toggleAttribute("aria-current", isActive);
    });
}

function closeMobileMenu() {
    if (!menu?.classList.contains("show") || !window.bootstrap) {
        return;
    }

    const collapse = bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });
    collapse.hide();
}

window.addEventListener("scroll", () => {
    updateNavbarState();
    updateActiveLink();
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

updateNavbarState();
updateActiveLink();
