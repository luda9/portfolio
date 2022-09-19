const boton1 = document.getElementById("boton1");
const fontendCaja = document.getElementById("frontend-info");
const frontend = document.querySelector(".frontend");


boton1.addEventListener("click", () => {
  frontend.classList.toggle("size");
  fontendCaja.classList.toggle("hidden");
   if (boton1.textContent == "Show less"){
    (boton1.textContent = "Show more")
   } else {
    (boton1.textContent = "Show less")
   }
});

const boton2 = document.getElementById("boton2");
const backendCaja = document.getElementById("backend-info");
const backend = document.querySelector(".backend");


boton2.addEventListener("click", () => {
  backend.classList.toggle("size");
  backendCaja.classList.toggle("hidden");
   if (boton2.textContent == "Show less"){
    (boton2.textContent = "Show more")
   } else {
    (boton2.textContent = "Show less")
   }
});

const boton3 = document.getElementById("boton3");
const uiuxCaja = document.getElementById("uiux-info");
const uiux = document.querySelector(".uiux");

boton3.addEventListener("click", () => {
  uiux.classList.toggle("size");
  uiuxCaja.classList.toggle("hidden");
   if (boton3.textContent == "Show less"){
    (boton3.textContent = "Show more")
   } else {
    (boton3.textContent = "Show less")
   }
});

// Inputs

// Get data
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const success = document.getElementById("name")
const error = document.querySelectorAll("error")

// Validate data
function validateForm() {
  clearMessages();

  if(name.value.length < 1){
    error[0].innerText = "Name cannot be blank";
    name.classList.add("error-border");
  }

  if(!emailIsValid(email.value)){
    error[1].innerText = "Invalid email adress";
    email.classList.add("error-border");
  }
}
