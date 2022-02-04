var slideShowsDictionary = {};
document.addEventListener("DOMContentLoaded", function()
{
    for(let item of document.getElementsByClassName("slideshow-container"))
    {
        slideShowsDictionary[item] = 1;
        showSlides(slideShowsDictionary[item], item);
    }
    
},);

// Next/previous controls
function plusSlides(n, slideShow) {
  showSlides(slideShowsDictionary[slideShow] += n, slideShow);
}

// Thumbnail image controls
function currentSlide(n, slideShow) {
  showSlides(slideShowsDictionary[slideShow] = n, slideShow);
}

function showSlides(n, slideShow) {
  var i;
  var slides = slideShow.getElementsByClassName("mySlides");
  if (n > slides.length) {slideShowsDictionary[slideShow] = 1}
  if (n < 1) {slideShowsDictionary[slideShow] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideShowsDictionary[slideShow] - 1].style.display = "block";
}