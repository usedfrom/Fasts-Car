// Основной JavaScript файл для сайта FASTS-CAR

// ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ =====

// Открытие модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Закрытие модального окна
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ===== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ =====
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initScrollTop();
    initModals();
    initForms();
    initSelectionForm();     // ← новая форма подбора
    if (typeof loadLatestCars === 'function') {
        loadLatestCars();
    }
});

// ===== МОБИЛЬНОЕ МЕНЮ =====
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            });
        });
    }
}

// ===== КНОПКА "НАВЕРХ" =====
function initScrollTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== МОДАЛЬНЫЕ ОКНА =====
function initModals() {
    document.querySelectorAll('.callback-btn').forEach(btn => {
        btn.addEventListener('click', () => openModal('callback-modal'));
    });
    
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) closeModal(modal.id);
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal(modal.id);
        });
    });
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => closeModal(m.id));
        }
    });
}

// ===== ФОРМЫ (callback + маска телефона) =====
function initForms() {
    const callbackForm = document.getElementById('callback-form');
    if (callbackForm) {
        callbackForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = callbackForm.querySelector('input[type="text"]').value;
            const phone = callbackForm.querySelector('input[type="tel"]').value;
            alert(`Спасибо, ${name}! Сергей свяжется с вами по номеру ${phone}.`);
            closeModal('callback-modal');
            callbackForm.reset();
        });
    }
    
    // Маска телефона +7 (XXX) XXX-XX-XX
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function() {
            let v = this.value.replace(/\D/g, '');
            if (v.length > 0) v = '+7' + v.substring(1);
            v = v.replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
            this.value = v.substring(0, 18);
        });
    });
}

// ===== МНОГОШАГОВАЯ ФОРМА ПОДБОРА =====
function initSelectionForm() {
    const form = document.getElementById('selection-form');
    if (!form) return;

    const steps = document.querySelectorAll('.form-step');
    const progressFill = document.querySelector('.progress-fill');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const sendButtons = document.querySelectorAll('.send-btn');
    const sendOptions = document.querySelector('#step-5 .send-options');

    let currentStep = 1;

    function updateProgress() {
        if (progressFill) {
            progressFill.style.width = `${(currentStep / steps.length) * 100}%`;
        }
    }

    function goToStep(stepId) {
        steps.forEach(s => s.classList.remove('active'));
        const target = document.getElementById(stepId);
        if (target) {
            target.classList.add('active');
            currentStep = parseInt(stepId.replace('step-', ''));
            updateProgress();
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Далее
    nextButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const current = btn.closest('.form-step');
            const required = current.querySelectorAll('[required]');
            let valid = true;
            required.forEach(el => {
                if (!el.checkValidity()) {
                    valid = false;
                    el.reportValidity();
                }
            });
            if (valid) goToStep(btn.dataset.next);
        });
    });

    // Назад
    prevButtons.forEach(btn => {
        btn.addEventListener('click', () => goToStep(btn.dataset.prev));
    });

    // Показ кнопок отправки после выбора на шаге 5
    const timingRadios = document.querySelectorAll('#step-5 input[name="timing"]');
    if (timingRadios.length && sendOptions) {
        timingRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    sendOptions.style.display = 'flex';
                }
            });
        });
        // Если при загрузке уже выбрано (маловероятно)
        if (document.querySelector('#step-5 input[name="timing"]:checked')) {
            sendOptions.style.display = 'flex';
        }
    }

    // Отправка заявки
    sendButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type     = document.querySelector('input[name="car-type"]:checked')?.value     || 'не указано';
            const req      = document.getElementById('requirements')?.value?.trim()             || 'не указано';
            const age      = document.querySelector('input[name="age"]:checked')?.value         || 'не указано';
            const budget   = document.querySelector('input[name="budget"]:checked')?.value      || 'не указано';
            const timing   = document.querySelector('input[name="timing"]:checked')?.value      || 'не указано';

            const message = 
`Новая заявка с сайта FASTS-CAR

Тип: ${type}
Пожелания:
${req}

Возраст: ${age}
Бюджет: ${budget}
Сроки: ${timing}

────────────────────────────
Заявка отправлена: ${new Date().toLocaleString('ru-RU')}`;

            const encoded = encodeURIComponent(message);
            const channel = btn.dataset.channel;

            let url = '';
            if (channel === 'whatsapp') {
                url = `https://wa.me/79084501200?text=${encoded}`;
            } else if (channel === 'telegram') {
                url = `https://t.me/SerLozhnik?text=${encoded}`;
            }

            if (url) window.open(url, '_blank');
        });
    });

    updateProgress();
}

// ===== КАТАЛОГ (оставляем без изменений) =====
function loadLatestCars() {
    const container = document.getElementById('latest-cars');
    if (!container || typeof window.carsData === 'undefined') return;

    container.innerHTML = '';
    window.carsData.slice(0, 4).forEach(car => {
        container.appendChild(createCarCard(car));
    });
    addCarCardEventListeners();
}

function createCarCard(car) {
    const carCard = document.createElement('div');
    carCard.className = 'car-card';
    carCard.dataset.id = car.id;

    const formattedPrice = formatPrice(car.price);

    // Если есть фото — используем его, иначе заглушка
    const imageHtml = car.image 
        ? `<img src="${car.image}" alt="${car.brand} ${car.model} ${car.year}" class="car-photo">`
        : `<i class="fas fa-car"></i>`;

    carCard.innerHTML = `
        <div class="car-image">
            ${imageHtml}
        </div>
        <div class="car-info">
            <div class="car-header">
                <div>
                    <h3 class="car-title">${car.brand} ${car.model}</h3>
                    <div class="car-year">${car.year} год</div>
                </div>
                <div class="car-price">${formattedPrice} ₽</div>
            </div>
            <div class="car-details">
                <div class="car-detail">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>${car.mileage ? formatPrice(car.mileage) + ' км' : '—'}</span>
                </div>
                <div class="car-detail">
                    <i class="fas fa-cog"></i>
                    <span>${car.transmission === 'automatic' ? 'Автомат' : (car.transmission || '—')}</span>
                </div>
                <div class="car-detail">
                    <i class="fas fa-flag"></i>
                    <span>${getCountryName(car.country)}</span>
                </div>
            </div>
            <div class="car-description-short">
                ${car.description || ''}
            </div>
            <div class="car-actions">
                <button class="btn btn-primary btn-small view-details">Подробнее</button>
                <button class="btn btn-secondary btn-small quick-order">Быстрый заказ</button>
            </div>
        </div>
    `;

    return carCard;
}

function getCountryName(code) {
    return { japan: 'Япония', korea: 'Корея', china: 'Китай' }[code] || code;
}

function addCarCardEventListeners() {
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.closest('.car-card').dataset.id;
            const car = window.carsData.find(c => c.id == id);
            if (car) showCarDetailsModal(car);
        });
    });

    document.querySelectorAll('.quick-order').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.closest('.car-card').dataset.id;
            const car = window.carsData.find(c => c.id == id);
            if (car) {
                const modal = document.getElementById('callback-modal');
                if (modal) {
                    const ta = modal.querySelector('textarea');
                    if (ta) ta.value = `Интересует: ${car.brand} ${car.model} ${car.year}, ${formatPrice(car.price)} ₽`;
                    openModal('callback-modal');
                }
            }
        });
    });
}

function showCarDetailsModal(car) {
    const content = document.getElementById('car-modal-content');
    if (!content) return;

    const price = formatPrice(car.price);
    const country = getCountryName(car.country);
    const trans = car.transmission === 'automatic' ? 'Автоматическая' : 'Механическая';
    const drive = { front: 'Передний', rear: 'Задний', 'all-wheel': 'Полный' }[car.drive] || car.drive;
    const body = { sedan: 'Седан', suv: 'Внедорожник', hatchback: 'Хэтчбек', minivan: 'Минивэн', coupe: 'Купе', pickup: 'Пикап', wagon: 'Универсал' }[car.bodyType] || car.bodyType;

    content.innerHTML = `
        <div class="car-modal-details">
            <h2>${car.brand} ${car.model} ${car.year}</h2>
            <div class="car-modal-price">${price} ₽</div>
            <div class="car-modal-image"><i class="fas fa-car"></i></div>
            <div class="car-modal-specs">
                <h3>Характеристики</h3>
                <div class="specs-grid">
                    <div class="spec"><span class="spec-label">Страна:</span><span>${country}</span></div>
                    <div class="spec"><span class="spec-label">Год:</span><span>${car.year}</span></div>
                    <div class="spec"><span class="spec-label">Кузов:</span><span>${body}</span></div>
                    <div class="spec"><span class="spec-label">Двигатель:</span><span>${car.engine} л</span></div>
                    <div class="spec"><span class="spec-label">КПП:</span><span>${trans}</span></div>
                    <div class="spec"><span class="spec-label">Привод:</span><span>${drive}</span></div>
                    <div class="spec"><span class="spec-label">Цвет:</span><span>${car.color}</span></div>
                    <div class="spec"><span class="spec-label">Пробег:</span><span>${formatPrice(car.mileage)} км</span></div>
                </div>
            </div>
            <div class="car-modal-description">
                <h3>Описание</h3>
                <p>${car.description || 'Отличное состояние, проверен перед покупкой.'}</p>
            </div>
            <div class="car-modal-actions">
                <button class="btn btn-primary" id="modal-order-btn">Заказать этот автомобиль</button>
                <button class="btn btn-secondary" onclick="closeModal('car-modal')">Закрыть</button>
            </div>
        </div>
    `;

    openModal('car-modal');

    document.getElementById('modal-order-btn')?.addEventListener('click', () => {
        closeModal('car-modal');
        const ta = document.querySelector('#callback-modal textarea');
        if (ta) ta.value = `Хочу: ${car.brand} ${car.model} ${car.year}, ${price} ₽`;
        openModal('callback-modal');
    }, { once: true });
}

// Стили для фото в карточках (можно также добавить в style.css)
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .car-image img.car-photo {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 8px 8px 0 0;
            display: block;
        }
        .car-description-short {
            font-size: 0.95rem;
            color: #555;
            margin: 12px 0;
            line-height: 1.4;
            min-height: 60px;
        }
    `;
    document.head.appendChild(style);
});

document.addEventListener('DOMContentLoaded', function() {
    // После загрузки карточек проверяем фото
    const images = document.querySelectorAll('.car-image img.car-photo');
    images.forEach(img => {
        img.addEventListener('load', function() {
            if (this.naturalHeight > this.naturalWidth * 1.2) {  // вертикальное фото
                this.style.objectFit = 'contain';
            } else {
                this.style.objectFit = 'cover';
            }
        });
        // Если фото уже загружено из кэша
        if (img.complete) {
            if (img.naturalHeight > img.naturalWidth * 1.2) {
                img.style.objectFit = 'contain';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.car-image img.car-photo').forEach(img => {
        img.addEventListener('load', function() {
            const isVertical = this.naturalHeight > this.naturalWidth * 1.1;
            this.classList.toggle('vertical-photo', isVertical);
        });
        // если фото уже в кэше
        if (img.complete) {
            const isVertical = img.naturalHeight > img.naturalWidth * 1.1;
            img.classList.toggle('vertical-photo', isVertical);
        }
    });
});

// Умная шапка — скрывается при скролле вниз
let lastScrollTop = 0;
const delta = 5;          // минимальное изменение для реакции
const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > 120) {
            // вниз
            header.classList.add('hidden');
        } else {
            // вверх
            header.classList.remove('hidden');
        }

        lastScrollTop = st <= 0 ? 0 : st;
    }, { passive: true });
}