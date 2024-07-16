let slideshowContainer = null;

let slides = [
	'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	'https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

function initSlideShow() {
    slideshowContainer = document.getElementById('background-slideshow');
    // slideshowContainer.style.backgroundImage = `url(${slides[slides.length - 1]})`;
    // slideshowContainer.style.width = slides.length * 100 + 'vw';

	if (slideshowContainer.children.length === 0) {
		for (let i = 0; i < slides.length; i++) {
			let slide = document.createElement('div');
			slide.style.backgroundImage = `url(${slides[i]})`;
			slide.classList.add('slide');
			slideshowContainer.appendChild(slide);
		}
	} else if (slideshowContainer.children.length < slides.length) {
		for (
			let i = slideshowContainer.children.length;
			i < slides.length;
			i++
		) {
			let slide = document.createElement('div');
			slide.style.backgroundImage = `url(${slides[i]})`;
			slide.classList.add('slide');
			slideshowContainer.appendChild(slide);
		}
	} else if (slideshowContainer.children.length > slides.length) {
		for (
			let i = slides.length;
			i < slideshowContainer.children.length;
			i++
		) {
			slideshowContainer.removeChild(slideshowContainer.children[i]);
		}
	}
}

let currentSlide = 0;

function nextSlide() {
    // slideshowContainer.style.backgroundImage = `url(${slides[currentSlide]})`;

	slideshowContainer.children[currentSlide].classList.remove('active');
	currentSlide = (currentSlide + 1) % slides.length;
	slideshowContainer.children[currentSlide].classList.add('active');
}

function previousSlide() {
	slideshowContainer.children[currentSlide].classList.remove('active');
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slideshowContainer.children[currentSlide].classList.add('active');
}

function startSlideShow() {
    initSlideShow();
    slideshowContainer.children[currentSlide].classList.add('active');
    setInterval(nextSlide, 5000);
}