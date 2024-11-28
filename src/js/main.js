const burguer = document.getElementById("burguer");
burguer.addEventListener("click", (event) => {
  event.preventDefault();
  const menuMobile = document.getElementById("menuMobile");
  //*Switche condicional para esconder o mostrar el menú
  if (menuMobile.style.display === "block") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
  }
});
