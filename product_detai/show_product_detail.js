const products = document.querySelector('.content2')
const listItems = []
getData()
async function getData() {
	const res = await fetch('../DataProduct/list-product.txt')
	const results = await res.json();
    results.length = 1;
    products.innerHTML = ''
	results.forEach((product) => {
		const div = document.createElement('div')
		div.setAttribute('id', 'content')
		listItems.push(div)
		div.innerHTML = `
        <div id="slider">
            <img src="${product.image}" alt="First" data-url="#1">
            <img src="${product.image}" alt="Second" data-url="#2">
            <img src="${product.image}" alt="Third" data-url="#3">
            <img src="${product.image}" alt="Four" data-url="#4">
        </div>
		`
		products.appendChild(div);
	});
}




