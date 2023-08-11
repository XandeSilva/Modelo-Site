const likebtn = document.querySelectorAll(".like-btn");
for (let likeButton of likebtn) {
  likeButton.addEventListener("click", function () {
    const i = likeButton.querySelector("i");

    if (i.classList.contains("liked")) {
      i.classList.remove("liked");
      i.classList.remove("fas");
      i.classList.add("far");
    } else {
      i.classList.add("fas");
      i.classList.add("liked");
    }
  });
}

let div = document.querySelector('#content');
for (let cssClass of div.classList) {
    console.log(cssClass);
}