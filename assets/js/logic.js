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
  const formData = new FormData(form); //no idea what this does - provided by tutor
  const userForm = Object.fromEntries(formData);

  //read from Local storage - store in array - parse it
  //push to new array
  //strignify and store in local storage

  console.log(userForm);
  const blogData = readFromStorage();
  blogData.push(userForm);
  const data = JSON.stringify(blogData);
  localStorage.setItem("blogData", data);

  function readFromStorage() {
    const data = localStorage.getItem("blogData");
    const newData = JSON.parse(data);

    return newData || [];
  }

  // dataArray.push(userForm);
  // const data = JSON.stringify(dataArray);
  // localStorage.setItem("blogData", data);
}
