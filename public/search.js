let animating = false;

function handleSearch() {
	let input = document.getElementById('searchInput');
    
	// if input is in the middle of a transition, do nothing
	if (animating) {
        return;
	}
    
	// if input is already visible, hide it
	if (input.style.display == 'inline-block') {
        input.classList.remove('searching');
		input.classList.add('searched');
        animating = true;

		setTimeout(() => {
			input.style.display = 'none';
			input.classList.remove('searched');
			animating = false;
		}, 400);
		return;
	}

	input.style.display = 'inline-block';
	input.classList.add('searching');

	input.focus();
	input.addEventListener('blur', function () {
		input.classList.remove('searching');
		input.classList.add('searched');
		animating = true;
		setTimeout(() => {
			input.style.display = 'none';
			input.classList.remove('searched');
			animating = false;
		}, 400);
	});
}

function handleSubmit() {
	let input = document.getElementById('searchInput');
	let query = input.value;
	let url = '/search?q=' + query;
	window.location.href = url;
}
