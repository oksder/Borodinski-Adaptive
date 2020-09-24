var button = document.querySelector(".news__to-all");
var newsItem = document.querySelector(".news__item--9");

newsItem.style.display = "none";

button.addEventListener("click", function() {
  if (newsItem.style.display == "none") {
    newsItem.style.display = "flex";
  } else {
    newsItem.style.display = "none";
  }
});
