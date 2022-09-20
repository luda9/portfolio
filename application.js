// BOXES --------------------------

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

// RESPONSIVE NAVBAR --------------------------


const navbar = document.querySelector(".navbar");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("menu-visible");
});

const menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(item => {
  item.addEventListener("click", () => {
    navbar.classList.remove("menu-visible");
  })
});

// CONTACT FORM --------------------------

const form = document.querySelector("form");
const statusTxt = document.querySelector(".contact-button span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#4b59f0";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
