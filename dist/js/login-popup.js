var link = document.querySelector(".user-list__login");
var popup = document.querySelector(".modal__sign-in");
var popupClose = document.querySelector(".modal__button--close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("modal__form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  if (storage) {
    login.value = storage;
  }
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
