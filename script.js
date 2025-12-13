
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = function () {
  nav.classList.toggle('show'); 
};

const navlink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navmenu = document.querySelector('.nav-menu');
  navmenu.classList.remove('show'); 
}
navlink.forEach(n => n.addEventListener('click', linkAction));

const linkcolor = document.querySelectorAll('.nav-link');
function colorLink() {
  if (linkcolor) {
    linkcolor.forEach(L => L.classList.remove('active'));
    this.classList.add('active');
  }
}
linkcolor.forEach(L => L.addEventListener('click', colorLink));

function scrollHeader(){
  const scrollHeader = document.getElementById('header')
}
