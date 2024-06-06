const userName = "user-name";
const blogTitle = "blog-title";
const blogContent = "blog-content";

const user = {
  name: "",
  title: "",
  content: "",
};

const userData = JSON.stringify(user);
localStorage.setItem("user", "userData");
