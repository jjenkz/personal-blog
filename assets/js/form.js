const form = document.getElementById("userData");
const button = document.getElementById("submit-button");

button.addEventListener("click", function (event) {
  let userName = document.getElementById("user-name").value;
  let blogTitle = document.getElementById("blog-title").value;
  let blogContent = document.getElementById("blog-content").value;

  if (userName !== "" && blogTitle !== "" && blogContent !== "") {
    event.preventDefault();
    document.getElementById("error-message").innertext = "ALL input required.";
  } else {
    const formData = new FormData(form);
    const userForm = Object.fromEntries(formData);

    const userDataJSON = JSON.stringify(userForm);
    localStorage.setItem("blogData", userDataJSON);

    console.log("User info saved to local storage", userForm);
  }

  window.location.href = "blog.html";
});
