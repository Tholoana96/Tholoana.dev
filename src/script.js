document.addEventListener("mousemove", (event) => {
  document.body.style.setProperty("--x", `${event.clientX}px`);
  document.body.style.setProperty("--y", `${event.clientY}px`);
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
