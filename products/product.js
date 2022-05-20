var slide_bar_menu = document.getElementById('slide_bar_menu');
var menu_mob = document.getElementById('menu_mob')
function showSlideMenu() {
    menu_mob.style.display = "block";
}
const products = document.querySelector('.show_product')
const filter = document.getElementById('filter')
const product_btn = document.querySelectorAll('.menu_product button')
const product_list = document.querySelectorAll('.product')
const listItems = []
getData()
filter.addEventListener('input', (e) => filterData(e.target.value))
async function getData() {
	const res = await fetch('../DataProduct/list-product.txt')
	const results = await res.json();
	products.innerHTML = '';
	results.forEach((product) => {
		const div = document.createElement('div')
		div.setAttribute('class', 'product')
		div.setAttribute('type-product',`${product.type_product}`)
		listItems.push(div)
		div.innerHTML = `
			<div class="images_product">
				<img src="${product.image}" alt="">
            </div>
            <div class="name_product">
				<a href = "../product_detai/product_detail.html" target="_blank">${product.title}</a>
            </div>
            <div class="cost_product">
				<p>$${product.price}</p>
            </div>
			<div class="control">
              <button onclick="openDetail()" class="btn" id="chitiet">
                <i class="fas fa-bookmark"></i> Detail
              </button>
              <button class="success" id="addProduct">
                <i class="fas fa-shopping-cart"></i> Add to cart
              </button>
            </div>
		`
		products.appendChild(div)
		product_btn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				const type = e.target.getAttribute('type-product')
				document
					.querySelector('.menu_product button.active')
					.classList.remove('active')
				e.target.classList.add('active')
				listItems.forEach((item) => {
					if (type == 'all' || item.getAttribute('type-product') == type)
						item.classList.remove('hide')
					else item.classList.add('hide')
				});
			});
		});
	});
	const buttonShows = document.querySelectorAll('.control button')
	buttonShows.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			createToast(e.target.getAttribute('class'))
		})
	});
	
}


const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'Add to the successful cart !!!',
	},
}
function createToast(status) {
	let toast = document.createElement('div')
	toast.className = `toast ${status}`
	toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `
	document.querySelector('#toasts').appendChild(toast)
	setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 4000)
	setTimeout(() => {
		toast.remove()
	}, 6000)
}
function filterData(search) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
			item.classList.remove('hide')
		} else {
			item.classList.add('hide')
		}
	})
}

function openDetail() {
	window.open("../product_detai/product_detail.html");
}

var slide_bar_menu = document.getElementById("slide_bar_menu");
var overlay = document.getElementById("overlay");
var menu_mob = document.getElementById("menu_mob");
function showSlideMenu() {
  menu_mob.style.display = "block";
  overlay.style.display = "block";
}
function hideSlideMenu() {
  menu_mob.style.display = "none";
  overlay.style.display = "none";
}