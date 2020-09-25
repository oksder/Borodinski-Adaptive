var open = document.querySelector(".other-button__button");
var modalPopup = document.querySelector(".modal-success");
var modalClose = document.querySelector(".modal-success__button");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-success-show");
});

modalClose.addEventListener("click", function () {
  modalPopup.classList.remove("modal-success-show");
});
