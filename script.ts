const slidesContainer = document.querySelector(".slides") as HTMLDivElement | null;
const slides = document.querySelectorAll(".slide") as NodeListOf<HTMLImageElement>;

const nextBtn = document.getElementById("next") as HTMLButtonElement | null;
const prevBtn = document.getElementById("prev") as HTMLButtonElement | null;

let index: number = 0;

function updateSlider(): void {
  if (!slidesContainer) return;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function showNext(): void {
  index = (index + 1) % slides.length;
  updateSlider();
}

function showPrev(): void {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

// Event listeners (with null safety)
nextBtn?.addEventListener("click", showNext);
prevBtn?.addEventListener("click", showPrev);