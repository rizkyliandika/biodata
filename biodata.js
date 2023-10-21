let getIcon = document.querySelectorAll("i");
getIcon.forEach((i) => {
  i.addEventListener("mouseover", (e) => {
    i.classList.add("fa-bounce");
  });

  i.addEventListener("mouseout", (e) => {
    i.classList.remove("fa-bounce");
  });
});
