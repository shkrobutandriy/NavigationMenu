let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu')
const list = document.querySelectorAll('li')
menuToggle.onclick = function () {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}
function activeList() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active')
}
list.forEach((item) => {
  item.addEventListener('click',activeList)
})
