const userName = document.querySelector("#user-name");
const blogTitle = document.querySelector("#blog-title");
const blogContent = document.querySelector("#blog-content");
const submitButton = document.querySelector("#submit-button");

let info = localStorage.getItem("info");

submitButton.addEventListener("click", function () {
  if (userName > 0 && blogTitle > 0 && blogContent > 0) {
    localStorage.setItem("info", info);
  } else {
    return false;
  }
});

// const user = {
//   userNameInput: " ",
//   blogTitleInput: " ",
//   blogContentInput: " ",
// };

// const userData = JSON.stringify(user);
// localStorage.setItem("user", "userData");
