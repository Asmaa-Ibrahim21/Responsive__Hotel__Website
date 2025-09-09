
const menu = document.getElementById("menu-btn");
const listItems = document.querySelector(".nav-links");
const bars = document.querySelector(".ri-menu-3-line");

menu.addEventListener("click", () => {
  listItems.classList.toggle("click");

  const isClick = listItems.classList.contains("click");
  bars.setAttribute("class", isClick ? "ri-close-line" : "ri-menu-3-line");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    listItems.classList.remove("click");
    bars.setAttribute("class", "ri-menu-3-line");
  });
});


const Scroll={
    duration:1000,
    distance:"50px",
    origin:"top",
}
ScrollReveal().reveal(".home-section h1",{
...Scroll,
});
ScrollReveal().reveal(".home-section .home-description",{
...Scroll,
delay:500
});
ScrollReveal().reveal(".home-section .home-btns",{
...Scroll,
delay:1000,

});
ScrollReveal().reveal(".hotel_part",{
...Scroll,
interval:500,
});
ScrollReveal().reveal(".step-part",{
    ...Scroll,
interval:500,
})
ScrollReveal().reveal(".property-part",{
    ...Scroll,
interval:500,
})
ScrollReveal().reveal(".trip-item",{
    ...Scroll,
    interval:500,
})



const inspiration=document.querySelector(".insperation-section");
const inspirationItems=Array.from(inspiration.children);
inspirationItems.forEach(item => {
  const copyOfValue=item.cloneNode(true);
  inspiration.appendChild(copyOfValue)
});
});
