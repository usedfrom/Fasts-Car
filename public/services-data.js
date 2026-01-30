// Данные для страницы услуг
window.servicesData = [
    {
        id: 1,
        title: 'Подбор автомобиля под ключ',
        description: 'Полный цикл услуг: от подбора автомобиля по вашим критериям до доставки в ваш город и помощи в регистрации.',
        icon: 'fas fa-car',
        features: [
            'Консультация по выбору марки и модели',
            'Поиск на аукционах Японии, Кореи, Китая',
            'Проверка истории автомобиля',
            'Участие в торгах',
            'Организация доставки',
            'Таможенное оформление',
            'Помощь в получении ПТС'
        ],
        price: 'от 50 000 ₽'
    },
    {
        id: 2,
        title: 'Покупка на аукционах',
        description: 'Профессиональное участие в аукционах Японии, Кореи и Китая. Мы знаем все тонкости и поможем купить авто по лучшей цене.',
        icon: 'fas fa-gavel',
        features: [
            'Анализ аукционных листов',
            'Оценка реального состояния по фото',
            'Стратегия участия в торгах',
            'Контроль ставок в реальном времени',
            'Юридическое сопровождение сделки',
            'Проверка на угон и аварии'
        ],
        price: 'от 30 000 ₽'
    },
    {
        id: 3,
        title: 'Доставка автомобилей по России',
        description: 'Организуем доставку купленного автомобиля из Владивостока в любой город России с минимальными затратами времени.',
        icon: 'fas fa-truck',
        features: [
            'Морская доставка из стран Азии',
            'Автомобильные перевозки по России',
            'Страхование груза',
            'Отслеживание в пути',
            'Приемка и проверка при доставке',
            'Хранение на складе при необходимости'
        ],
        price: 'Рассчитывается индивидуально'
    },
    {
        id: 4,
        title: 'Растаможка автомобилей',
        description: 'Профессиональное таможенное оформление с учетом всех нюансов законодательства. Минимизация расходов и сроков.',
        icon: 'fas fa-file-contract',
        features: [
            'Расчет таможенных платежей',
            'Подготовка пакета документов',
            'Взаимодействие с таможенными органами',
            'Оформление ПТС и СБКТС',
            'Консультации по налоговым вопросам',
            'Полное сопровождение процесса'
        ],
        price: 'от 15 000 ₽'
    },
    {
        id: 5,
        title: 'Автокредит и рассрочка',
        description: 'Помощь в оформлении автокредита или рассрочки на покупку автомобиля. Сотрудничаем с ведущими банками России.',
        icon: 'fas fa-credit-card',
        features: [
            'Подбор оптимальной кредитной программы',
            'Помощь в сборе документов',
            'Сопровождение сделки с банком',
            'Консультации по условиям кредитования',
            'Помощь в получении одобрения',
            'Сравнение предложений разных банков'
        ],
        price: 'Бесплатно'
    },
    {
        id: 6,
        title: 'Постановка на учет в ГИБДД',
        description: 'Помощь в регистрации автомобиля в ГИБДД. Избавим от очередей и бумажной волокиты.',
        icon: 'fas fa-id-card',
        features: [
            'Подготовка документов для ГИБДД',
            'Запись на регистрацию',
            'Сопровождение в МРЭО',
            'Прохождение техосмотра',
            'Получение номерных знаков',
            'Консультации по вопросам регистрации'
        ],
        price: 'от 5 000 ₽'
    }
];

// Данные для таблицы цен
window.pricingData = [
    { service: 'Консультация и подбор автомобиля', description: 'Подбор 3-5 вариантов по вашим критериям', price: 'Бесплатно' },
    { service: 'Участие в аукционе', description: 'Ведение торгов за один лот', price: '30 000 ₽' },
    { service: 'Проверка автомобиля перед покупкой', description: 'Полная диагностика и проверка истории', price: '10 000 ₽' },
    { service: 'Оформление документов на покупку', description: 'Подготовка договоров и экспортных документов', price: '15 000 ₽' },
    { service: 'Морская доставка из Японии', description: 'Стоимость за один автомобиль (Владивосток)', price: 'от 100 000 ₽' },
    { service: 'Морская доставка из Кореи', description: 'Стоимость за один автомобиль (Владивосток)', price: 'от 80 000 ₽' },
    { service: 'Морская доставка из Китая', description: 'Стоимость за один автомобиль (Владивосток)', price: 'от 70 000 ₽' },
    { service: 'Автоперевозка по России (Москва)', description: 'Стоимость доставки из Владивостока', price: 'от 150 000 ₽' },
    { service: 'Таможенное оформление', description: 'Растаможка одного автомобиля', price: 'от 15 000 ₽' },
    { service: 'Комплекс "Под ключ"', description: 'Полный цикл услуг (кроме стоимости авто и пошлин)', price: 'от 150 000 ₽' }
];

// Загрузка услуг на страницу
function loadServices() {
    const servicesContainer = document.getElementById('services-grid');
    
    if (!servicesContainer || typeof window.servicesData === 'undefined') return;
    
    // Очищаем контейнер
    servicesContainer.innerHTML = '';
    
    // Добавляем услуги в контейнер
    window.servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        // Создаем HTML для карточки услуги
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                
                <ul class="service-features">
                    ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                
                <div class="service-footer">
                    <div class="service-price">${service.price}</div>
                    <button class="btn btn-primary order-service" data-service="${service.title}">Заказать услугу</button>
                </div>
            </div>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });
    
    // Добавляем обработчики для кнопок заказа услуг
    const orderButtons = document.querySelectorAll('.order-service');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceName = this.dataset.service;
            
            // Открываем модальное окно и заполняем данные об услуге
            const modal = document.getElementById('callback-modal');
            if (modal) {
                const textarea = modal.querySelector('textarea');
                if (textarea) {
                    textarea.value = `Интересует услуга: ${serviceName}`;
                }
                openModal('callback-modal');
            }
        });
    });
}

// Загрузка таблицы цен
function loadPricing() {
    const pricingTableBody = document.getElementById('pricing-table-body');
    
    if (!pricingTableBody || typeof window.pricingData === 'undefined') return;
    
    // Очищаем таблицу
    pricingTableBody.innerHTML = '';
    
    // Добавляем строки в таблицу
    window.pricingData.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${item.service}</strong></td>
            <td>${item.description}</td>
            <td class="price-cell">${item.price}</td>
        `;
        
        pricingTableBody.appendChild(row);
    });
}