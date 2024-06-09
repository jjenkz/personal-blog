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

const userData = localStorage.getItem("userData");
const userDataObject = JSON.parse(userData);

// userName.textContent = userDataObject.userName;
// blogTitle.textContent = userDataObject.userTitle;
// blogContent.textContent = userDataObject.userContent;
