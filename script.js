const carouselContainer = document.getElementById("carrousel2");
const carouselItems = document.querySelectorAll(".carrousel-item2");
let currentIndex = 0;
// Set the first item as active on page load
function setActive() {
	carouselItems[currentIndex].classList.add("carrousel-item-active");
}

// Scroll to the next item
function changeActiveNext() {
	carouselItems[currentIndex].classList.remove("carrousel-item-active");
	currentIndex = (currentIndex + 1) % carouselItems.length;
	carouselItems[currentIndex].classList.add("carrousel-item-active");
	ensureVisible(currentIndex);
}

// Scroll to the previous item
function changeActivePrev() {
	carouselItems[currentIndex].classList.remove("carrousel-item-active");
	currentIndex =
		(currentIndex - 1 + carouselItems.length) % carouselItems.length;
	carouselItems[currentIndex].classList.add("carrousel-item-active");
	ensureVisible(currentIndex);
}

// Ensure the active item is visible
function ensureVisible(index) {
	carouselItems[index].scrollIntoView({
		behavior: "smooth",
		block: "nearest",
		inline: "center", // Keeps the active item in the center of the carousel
	});
}

// Initialize the active item
window.onload = setActive;

const carouselAnimeItems = document.querySelectorAll(".carousel-item3");

carouselAnimeItems.forEach((anime) => {
	anime.addEventListener("mouseover", () => {
		const hiddenDiv = anime.querySelector(".hidden-div");
		if (hiddenDiv) {
			hiddenDiv.classList.add("visible");
		}
	});
	anime.addEventListener("mouseout", () => {
		const hiddenDiv = anime.querySelector(".hidden-div");
		if (hiddenDiv) {
			hiddenDiv.classList.remove("visible");
		}
	});
});
