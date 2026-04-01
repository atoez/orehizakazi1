const products = [
    { id: 1, name: 'Грецкий орех в трюфеле', price: 1100, category: 'walnut', image: 'assets/walnut-truffle.jpg', emoji: '🌰', weights: ['1 кг'] },
    { id: 2, name: 'Грецкий орех половинки', price: 770, category: 'walnut', image: 'assets/walnut-halves.jpg', emoji: '🌰', weights: ['1 кг'] },
    { id: 3, name: 'Грецкий орех в скорлупе', price: 330, category: 'walnut', image: 'assets/walnut-shell.jpg', emoji: '🌰', weights: ['500 г', '1 кг'] },
    { id: 4, name: 'Миндаль в шоколаде', price: 770, category: 'almond', image: 'assets/almond-chocolate.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 5, name: 'Миндаль', price: 950, category: 'almond', image: 'assets/almond.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 6, name: 'Кешью в белом шоколаде', price: 770, category: 'cashew', image: 'assets/cashew-white.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 7, name: 'Кешью в цветной глазури', price: 880, category: 'cashew', image: 'assets/cashew-color.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 8, name: 'Кешью в специях барбекю', price: 1320, category: 'cashew', image: 'assets/cashew-bbq.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 9, name: 'Кешью', price: 1050, category: 'cashew', image: 'assets/cashew.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 10, name: 'Арахис в кунжуте', price: 400, category: 'peanut', image: 'assets/peanut-sesame.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 11, name: 'Арахис в специях барбекю', price: 600, category: 'peanut', image: 'assets/peanut-bbq.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 12, name: 'Арахис', price: 380, category: 'peanut', image: 'assets/peanut.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 13, name: 'Изюм Малояр', price: 400, category: 'raisin', image: 'assets/raisin-maloyar.jpg', emoji: '🍇', weights: ['1 кг'] },
    { id: 14, name: 'Изюм Голд', price: 660, category: 'raisin', image: 'assets/raisin-gold.jpg', emoji: '🍇', weights: ['1 кг'] },
    { id: 15, name: 'Изюм в белом шоколаде', price: 660, category: 'raisin', image: 'assets/raisin-white-choc.jpg', emoji: '🍇', weights: ['1 кг'] },
    { id: 16, name: 'Финики без косточек', price: 450, category: 'dates', image: 'assets/dates.jpg', emoji: '🌴', weights: ['500 г', '1 кг'] },
    { id: 17, name: 'Вишня сушеная', price: 440, category: 'dried', image: 'assets/cherry-dried.jpg', emoji: '🍒', weights: ['500 г'] },
    { id: 18, name: 'Курага', price: 660, category: 'dried', image: 'assets/apricot.jpg', emoji: '🍑', weights: ['1 кг'] },
    { id: 19, name: 'Фисташки Иран', price: 1250, category: 'pistachio', image: 'assets/pistachio.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 20, name: 'Макадамия', price: 700, category: 'macadamia', image: 'assets/macadamia.jpg', emoji: '🥜', weights: ['1 кг'] },
    { id: 21, name: 'Семя тыквы', price: 550, category: 'seeds', image: 'assets/pumpkin-seeds.jpg', emoji: '🌻', weights: ['1 кг'] },
    { id: 22, name: 'Кукуруза попкорн в специях', price: 660, category: 'snacks', image: 'assets/popcorn.jpg', emoji: '🍿', weights: ['1 кг'] },
    { id: 23, name: 'Орехи в меде', price: 550, category: 'honey', image: 'assets/nuts-honey.jpg', emoji: '🍯', weights: ['500 г', '1 кг'] },
    { id: 24, name: 'Конфеты ассорти', price: 770, category: 'candy', image: 'assets/candy-assorti.jpg', emoji: '🍬', weights: ['500 г', '1 кг'] },
    { id: 25, name: 'Смесь ореховая', price: 770, category: 'mix', image: 'assets/nuts-mix.jpg', emoji: '🥗', weights: ['1 кг'] },
];

const categories = [
    { id: 'all', name: 'Все товары', emoji: '' },
    { id: 'walnut', name: 'Грецкий орех', emoji: '🌰' },
    { id: 'almond', name: 'Миндаль', emoji: '🥜' },
    { id: 'cashew', name: 'Кешью', emoji: '🥜' },
    { id: 'peanut', name: 'Арахис', emoji: '🥜' },
    { id: 'raisin', name: 'Изюм', emoji: '🍇' },
    { id: 'dried', name: 'Сухофрукты', emoji: '🍑' },
    { id: 'pistachio', name: 'Фисташки', emoji: '🥜' },
    { id: 'macadamia', name: 'Макадамия', emoji: '🥜' },
    { id: 'seeds', name: 'Семечки', emoji: '🌻' },
    { id: 'snacks', name: 'Снеки', emoji: '🍿' },
    { id: 'honey', name: 'В меду', emoji: '🍯' },
    { id: 'candy', name: 'Конфеты', emoji: '🍬' },
    { id: 'mix', name: 'Смеси', emoji: '🥗' },
];

let cart = [];
let selectedWeights = {};

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    showProducts('all');
    loadCart();
    
    if (window.WebApp) {
        WebApp.ready();
        WebApp.setHeaderColor('#2C1E1E');
        WebApp.setBackgroundColor('#F5EDE4');
        WebApp.expand();
    }
    
    updateFAB();
    
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeCart);
    }
});

function renderCategories() {
    const container = document.querySelector('.filter-container');
    if (!container) return;
    container.innerHTML = categories.map(cat => `
        <button class="filter-pill ${cat.id === 'all' ? 'active' : ''}" 
                onclick="filterCategory('${cat.id}', this)">
            ${cat.emoji} ${cat.name}
        </button>
    `).join('');
}

function showProducts(category) {
    const container = document.getElementById('productsList');
    if (!container) return;
    
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-products"><span style="font-size: 64px;">📦</span><p>В этой категории пока нет товаров</p></div>';
        return;
    }
    
    container.innerHTML = filtered.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 50}ms">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="emoji-fallback" style="display: none;">${product.emoji}</div>
            </div>
            <div class="product-content">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                
                ${product.weights.length > 1 ? `
                <div class="weight-selector">
                    ${product.weights.map((w, i) => `
                        <button class="weight-btn ${i === 0 ? 'active' : ''}" 
                                onclick="selectWeight(this, ${product.id}, '${w}')">
                            ${w}
                        </button>
                    `).join('')}
                </div>
                ` : `<p class="product-weight">${product.weights[0]}</p>`}
                
                <div class="product-footer">
                    <span class="product-price" id="price-${product.id}">${formatPrice(getPriceForWeight(product, product.weights[0]))}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="5 12 12 19 19 12"></polyline>
                        </svg>
                        <span>В корзину</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function selectWeight(btn, productId, weight) {
    const container = btn.parentElement;
    container.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedWeights[productId] = weight;
    
    const product = products.find(p => p.id === productId);
    const priceEl = document.getElementById(`price-${productId}`);
    if (priceEl && product) {
        priceEl.textContent = formatPrice(getPriceForWeight(product, weight));
    }
}

function getPriceForWeight(product, weight) {
    if (weight === '500 г') {
        return Math.round(product.price / 2);
    }
    return product.price;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const selectedWeight = selectedWeights[productId] || product.weights[0];
    const price = getPriceForWeight(product, selectedWeight);
    
    const existing = cart.find(item => item.id === productId && item.weight === selectedWeight);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ 
            id: product.id,
            name: product.name,
            price: price,
            category: product.category,
            image: product.image,
            emoji: product.emoji,
            weight: selectedWeight,
            quantity: 1 
        });
    }
    
    saveCart();
    if (navigator.vibrate) navigator.vibrate(10);
}

function getCategoryName(category) {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

function filterCategory(category, btn) {
    document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
    btn.classList.add('active');
    showProducts(category);
    setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function scrollToProducts() {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function loadCart() {
    try {
        const saved = localStorage.getItem('cart');
        if (saved) {
            cart = JSON.parse(saved);
            // Миграция старых товаров без weight
            cart = cart.map(item => ({
                ...item,
                weight: item.weight || '1 кг'
            }));
            updateCartCount();
            updateFAB();
        }
    } catch (e) {
        cart = [];
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateFAB();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function updateFAB() {
    const fab = document.getElementById('orderFAB');
    if (!fab) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const counterEl = fab.querySelector('.fab-counter');
    const textEl = fab.querySelector('.fab-text');
    const priceEl = fab.querySelector('.fab-price');
    
    if (counterEl) counterEl.textContent = totalItems;
    if (textEl) textEl.textContent = totalItems > 0 ? 'Заказать' : 'Корзина';
    if (priceEl) priceEl.textContent = formatPrice(totalPrice);
    
    fab.classList.toggle('active', totalItems > 0);
}

function showCart() {
    const sidebar = document.getElementById('cartSidebar');
    const container = document.getElementById('cartItems');
    if (!sidebar || !container) return;
    
    document.body.classList.add('no-scroll');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Корзина пуста</h3>
                <p>Добавьте товары из каталога</p>
                <button class="btn btn-primary" onclick="closeCart(); scrollToProducts();" style="margin-top: 16px;">Перейти к каталогу</button>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-weight">${item.weight}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, '${item.weight}', -1); event.stopPropagation();">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, '${item.weight}', 1); event.stopPropagation();">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.weight}'); event.stopPropagation();">🗑</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalPriceEl = document.getElementById('totalPrice');
    if (totalPriceEl) totalPriceEl.textContent = formatPrice(total);
    
    sidebar.classList.add('active');
}

function closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (!sidebar) return;
    sidebar.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function changeQty(productId, weight, delta) {
    const item = cart.find(item => item.id === productId && item.weight === weight);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId, weight);
        } else {
            saveCart();
            showCart();
        }
    }
    event?.stopPropagation();
}

function removeFromCart(productId, weight) {
    cart = cart.filter(item => !(item.id === productId && item.weight === weight));
    saveCart();
    showCart();
    event?.stopPropagation();
}

function showCheckout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    closeCart();
    document.body.classList.add('no-scroll');
    
    const summary = document.getElementById('orderSummary');
    if (!summary) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    summary.innerHTML = `
        <div class="order-item"><span>Товары (${itemsCount} шт)</span><span>${formatPrice(total)}</span></div>
        <div class="order-item"><span>Доставка</span><span style="color: #4CAF50;">Бесплатно</span></div>
        <div class="order-item" style="font-weight: 700; font-size: 18px; margin-top: 12px; padding-top: 12px; border-top: 2px solid #E5E5E5;">
            <span>Итого</span><span style="color: #4CAF50;">${formatPrice(total)}</span>
        </div>
    `;
    
    document.getElementById('checkoutModal')?.classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutModal')?.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function closeSuccess() {
    document.getElementById('successModal')?.classList.remove('active');
    document.body.classList.remove('no-scroll');
    if (window.WebApp) WebApp.close();
}

async function submitOrder() {
    const name = document.getElementById('name')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const address = document.getElementById('address')?.value.trim();
    const comment = document.getElementById('comment')?.value.trim();
    
    if (!name || !phone || !address) {
        alert('Заполните все обязательные поля!');
        return;
    }
    
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(phone)) {
        alert('Введите корректный номер телефона');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const orderDate = new Date().toLocaleString('ru-RU');
    
    const submitBtn = document.querySelector('#checkoutModal .btn-primary');
    const originalText = submitBtn ? submitBtn.textContent : 'Подтвердить заказ';
    if (submitBtn) {
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;
    }
    
    const orderData = {
        date: orderDate,
        name: name,
        phone: phone,
        address: address,
        comment: comment,
        items: cart,
        total: total
    };
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwI-pcwcxOKkp81L_I_LLDEc_geqIYNqUZeT8f3PeITGUXZT089EncRVGrVySrekqc/exec';
    
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        closeCheckout();
        document.getElementById('successModal')?.classList.add('active');
        
        cart = [];
        saveCart();
        
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
        document.getElementById('comment').value = '';
        
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка отправки. Попробуйте позже или позвоните нам.');
    } finally {
        if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
}

// Глобальные функции
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.showCart = showCart;
window.closeCart = closeCart;
window.showCheckout = showCheckout;
window.closeCheckout = closeCheckout;
window.submitOrder = submitOrder;
window.closeSuccess = closeSuccess;
window.scrollToProducts = scrollToProducts;
window.filterCategory = filterCategory;
window.selectWeight = selectWeight;