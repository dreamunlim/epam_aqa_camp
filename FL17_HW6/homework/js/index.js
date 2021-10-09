function visitLink(path) {
	let value = localStorage.getItem(path);

	if (value === null) {
		value = 1;
		localStorage.setItem(path, value);
	} else if (value) {
		++value;
		localStorage.setItem(path, value);
	}
}

function viewResults() {
	let resultsList = document.querySelector('#results_list');

	if (resultsList === null) {
		let ul = document.createElement('ul');
		ul.setAttribute('id', 'results_list');
		document.querySelector('.container').appendChild(ul);

		for (let i = 0; i < localStorage.length; ++i) {
			let storageKey = localStorage.key(i);
			let storageValue = localStorage.getItem(storageKey);

			let li = document.createElement('li');
			ul.appendChild(li);
			li.innerHTML = `You visited ${storageKey} ${storageValue} time(s)`;
		}
	}

	localStorage.clear();
}
