/* code below doesn't work why???????

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
function toggleOpen() {
  this.classlist.toggle("open");

} */

const panels = document.querySelectorAll(".panel");
const headerPawel = document.querySelector(".attribution");

function toogleOpen() {
  this.classList.toggle("open");
}

function toogleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

    window.setTimeout(() => {headerPawel.classList.add('hideHeader')}, 5000)


panels.forEach((panel) => panel.addEventListener("click", toogleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toogleActive)
);

