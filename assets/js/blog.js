// const button = document.getElementById("submit-button");
const mainContent = document.getElementById("main-content");

function displayBlogPosts() {
  let blogData = JSON.parse(localStorage.getItem("blogData"));
  if (!blogData) {
    return;
  }
  const mainContent = document.getElementById("main-content");

  console.log("Retrieving data from the local storage", blogData);

  for (let i = 0; i < blogData.length; i++) {
    const currentPost = blogData[i];
    console.log(currentPost);

    const blogPostEl = document.createElement("article");
    blogPostEl.setAttribute("id", "blog-post-");
    blogPostEl.classList.add("flex-row", "blog-text");
    console.log(blogPostEl);

    //create elements for the blog post
    const nameEl = document.createElement("h1");
    nameEl.textContent = currentPost["user-name"];
    console.log(nameEl);

    const titleEl = document.createElement("h4");
    titleEl.textContent = currentPost["blog-title"];
    console.log(titleEl);

    const contentEl = document.createElement("p");
    contentEl.textContent = currentPost["blog-content"];
    console.log(contentEl);

    // append nameEL, titleEl and contentEl to blogPostEl
    // mainContent.appendChild(blogPostEl);
    blogPostEl.appendChild(nameEl);
    blogPostEl.appendChild(titleEl);
    blogPostEl.appendChild(contentEl);
    //append article to main content
    mainContent.appendChild(blogPostEl);
  }
}

displayBlogPosts();
