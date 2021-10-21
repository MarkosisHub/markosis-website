let currentTheme = localStorage.getItem("theme");
const darkLight = document.querySelector(".dark-light");
const serviceSection = document.querySelector(".services-section");
const logoHeader = document.querySelector(".logo-header");
const logoFooter = document.querySelector(".logo-footer");
const icon = document.querySelector(".dark-light i");
let mood = 'light'

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

if (currentTheme === "light") {
  icon.classList = "fas fa-moon";
  logoHeader.setAttribute("src", "icons/markosis-logo.png");
  logoFooter.setAttribute("src", "icons/markosis-logo.png");
} else {
  icon.classList = "fas fa-sun";
  logoHeader.setAttribute("src", "icons/markosis_logo_light.png");
  logoFooter.setAttribute("src", "icons/markosis_logo_light.png");
}

function switchTheme(e) {
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    currentTheme = localStorage.getItem("theme");
    icon.classList = "fas fa-sun";
    logoHeader.setAttribute("src", "icons/markosis_logo_light.png");
    logoFooter.setAttribute("src", "icons/markosis_logo_light.png");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    currentTheme = localStorage.getItem("theme");
    icon.classList = "fas fa-moon";
    logoHeader.setAttribute("src", "icons/markosis-logo.png");
    logoFooter.setAttribute("src", "icons/markosis-logo.png");
  }
}

darkLight.addEventListener("click", switchTheme);

// mobile menu
const bar = document.getElementById("bar");
const times = document.getElementById("times");
const mobileNav = document.getElementById("mobile-nav");

bar.addEventListener("click", () => {
  mobileNav.style.display = "block";
});

times.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

// test
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach(item => item.addEventListener("click", toggleAccordion));

// all services
const servicesArr = [
  {
    heading: "Digital Marketing",
    description:
      "Every craft we do is tailored not for you, rather your potential customers instead. We figure out what the market is starving for; what your customers expect from you, and then we assist you in reaching them all with highly engaging content across all digital platforms.",
    image: "images/digital-marketing.png",
    color: "linear-gradient(to right, #FEEDED, #FCD7D7)",
    border: "4px solid #FF16B0",
  },
  {
    heading: "Web Design & Development",
    description:
      "Simple, Artistic and Memorable- we design our craft in building a website that’s not for you but your customers. We figure out what the customers like the most, then jump deep into the detail of the on-site journey to develop a website that will make the visitors stay.",
    image: "images/web-design&development.png",
    color: "linear-gradient(to right, #F3EAFA, #DBC5F3)",
    border: "4px solid #9916FF",
  },
  {
    heading: "UI/UX Design",
    description:
      "It’s not satisfaction; it’s about delighting the customers with the simple & sharp design ever designed. We dive deep into the colours of the user interface to flourish the user experience, therefore building a strong brand image for your brand.",
    image: "images/ui-ux-design.png",
    color: "linear-gradient(to right, #E0F0F8, #ADD3FF)",
    border: "4px solid #16C7FF",
  },
  {
    heading: "Ad Campaign",
    description:
      "Every penny we invest in advertising gets to return in two or three folds; that’s what we aim for. We captivate the potential buyers roaming about on search engines with a ground-breaking copy so that they are bound to enter your sales funnel.",
    image: "images/campaign.png",
    color: "linear-gradient(to right, #FBE8E2, #EFC8BC)",
    border: "4px solid #FF7816",
  },
];
const allServices = document.querySelectorAll(".all-services > div");
const services = document.querySelectorAll(".digital-marketing-service-right");
const allServicesDiv = document.querySelectorAll(".all-services > div");
let servicesSection = document.querySelector(".services-section");
let serviceImage = document.getElementById("service-image");
let serviceHeading = document.getElementById("service-header");
let serviceDescription = document.getElementById("service-description");

[...allServices].forEach((service, index) => {
  service.addEventListener("click", () => {
    serviceHeading.innerText = servicesArr[index].heading;
    serviceDescription.innerText = servicesArr[index].description;
    serviceImage.setAttribute("src", servicesArr[index].image);
    if (mood === "light") {
      servicesSection.style.background = servicesArr[index].color;
    } else {
      servicesSection.style.background = "#424A52";
    }
    borderFunction(index);
  });
});

function borderFunction(num) {
  [...allServicesDiv].forEach(serviceDiv => {
    if (serviceDiv.dataset.set == num + 1) {
      serviceDiv.style.borderBottom = servicesArr[num].border;
    } else {
      serviceDiv.style.borderBottom = "4px solid transparent";
    }
  });
}

const modalBtn = document.getElementsByClassName("modalBtn");
const simpleModal = document.getElementsByClassName("simpleModal");
const closeBtn = document.getElementsByClassName("closeBtn");

[...modalBtn].forEach((btn, index) => {
  modalBtn[index].addEventListener("click", function () {
    openModal(index);
  });
});
[...closeBtn].forEach((btn, index) => {
  closeBtn[index].addEventListener("click", function () {
    closeModal(index);
  });
});

function openModal(index) {
  [...simpleModal][index].style.display = "block";
}

function closeModal(index) {
  [...simpleModal][index].style.display = "none";
}

// testimonial
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


