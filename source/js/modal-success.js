var link = document.querySelector(".other-button__button");
var popup = document.querySelector(".modal-success");
var popupClose = document.querySelector(".modal-success__button");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("modal-show");
});
