
// slider js
const linkValue = document.querySelectorAll('.link-value')
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var projects = document.getElementsByClassName("projects");
  if (n > projects.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = projects.length}
  for (i = 0; i < projects.length; i++) {
      projects[i].style.display = "none";  
  }
  projects[slideIndex-1].style.display = "block";  

  const caseHeadeing = document.querySelectorAll('.case-heading')
  const heading = caseHeadeing[slideIndex-1].textContent.toLocaleLowerCase()
  console.log(heading)
  linkValue[slideIndex-1].setAttribute('href', `${heading}.html`)
}
