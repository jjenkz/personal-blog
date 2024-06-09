const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

let mode = "dark";

themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

const randomUserData = localStorage.getItem("randomUserData");
const userDataObject = JSON.parse(randomUserData);

// document.getElementById("user-name").textContent = userDataObject.name;
// document.getElementById("blog-title").textContent = userDataObject.title;
// document.getElementById("blog-content").textContent = userDataObject.content;
