document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------------
       CARD REVEAL ON SCROLL
    ------------------------------------ */
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.25 });

    cards.forEach(card => observer.observe(card));


    /* ------------------------------------
       ACTIVE NAVIGATION HIGHLIGHT
    ------------------------------------ */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const offsetTop = section.offsetTop - 250; // smoother accuracy
            if (window.pageYOffset >= offsetTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href").includes(currentSection)
            );
        });
    });


    /* ------------------------------------
       DARK MODE TOGGLE
    ------------------------------------ */
    const toggleBtn = document.getElementById("darkToggle");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            toggleBtn.textContent = document.body.classList.contains("dark")
                ? "☀️"
                : "🌙";
        });
    }

});
