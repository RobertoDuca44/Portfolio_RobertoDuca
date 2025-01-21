// Mostrar un mensaje de bienvenida al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  console.log("Bienvenido al portafolio. ¡Espero que lo disfrutes!");
});

// Animación de progreso dinámico en barras de habilidades
window.addEventListener("scroll", () => {
  const skillBars = document.querySelectorAll(".skill-bar span");
  skillBars.forEach((bar) => {
    const elementPosition = bar.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    if (elementPosition < viewportHeight - 100) {
      const skillLevel = bar.getAttribute("data-skill");
      bar.style.width = skillLevel + "%";
    }
  });
});

// Manejo de navegación
const menuItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Cambiar sección activa
    menuItems.forEach((menu) => menu.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    item.classList.add("active");
    const sectionId = item.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");
  });
});


// Efecto de resplandor dinámico en botones al hacer clic
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
