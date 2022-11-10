const divEl = document.querySelectorAll(".divEl");
console.log(divEl);

divEl.forEach((element) => {
  element.style.background = "red";
  element.addEventListener("click", () => {
    element.style.background = "blue";
  });
});
