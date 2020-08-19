function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

catalog = [
{
	name: 'Смартфон Samsung Galaxy A51 64GB красный (SM-A515FZRMSER)',
	price: '19990',
	discount: '0.25',
	platform: 'Android',
	brand: 'Samsung',
	id: '1',
	img: 'https://avatars.mds.yandex.net/get-mpic/1733932/img_id4339409799883054163.jpeg/orig',
},
{
	name: 'Смартфон Xiaomi Redmi Note 9S 4/64GB синий',
	price: '17990',
	discount: '0.14',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '2',
	img: 'https://avatars.mds.yandex.net/get-mpic/1597983/img_id4579403419368391736.png/orig',
},
{
	name: 'Смартфон HUAWEI P smart Z 4/64GB синий (51093WFJ)',
	price: '16990',
	discount: '0.24',
	platform: 'Android',
	brand: 'Huawei',
	id: '3',
	img: 'https://avatars.mds.yandex.net/get-mpic/1859495/img_id6850659249305291810.jpeg/orig',
},
{
	name: 'Смартфон Apple iPhone 11 128GB черный (MWM02RU/A)',
	price: '62990',
	discount: '0',
	platform: 'iOS',
	brand: 'Apple',
	id: '4',
	img: 'https://avatars.mds.yandex.net/get-mpic/1644362/img_id7621535908935433843.png/orig',
},
{
	name: 'Смартфон Apple iPhone 7 Plus 32GB золотой (MNQP2RU/A)',
	price: '37990',
	discount: '0.13',
	platform: 'iOS',
	brand: 'Apple',
	id: '5',
	img: 'https://avatars.mds.yandex.net/get-mpic/1605421/img_id2106865110386892251.jpeg/orig',
},
{
	name: 'Смартфон Xiaomi Redmi Note 9 4/128GB (NFC) зеленый',
	price: '18990',
	discount: '0.21',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '7',
	img: 'https://avatars.mds.yandex.net/get-mpic/1680954/img_id7067033269264791245.jpeg/orig',
},
{
	name: 'Смартфон Motorola Moto G8 4/64GB белый',
	price: '13990',
	discount: '0.14',
	platform: 'Android',
	brand: 'Motorola',
	id: '8',
	img: 'https://avatars.mds.yandex.net/get-mpic/1681399/img_id585354531903845514.jpeg/orig',
},
{
	name: 'Смартфон Samsung Galaxy A01 красный (SM-A015FZRDSER)',
	price: '7990',
	discount: '0.20',
	platform: 'Android',
	brand: 'Samsung',
	id: '9',
	img: 'https://avatars.mds.yandex.net/get-mpic/1704691/img_id3483120324472613367.jpeg/orig',
},
{
	name: 'Смартфон Samsung Galaxy A50 64GB белый (SM-A505FZWUSER)',
	price: '19990',
	discount: '0.20',
	platform: 'Android',
	brand: 'Samsung',
	id: '10',
	img: 'https://avatars.mds.yandex.net/get-mpic/1565610/img_id6376252327017240210.jpeg/orig',
},
{
	name: 'Смартфон Samsung Galaxy A30s 64GB белый (SM-A307FZWVSER)',
	price: '13490',
	discount: '0.25',
	platform: 'Android',
	brand: 'Samsung',
	id: '11',
	img: 'https://avatars.mds.yandex.net/get-mpic/1574389/img_id3630674747924025997.jpeg/orig',
},
{
	name: 'Смартфон Samsung Galaxy A10 синий (SM-A105FZBGSER)',
	price: '7890',
	discount: '0',
	platform: 'Android',
	brand: 'Samsung',
	id: '12',
	img: 'https://avatars.mds.yandex.net/get-mpic/1808939/img_id6773828113800332518.jpeg/orig',
},
{
	name: 'Смартфон Samsung Galaxy J6+ (2018) 32GB черный (SM-J610FZKNSER)',
	price: '14990',
	discount: '0.33',
	platform: 'Android',
	brand: 'Samsung',
	id: '13',
	img: 'https://avatars.mds.yandex.net/get-mpic/1428687/img_id7458626284345457056.jpeg/orig',
},
{
	name: 'Смартфон HONOR 20 6/128GB полуночный черный (51093VCR)',
	price: '24990',
	discount: '0.05',
	platform: 'Android',
	brand: 'Honor',
	id: '14',
	img: 'https://avatars.mds.yandex.net/get-mpic/1863454/img_id3081200249868588103.jpeg/orig',
},
{
	name: 'Смартфон HONOR 30S полночный черный',
	price: '25191',
	discount: '0.13',
	platform: 'Android',
	brand: 'Honor',
	id: '15',
	img: 'https://avatars.mds.yandex.net/get-mpic/1883514/img_id484954946888037735.jpeg/orig',
},
{
	name: 'Смартфон HONOR 9X 4/128GB сапфировый синий',
	price: '14880',
	discount: '0',
	platform: 'Android',
	brand: 'Honor',
	id: '16',
	img: 'https://avatars.mds.yandex.net/get-mpic/1614201/img_id4391524371770813845.jpeg/orig',
},
{
	name: 'Смартфон HONOR 8A Prime полночный черный',
	price: '8949',
	discount: '0',
	platform: 'Android',
	brand: 'Honor',
	id: '17',
	img: 'https://avatars.mds.yandex.net/get-mpic/1571231/img_id1906198986627196663.jpeg/orig',
},
{
	name: 'Смартфон HONOR 7S 1/16GB синий (51094SBA)',
	price: '5691',
	discount: '0',
	platform: 'Android',
	brand: 'Honor',
	id: '18',
	img: 'https://avatars.mds.yandex.net/get-mpic/1859594/img_id3322988695026274900.jpeg/orig',
},
{
	name: 'Смартфон HONOR 9S синий',
	price: '6390',
	discount: '0',
	platform: 'Android',
	brand: 'Honor',
	id: '19',
	img: 'https://avatars.mds.yandex.net/get-mpic/1923922/img_id1674242157436253083.jpeg/orig',
},
{
	name: 'Смартфон Xiaomi Redmi 9 4/64GB фиолетовый',
	price: '12290',
	discount: '0',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '20',
	img: 'https://avatars.mds.yandex.net/get-mpic/1865885/img_id2391146222603227658.png/orig',
},
{
	name: 'Смартфон Xiaomi Redmi Note 9 Pro 6/128GB серый',
	price: '21940',
	discount: '0',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '21',
	img: 'https://avatars.mds.yandex.net/get-mpic/1538707/img_id5516113960806868431.jpeg/orig',
},
{
	name: 'Смартфон Xiaomi Redmi 9A черный',
	price: '7990',
	discount: '0',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '22',
	img: 'https://avatars.mds.yandex.net/get-mpic/1538707/img_id2862359703114099469.jpeg/orig',
},
{
	name: 'Смартфон Xiaomi Redmi Note 8T 4/64GB серый',
	price: '13990',
	discount: '0',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '23',
	img: 'https://avatars.mds.yandex.net/get-mpic/2008488/img_id974752552804833712.jpeg/orig',
},
{
	name: 'Смартфон Xiaomi Redmi 8 3/32GB голубой сапфир',
	price: '9690',
	discount: '0',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '24',
	img: 'https://avatars.mds.yandex.net/get-mpic/1865652/img_id2095595623342815009.png/orig',
},
{
	name: 'Смартфон Xiaomi Redmi 8A 2/32GB голубой океан',
	price: '8990',
	discount: '0.11',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '25',
	img: 'https://avatars.mds.yandex.net/get-mpic/1726038/img_id3232674762134792553.png/orig',
},
{
	name: 'Смартфон Xiaomi Redmi 7A 2/16GB матовый синий',
	price: '6490',
	discount: '0',
	platform: 'Android',
	brand: 'Xiaomi',
	id: '26',
	img: 'https://avatars.mds.yandex.net/get-mpic/2014136/img_id5655492535090911647.jpeg/orig',
},
{
	name: 'Телефон Nokia 105 SS (2019) синий (16KIGL01A13)',
	price: '1190',
	discount: '0',
	platform: 'Неизвестно',
	brand: 'Nokia',
	id: '27',
	img: 'https://avatars.mds.yandex.net/get-mpic/1943683/img_id8682032417027063432.jpeg/orig',
},
]

const app = new Vue({
	el: "#app",
	data: {
		findField: '',
		cityPopup: true,
		citySelector: false,
		page: 0,
		maxOnPage: 8,
		currentCity: '',
		cities: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону'],
		catalog: shuffle(catalog),
		filteredCatalog: undefined,
		minPrice: '',
		maxPrice: '',
		filters: {
		}
	},
	computed: {
		catalogPage() {
			return this.filteredCatalog.slice(this.page * this.maxOnPage, (this.page + 1) * this.maxOnPage)
		},
		pages() {
			pages = []
			for (let i = 0; i < this.filteredCatalog.length; i += this.maxOnPage) {
				pages.push(i / this.maxOnPage)
			}
			return pages
		},
		manufacturers() {
			manufacturers = []
			for (let prod of this.catalog) {
				if (manufacturers.indexOf(prod.brand) < 0) {
					manufacturers.push(prod.brand)
					this.filters[prod.brand] = true;
				}
			}
			return manufacturers
		},
		platforms() {
			platforms = []
			for (let prod of this.catalog) {
				if (platforms.indexOf(prod.platform) < 0) {
					platforms.push(prod.platform)
					this.filters[prod.platform] = true;
				}
			}
			return platforms
		}
	},	
	methods: {
		getPrice(product) {
			return Math.floor(product.price * (1 - product.discount))
		},
		isPriceOk(price) {
			if (+price <= (+this.maxPrice || Infinity) && +price >= +this.minPrice) {
				return true
			} else {
				return false
			}
		},
		isFiltersOk(prod) {
			isPlatfOk = false;
			for (let platf of this.platforms) {
				if (prod.platform == platf && this.filters[platf]) isPlatfOk = true
			}	
			isManufOk = false;
			for (let manuf of this.manufacturers) {
				if (prod.brand == manuf && this.filters[manuf]) isManufOk = true
			}	
			return isPlatfOk && isManufOk
		},
		updateFilter() {
			this.page = 0;
			this.filteredCatalog = []
			reg = new RegExp(this.findField, 'i')
			for (let prod of this.catalog) {
				if (this.findField === '' || prod.name.match(reg) || prod.brand.match(reg) || prod.platform.match(reg)) {
					if (!this.isPriceOk(this.getPrice(prod))) continue
					if (!this.isFiltersOk(prod)) continue
					this.filteredCatalog.push(prod)
					continue
				}
			}
		},
		toggleCitySelect(state) {
			if (this.citySelector == state) return
			if (state == true) {
				this.citySelector = true
				this.cityPopup = false
				document.querySelector('body').style = "overflow: hidden"
			} else {
				this.citySelector = false	
				document.querySelector('body').style = "overflow: scrollY"
			}
		},
		setCity(city) {
			this.currentCity = city
			localStorage.setItem('city', city)
			this.toggleCitySelect(false)
		}
	},
	created () {
		this.currentCity = localStorage.getItem('city') || "Москва"
		this.updateFilter()
		console.log(this.pages)
	}
})
