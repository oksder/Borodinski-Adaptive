var sliderToggles = document.querySelectorAll(".slider__toggle-reviews");

var travis = document.querySelector(".slider__item--travis");
var john = document.querySelector(".slider__item--john");
var ivan = document.querySelector(".slider__item--ivan");

for(var i = 0; i < sliderToggles.length; i++) {
  sliderToggles[i].addEventListener("click", bindClickReviews(i));
}

function bindClickReviews(i) {
  return function() {
      console.log("you clicked region number " + i);
      if (i == 0) {
      travis.style.display = "flex";
      john.style.display = "none";
      ivan.style.display = "none";
    } else if (i == 1) {
      travis.style.display = "none";
      john.style.display = "flex";
      ivan.style.display = "none";
    } else if (i == 2) {
      travis.style.display = "none";
      john.style.display = "none";
      ivan.style.display = "flex";
    }
  };
}

sliderToggles.forEach((sliderToggle) => {
  sliderToggle.addEventListener("click", function() {


    var notCurrent = document.querySelectorAll(".slider__toggle-reviews--active");

    notCurrent.forEach((notCurrent) => {
      notCurrent.classList.remove("slider__toggle-reviews--active");
    });

    sliderToggle.classList.add("slider__toggle-reviews--active");

    if (sliderToggle.parentElement.classList.contains("reviews__toggles")) {
      sliderToggle.classList.add("slider__toggle-reviews--active");
    }

    bindClickReviews(i);
  });
});
