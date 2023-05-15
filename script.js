window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav-bar");
  const container = document.querySelector(".container-picture-text");
  const scrolled = window.scrollY;
  console.log(scrolled);
  if (scrolled < 110) {
    navbar.classList.remove("sticky");

    container.style.marginTop = "0px";
  } else {
    navbar.classList.add("sticky");

    container.style.marginTop = "0";
  }
});

//SCROLL SUBTITTLES
window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles1");
  var position = element.getBoundingClientRect();

  
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.opacity = "1";
    
  }
});

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles2");
  var position = element.getBoundingClientRect();

  
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.opacity = "1";
  }
});

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles3");
  var position = element.getBoundingClientRect();

  
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.opacity = "1";
  }
});

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles4");
  var position = element.getBoundingClientRect();

  
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.opacity = "1";
  }
});

//tranlation subtittles

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles1 h1");
  var position = element.getBoundingClientRect();

  // Si el título está visible en la pantalla, lo movemos al centro
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.transform = "translateX(0)";
  }
});

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles2 h1");
  var position = element.getBoundingClientRect();

  // Si el título está visible en la pantalla, lo movemos al centro
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.transform = "translateX(0)";
  }
});

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles3 h1");
  var position = element.getBoundingClientRect();

  // Si el título está visible en la pantalla, lo movemos al centro
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.transform = "translateX(0)";
  }
});

window.addEventListener("scroll", function() {
  var element = document.querySelector(".subtittles4 h1");
  var position = element.getBoundingClientRect();

  // Si el título está visible en la pantalla, lo movemos al centro
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.style.transform = "translateX(0)";
  }
});
