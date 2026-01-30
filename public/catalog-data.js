// Данные реальных последних привезённых автомобилей (январь 2026)
window.carsData = [
    {
        id: 1,
        brand: "Suzuki",
        model: "Every Wagon",
        year: 2016,
        price: 650000,
        country: "japan",
        engine: "0.66 Turbo",
        transmission: "automatic",
        drive: "all-wheel",
        bodyType: "minivan",
        color: "—",
        mileage: 67000,
        description: "PZ Turbo 4WD. Привезён для клиента. Остаётся во Владивостоке. CAA Tokyo, оценка R.",
        image: "images/cars/car-1-suzuki-every-2016.jpg"
    },
    {
        id: 2,
        brand: "Toyota",
        model: "Corolla Touring",
        year: 2022,
        price: 1650000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "—",
        bodyType: "wagon",
        color: "—",
        mileage: 47000,
        description: "WXB. Привезён для клиента. Остаётся во Владивостоке. JU Miyagi, оценка 4 B.",
        image: "images/cars/car-2-toyota-corolla-touring-2022.jpg"
    },
    {
        id: 3,
        brand: "Honda",
        model: "Vezel",
        year: 2021,
        price: 1550000,
        country: "china",
        engine: "—",
        transmission: "cvt",
        drive: "—",
        bodyType: "suv",
        color: "—",
        mileage: 49000,
        description: "CVT Luxury. Привезён из Китая для клиента. Отправляется в Иркутск. Без ДТП.",
        image: "images/cars/car-3-honda-vezel-2021.jpg"
    },
    {
        id: 4,
        brand: "Nissan",
        model: "NV200",
        year: 2021,
        price: 1700000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "—",
        bodyType: "minivan",
        color: "—",
        mileage: 87000,
        description: "16X-2R WG. Привезён для клиента. Отправляется в Лесозаводск. USS Osaka, оценка 3.5.B.",
        image: "images/cars/car-4-nissan-nv200-2021.jpg"
    },
    {
        id: 5,
        brand: "Honda",
        model: "Step Wagon",
        year: 2016,
        price: 1200000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "—",
        bodyType: "minivan",
        color: "—",
        mileage: 100000,
        description: "Spada Just Selection. Привезён для клиента. Отправляется в Уфу. CAA Chubu, оценка R.B.",
        image: "images/cars/car-5-honda-step-wagon-2016.jpg"
    },
    {
        id: 6,
        brand: "Honda",
        model: "Freed",
        year: 2011,
        price: 680000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "—",
        bodyType: "minivan",
        color: "—",
        mileage: 100000,
        description: "G Just Selection. Привезён для клиента. Отправляется в Лесозаводск. Honda AA Kansai, оценка R.B.",
        image: "images/cars/car-6-honda-freed-2011.jpg"
    },
    {
        id: 7,
        brand: "Toyota",
        model: "Wish",
        year: 2012,
        price: 1300000,
        country: "japan",
        engine: "1.8",
        transmission: "automatic",
        drive: "—",
        bodyType: "minivan",
        color: "—",
        mileage: 29000,
        description: "1800cc G. Привезён для клиента. Отправляется в Партизанск. MOTA Kuruma, оценка R.B.",
        image: "images/cars/car-7-toyota-wish-2012.jpg"
    },
    {
        id: 8,
        brand: "Daihatsu",
        model: "Move",
        year: 2017,
        price: 620000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "—",
        bodyType: "hatchback",
        color: "—",
        mileage: 114000,
        description: "Custom X SA III. Привезён для клиента. Отправляется в Хабаровск. LAA, оценка 3.5.B.",
        image: "images/cars/car-8-daihatsu-move-2017.jpg"
    },
    {
        id: 9,
        brand: "Daihatsu",
        model: "Move",
        year: 2014,
        price: 350000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "all-wheel",
        bodyType: "hatchback",
        color: "—",
        mileage: 124000,
        description: "X Smart SA 4WD. Привезён для клиента. Отправляется в Лесозаводск. LAA, оценка 3.5.B.",
        image: "images/cars/car-9-daihatsu-move-2014.jpg"
    },
    {
        id: 10,
        brand: "Toyota",
        model: "Roomy",
        year: 2017,
        price: 750000,
        country: "japan",
        engine: "Turbo",
        transmission: "automatic",
        drive: "—",
        bodyType: "minivan",
        color: "—",
        mileage: 87000,
        description: "G-Turbo Modelista body kit. Привезён для клиента. Отправляется в Лесозаводск. JU Saitama, оценка R.B.",
        image: "images/cars/car-10-toyota-roomy-2017.jpg"
    },
    {
        id: 11,
        brand: "Suzuki",
        model: "XBee",
        year: 2018,
        price: 800000,
        country: "japan",
        engine: "Hybrid",
        transmission: "automatic",
        drive: "—",
        bodyType: "suv",
        color: "—",
        mileage: 120000,
        description: "Hybrid MZ. Привезён для клиента. Перегнали в Лесозаводск. JU Yamaguchi, оценка 4.",
        image: "images/cars/car-11-suzuki-xbee-2018.jpg"
    },
    {
        id: 12,
        brand: "Lexus",
        model: "NX200t",
        year: 2014,
        price: 2300000,
        country: "japan",
        engine: "—",
        transmission: "automatic",
        drive: "all-wheel",
        bodyType: "suv",
        color: "—",
        mileage: 86000,
        description: "I PACK AWD. Привезён для клиента. Остаётся во Владивостоке. USS HAA Kobe, оценка 4.",
        image: "images/cars/car-12-lexus-nx200t-2014.jpg"
    }
];

// Функция инициализации каталога
function initCatalog() {
    // Загрузка статистики
    updateCatalogStats();
    
    // Загрузка автомобилей в каталог
    loadCatalogCars();
    
    // Инициализация фильтров
    initFilters();
    
    // Инициализация сортировки
    initSorting();
    
    // Инициализация переключения вида
    initViewToggle();
}

// Обновление статистики каталога
function updateCatalogStats() {
    if (typeof window.carsData === 'undefined') return;
    
    const totalCars = window.carsData.length;
    const japanCars = window.carsData.filter(car => car.country === 'japan').length;
    const koreaCars = window.carsData.filter(car => car.country === 'korea').length;
    const chinaCars = window.carsData.filter(car => car.country === 'china').length;
    
    document.getElementById('total-cars').textContent = totalCars;
    document.getElementById('japan-cars').textContent = japanCars;
    document.getElementById('korea-cars').textContent = koreaCars;
    document.getElementById('china-cars').textContent = chinaCars;
}

// Загрузка автомобилей в каталог
function loadCatalogCars(cars = window.carsData) {
    const catalogContainer = document.getElementById('catalog-cars');
    const foundCarsElement = document.getElementById('found-cars');
    
    if (!catalogContainer) return;
    
    // Обновляем счетчик найденных автомобилей
    if (foundCarsElement) {
        foundCarsElement.textContent = cars.length;
    }
    
    // Очищаем контейнер
    catalogContainer.innerHTML = '';
    
    if (cars.length === 0) {
        catalogContainer.innerHTML = '<div class="loading">По вашему запросу автомобилей не найдено</div>';
        return;
    }
    
    // Добавляем автомобили в контейнер
    cars.forEach(car => {
        const carCard = createCarCard(car);
        catalogContainer.appendChild(carCard);
    });
    
    // Добавляем обработчики событий для кнопок
    addCarCardEventListeners();
    
    // Инициализация пагинации
    initPagination(cars);
}

// Инициализация фильтров
function initFilters() {
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    // Инициализация ползунков цен
    initPriceSliders();
    
    // Инициализация ползунков года
    initYearSliders();
}

function applyFilters() {
    if (typeof window.carsData === 'undefined') return;
    
    let filteredCars = [...window.carsData];
    
    // Фильтр по стране
    const countryFilter = document.getElementById('country-filter').value;
    if (countryFilter !== 'all') {
        filteredCars = filteredCars.filter(car => car.country === countryFilter);
    }
    
    // Фильтр по типу кузова
    const bodyTypeFilter = document.getElementById('body-type').value;
    if (bodyTypeFilter !== 'all') {
        filteredCars = filteredCars.filter(car => car.bodyType === bodyTypeFilter);
    }
    
    // Фильтр по коробке передач
    const transmissionFilter = document.getElementById('transmission').value;
    if (transmissionFilter !== 'all') {
        filteredCars = filteredCars.filter(car => car.transmission === transmissionFilter);
    }
    
    // Фильтр по приводу
    const driveFilter = document.getElementById('drive').value;
    if (driveFilter !== 'all') {
        filteredCars = filteredCars.filter(car => car.drive === driveFilter);
    }
    
    // Фильтр по объему двигателя
    const engineFilter = document.getElementById('engine-volume').value;
    if (engineFilter !== 'all') {
        const [min, max] = engineFilter.split('-').map(v => v.includes('+') ? parseFloat(v) + 10 : parseFloat(v));
        
        if (engineFilter === '3.0+') {
            filteredCars = filteredCars.filter(car => car.engine >= 3.0);
        } else {
            filteredCars = filteredCars.filter(car => car.engine >= min && car.engine <= max);
        }
    }
    
    // Фильтр по году выпуска
    const yearMin = parseInt(document.getElementById('year-min-input').value);
    const yearMax = parseInt(document.getElementById('year-max-input').value);
    filteredCars = filteredCars.filter(car => car.year >= yearMin && car.year <= yearMax);
    
    // Фильтр по цене
    const priceMin = parseInt(document.getElementById('price-min-input').value);
    const priceMax = parseInt(document.getElementById('price-max-input').value);
    filteredCars = filteredCars.filter(car => car.price >= priceMin && car.price <= priceMax);
    
    // Загружаем отфильтрованные автомобили
    loadCatalogCars(filteredCars);
}

function resetFilters() {
    // Сбрасываем все фильтры к значениям по умолчанию
    document.getElementById('country-filter').value = 'all';
    document.getElementById('body-type').value = 'all';
    document.getElementById('transmission').value = 'all';
    document.getElementById('drive').value = 'all';
    document.getElementById('engine-volume').value = 'all';
    
    // Сбрасываем ползунки года
    document.getElementById('year-min-input').value = 2015;
    document.getElementById('year-max-input').value = 2024;
    document.getElementById('year-min').textContent = '2015';
    document.getElementById('year-max').textContent = '2024';
    
    // Сбрасываем ползунки цены
    document.getElementById('price-min-input').value = 500000;
    document.getElementById('price-max-input').value = 5000000;
    document.getElementById('price-min').textContent = '500 000';
    document.getElementById('price-max').textContent = '5 000 000';
    
    // Применяем сброшенные фильтры
    applyFilters();
}

function initPriceSliders() {
    const priceMinInput = document.getElementById('price-min-input');
    const priceMaxInput = document.getElementById('price-max-input');
    const priceMinValue = document.getElementById('price-min');
    const priceMaxValue = document.getElementById('price-max');
    
    if (!priceMinInput || !priceMaxInput) return;
    
    function updatePriceValues() {
        priceMinValue.textContent = formatPrice(priceMinInput.value);
        priceMaxValue.textContent = formatPrice(priceMaxInput.value);
        
        // Убеждаемся, что min <= max
        if (parseInt(priceMinInput.value) > parseInt(priceMaxInput.value)) {
            priceMinInput.value = priceMaxInput.value;
            priceMinValue.textContent = formatPrice(priceMinInput.value);
        }
    }
    
    priceMinInput.addEventListener('input', updatePriceValues);
    priceMaxInput.addEventListener('input', updatePriceValues);
    
    // Инициализация начальных значений
    updatePriceValues();
}

function initYearSliders() {
    const yearMinInput = document.getElementById('year-min-input');
    const yearMaxInput = document.getElementById('year-max-input');
    const yearMinValue = document.getElementById('year-min');
    const yearMaxValue = document.getElementById('year-max');
    
    if (!yearMinInput || !yearMaxInput) return;
    
    function updateYearValues() {
        yearMinValue.textContent = yearMinInput.value;
        yearMaxValue.textContent = yearMaxInput.value;
        
        // Убеждаемся, что min <= max
        if (parseInt(yearMinInput.value) > parseInt(yearMaxInput.value)) {
            yearMinInput.value = yearMaxInput.value;
            yearMinValue.textContent = yearMinInput.value;
        }
    }
    
    yearMinInput.addEventListener('input', updateYearValues);
    yearMaxInput.addEventListener('input', updateYearValues);
    
    // Инициализация начальных значений
    updateYearValues();
}

// Инициализация сортировки
function initSorting() {
    const sortSelect = document.getElementById('sort-by');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            applySorting();
        });
    }
}

function applySorting() {
    const sortSelect = document.getElementById('sort-by');
    if (!sortSelect || typeof window.carsData === 'undefined') return;
    
    let sortedCars = [...window.carsData];
    
    switch (sortSelect.value) {
        case 'price-asc':
            sortedCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedCars.sort((a, b) => b.price - a.price);
            break;
        case 'year-desc':
            sortedCars.sort((a, b) => b.year - a.year);
            break;
        case 'year-asc':
            sortedCars.sort((a, b) => a.year - b.year);
            break;
        case 'newest':
        default:
            // По умолчанию - сначала новые (по id, так как id увеличивается с добавлением)
            sortedCars.sort((a, b) => b.id - a.id);
            break;
    }
    
    loadCatalogCars(sortedCars);
}

// Инициализация переключения вида
function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const catalogContainer = document.getElementById('catalog-cars');
    
    if (!viewBtns.length || !catalogContainer) return;
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            viewBtns.forEach(b => b.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Меняем вид сетки
            const viewType = this.dataset.view;
            catalogContainer.className = viewType === 'list' ? 'cars-list' : 'cars-grid';
        });
    });
}

// Инициализация пагинации
function initPagination(cars) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    // Очищаем контейнер
    paginationContainer.innerHTML = '';
    
    // Рассчитываем количество страниц (по 6 автомобилей на страницу)
    const carsPerPage = 6;
    const pageCount = Math.ceil(cars.length / carsPerPage);
    
    if (pageCount <= 1) return;
    
    // Создаем элементы пагинации
    for (let i = 1; i <= pageCount; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.className = 'page-link';
        pageLink.textContent = i;
        
        if (i === 1) {
            pageLink.classList.add('active');
        }
        
        pageLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех ссылок
            document.querySelectorAll('.page-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Добавляем активный класс текущей ссылке
            this.classList.add('active');
            
            // Показываем автомобили для выбранной страницы
            showPage(cars, i, carsPerPage);
            
            // Прокручиваем к началу каталога
            const catalogSection = document.querySelector('.catalog-section');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        paginationContainer.appendChild(pageLink);
    }
}

function showPage(cars, pageNumber, carsPerPage) {
    const catalogContainer = document.getElementById('catalog-cars');
    if (!catalogContainer) return;
    
    // Рассчитываем индекс начала и конца
    const startIndex = (pageNumber - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const pageCars = cars.slice(startIndex, endIndex);
    
    // Очищаем контейнер
    catalogContainer.innerHTML = '';
    
    // Добавляем автомобили для текущей страницы
    pageCars.forEach(car => {
        const carCard = createCarCard(car);
        catalogContainer.appendChild(carCard);
    });
    
    // Добавляем обработчики событий для кнопок
    addCarCardEventListeners();
}