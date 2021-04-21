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
