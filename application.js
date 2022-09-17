const botones = document.querySelectorAll(".boton");

const fontendCaja = document.querySelector(".frontend-info");
const backendCaja = document.querySelector(".frontend-info");
const uiuxCaja = document.querySelector(".frontend-info");

console.log(botones);
console.log(botones[1]);

botones.addEventListener("click", () => {
  fontendCaja.classList.toggle("hidden");
   if (botones.textContent == "Show less"){
    (botones.textContent = "Show more")
   } else {
    (botones.textContent = "Show less")
   }
});

botones[1].addEventListener("click", () => {
  backendCaja.classList.toggle("hidden");
   if (botones.textContent == "Show less"){
    (botones.textContent = "Show more")
   } else {
    (botones.textContent = "Show less")
   }
});

botones.addEventListener("click", () => {
  uiuxCaja.classList.toggle("hidden");
   if (botones.textContent == "Show less"){
    (botones.textContent = "Show more")
   } else {
    (botones.textContent = "Show less")
   }
});
