const prevButton = document.querySelector(".btn--previous");
const nextButton = document.querySelector(".btn--next");
const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function changeTestimonial(direction) {
  const nextIndex =
    direction === "next"
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length;

  testimonials[currentIndex].style.transform =
    direction === "next" ? "translateX(-100%)" : "translateX(100%)";

  testimonials[nextIndex].style.transform = "translateX(0%)";

  currentIndex = nextIndex;
}

prevButton.addEventListener("click", () => changeTestimonial("prev"));
nextButton.addEventListener("click", () => changeTestimonial("next"));
