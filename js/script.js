/*scroll*/
window.addEventListener('scroll', function (){
    var header = document.getElementById('header');
    header.classList.toggle('abajo',window.scrollY>0);
});

/*Menú*/
var menuIcon =  document.getElementById("menu-btn");
var menu = document.getElementById("menu");

function abrirMenu(){
    menuIcon.classList.toggle("change");
    menu.classList.toggle("show");
}

var menuContent = document.getElementsByClassName("menu-content");

window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
      for (var i = 0; i < menuContent.length; i++) {
        var openMenu = menuContent[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
        if (menuIcon.classList.contains('change')) {
          menuIcon.classList.remove('change');
        }
      }
    }
  }

/*Tree view*/
var toggler = document.getElementsByClassName('caret');
for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener('click', function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

/*Ver más/Ver menos*/
var barras = document.getElementById('porcentajes');
var boton = document.getElementById('boton');

function verMas() {
  barras.classList.toggle('detalles');
  if(barras.classList.contains('detalles')){
    boton.innerHTML = 'Ocultar detalles';
  } else{
    boton.innerHTML = 'Ver detalles';
  }
}
