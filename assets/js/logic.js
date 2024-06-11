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

function storeData() {
  const dataArray = [];
  const formData = new FormData(form);
  const userForm = Object.fromEntries(formData);
  console.log(userForm);
  dataArray.push(userForm);
  const data = JSON.stringify(dataArray);
  localStorage.setItem("blogData", data);
}

// document.getElementById("user-name").textContent = userDataObject.name;
// document.getElementById("blog-title").textContent = userDataObject.title;
// document.getElementById("blog-content").textContent = userDataObject.content;
