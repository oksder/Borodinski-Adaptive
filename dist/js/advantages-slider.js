var sliderToggles = document.querySelectorAll(".slider__toggle");

var fast = document.querySelector(".slider__item--fast");
var cool = document.querySelector(".slider__item--cool");
var expensive = document.querySelector(".slider__item--expensive");

for(var i = 0; i < sliderToggles.length; i++) {
  sliderToggles[i].addEventListener("click", bindClickReviews(i));
}

function bindClickReviews(i) {
  return function() {
      console.log("you clicked region number " + i);
      if (i == 0) {
      fast.style.display = "block";
      cool.style.display = "none";
      expensive.style.display = "none";
    } else if (i == 1) {
      fast.style.display = "none";
      cool.style.display = "block";
      expensive.style.display = "none";
    } else if (i == 2) {
      fast.style.display = "none";
      cool.style.display = "none";
      expensive.style.display = "block";
    }
  };
}

sliderToggles.forEach((sliderToggle) => {
  sliderToggle.addEventListener("click", function() {

    var notCurrent = document.querySelectorAll(".slider__toggle-advantages--active");

    notCurrent.forEach((notCurrent) => {
      notCurrent.classList.remove("slider__toggle-advantages--active");
    });

    sliderToggle.classList.add("slider__toggle--advantages--active");

    if (sliderToggle.parentElement.classList.contains("advantages__toggles")) {
      sliderToggle.classList.add("slider__toggle-advantages--active");
    }


    bindClickReviews(i);
  });
});
