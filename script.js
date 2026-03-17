var slidesContainer = document.querySelector(".slides");
var slides = document.querySelectorAll(".slide");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var index = 0;
function updateSlider() {
    if (!slidesContainer)
        return;
    slidesContainer.style.transform = "translateX(-".concat(index * 100, "%)");
}
function showNext() {
    index = (index + 1) % slides.length;
    updateSlider();
}
function showPrev() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
}
// Event listeners (with null safety)
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", showNext);
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener("click", showPrev);
