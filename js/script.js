
// NAVBAR TOGGLE
const toggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// DROPDOWN TOGGLE (CLICK OPEN / CLOSE)
const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = link.parentElement;

    // toggle current
    parent.classList.toggle("active");

    // optional: close others
    document.querySelectorAll(".dropdown").forEach(item => {
      if(item !== parent){
        item.classList.remove("active");
      }
    });

  });
});