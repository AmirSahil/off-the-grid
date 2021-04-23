document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".px").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    console.log(x);
    console.log(y);

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});
