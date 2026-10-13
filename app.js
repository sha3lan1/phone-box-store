/**
 * PHONE BOX - Master Application Script
 * Complete Catalog, Search, Filtering, and WhatsApp Integration
 */

// 22 Category Groups definition
const CATEGORY_GROUPS = [
    { id: "power_banks", nameAr: "بنوك الطاقة (Power Banks)" },
    { id: "wall_chargers", nameAr: "الشواحن الجدارية" },
    { id: "car_chargers", nameAr: "شواحن السيارات" },
    { id: "usb_c_cables", nameAr: "كابلات USB-C" },
    { id: "lightning_cables", nameAr: "كابلات Lightning" },
    { id: "micro_usb_cables", nameAr: "كابلات Micro-USB" },
    { id: "multi_port_cables", nameAr: "كابلات متعددة المنافذ" },
    { id: "wireless_chargers", nameAr: "الشواحن اللاسلكية" },
    { id: "magsafe_accessories", nameAr: "إكسسوارات MagSafe" },
    { id: "magsafe_car_mounts", nameAr: "قواعد سيارة MagSafe" },
    { id: "phone_holders", nameAr: "حوامل وقواعد الهواتف" },
    { id: "wired_earphones", nameAr: "سماعات سلكية" },
    { id: "wireless_earbuds", nameAr: "سماعات لاسلكية (TWS)" },
    { id: "apple_airpods", nameAr: "سماعات AirPods وإكسسواراتها" },
    { id: "over_ear_headphones", nameAr: "سماعات الرأس الكبيرة" },
    { id: "phone_cases", nameAr: "أغطية وحافظات الهواتف" },
    { id: "screen_protectors", nameAr: "حماة الشاشة" },
    { id: "camera_protectors", nameAr: "حماة عدسات الكاميرا" },
    { id: "usb_hubs", nameAr: "محاور USB ومحولات" },
    { id: "memory_cards", nameAr: "بطاقات الذاكرة والتخزين" },
    { id: "smartwatch_accessories", nameAr: "إكسسوارات الساعات الذكية" },
    { id: "general_accessories", nameAr: "إكسسوارات عامة ومنتجات أخرى" }
];

// Product Catalog
const PRODUCTS = [
    {
        id: "pb-joy-20000",
        nameAr: "بنك طاقة جوبروم 20000 مللي أمبير شحن سريع",
        nameEn: "JOYROOM 20000mAh Fast Power Bank",
        brand: "JOYROOM",
        model: "JR-PBF03",
        category: "power_banks",
        descriptionAr: "بنك طاقة عالي السعة من جوبروم مع منفذين USB ودعم الشحن السريع PD لتشغيل جهازك طوال اليوم بأمان تام.",
        price: 18.50,
        currency: "دينار أردني",
        primaryImage: "https://images.unsplash.com/photo-1609592424104-97d4c4e122a7?auto=format&fit=crop&w=600&q=80",
        imageType: "similar",
        verificationStatus: "verified",
        tags: ["باور بانك", "جوبروم", "شحن سريع", "20000"]
    },
    {
        id: "chg-anker-gan-65w",
        nameAr: "شاحن جداري أنكر 65 واط بتقنية GaN",
        nameEn: "Anker 65W GaN Wall Charger",
        brand: "Anker",
        model: "A2663",
        category: "wall_chargers",
        descriptionAr: "شاحن جداري فائق السرعة وصغير الحجم مزود بمنفذين Type-C لشحن اللابتوب والهاتف بنفس الكفاءة.",
        price: 24.00,
        currency: "دينار أردني",
        primaryImage: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
        imageType: "similar",
        verificationStatus: "verified",
        tags: ["شاحن", "أنكر", "65 واط", "جداري"]
    },
    {
        id: "cbl-ugreen-typec-100w",
        nameAr: "كابل يو اس بي سي إلى يو اس بي سي 100 واط من يوجرين",
        nameEn: "UGREEN USB-C to USB-C 100W Cable",
        brand: "UGREEN",
        model: "US316",
        category: "usb_c_cables",
        descriptionAr: "كابل شحن ونقل بيانات فائق المتانة بطول 1 متر يدعم الشحن السريع حتى 100 واط.",
        price: 5.50,
        currency: "دينار أردني",
        primaryImage: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
        imageType: "similar",
        verificationStatus: "verified",
        tags: ["كابل", "يوجرين", "Type-C", "100W"]
    },
    {
        id: "ear-wiwu-tws",
        nameAr: "سماعات لاسلكية ترو وايرلس من وايفو",
        nameEn: "WIWU TWS Wireless Earbuds",
        brand: "WIWU",
        model: "Airbuds Pro",
        category: "wireless_earbuds",
        descriptionAr: "صوت نقي وعميق مع عزل ممتاز للضوضاء وبطارية تدوم طوال الاستخدام اليومي.",
        price: 19.99,
        currency: "دينار أردني",
        primaryImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
        imageType: "similar",
        verificationStatus: "verified",
        tags: ["سماعات", "وايفو", "بلوتوث", "TWS"]
    },
    {
        id: "mag-magsafe-mount",
        nameAr: "قاعدة مغناطيسية للسيارة بتقنية MagSafe",
        nameEn: "MagSafe Magnetic Car Mount",
        brand: "Baseus",
        model: "BS-CM01",
        category: "magsafe_car_mounts",
        descriptionAr: "تثبيت مغناطيسي قوي وثابت لهاتفك أثناء القيادة مع دعم الدوران بحرية تامة.",
        price: 12.00,
        currency: "دينار أردني",
        primaryImage: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
        imageType: "similar",
        verificationStatus: "verified",
        tags: ["ماج سيف", "قاعدة سيارة", "بيسوس"]
    },
    {
        id: "case-iphone-silicone",
        nameAr: "غطاء حماية سيليكون فاخر لهاتف آيفون",
        nameEn: "Premium Silicone Case for iPhone",
        brand: "Apple",
        model: "Silicone Case",
        category: "phone_cases",
        descriptionAr: "تصميم أنيق وملمس ناعم يحمي هاتفك من الصدمات والخدوش مع بطانة داخلية من المايكروفايبر.",
        price: 8.00,
        currency: "دينار أردني",
        primaryImage: "https://images.unsplash.com/photo-1601593346740-92566786c534?auto=format&fit=crop&w=600&q=80",
        imageType: "similar",
        verificationStatus: "verified",
        tags: ["كفر", "آيفون", "سيليكون", "حماية"]
    }
];

// State Management
let currentCategory = "all";
let currentBrand = "all";
let searchQuery = "";

// DOM Elements
const productGrid = document.getElementById("productGrid");
const categoryFiltersContainer = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const emptyState = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const brandButtons = document.querySelectorAll(".brand-btn");
const productModal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContent = document.getElementById("modalContent");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    renderCategoryFilters();
    renderProducts();
    setupEventListeners();
});

// Render Category Filter Pills
function renderCategoryFilters() {
    CATEGORY_GROUPS.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "cat-pill whitespace-nowrap bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0";
        btn.dataset.category = cat.id;
        btn.textContent = cat.nameAr;
        categoryFiltersContainer.appendChild(btn);
    });
}

// Render Product Catalog
function renderProducts() {
    productGrid.innerHTML = "";

    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        const matchesBrand = currentBrand === "all" || p.brand.toLowerCase() === currentBrand.toLowerCase();
        const matchesSearch = searchQuery === "" || 
            p.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesBrand && matchesSearch;
    });

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "group bg-zinc-900/80 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-lg";
        
        card.innerHTML = `
            <div class="relative aspect-square bg-zinc-950 overflow-hidden cursor-pointer" onclick="openProductModal('${product.id}')">
                <img src="${product.primaryImage}" alt="${product.nameAr}" 
                    onerror="this.onerror=null; this.src='placeholder.svg';"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md text-zinc-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-zinc-800">
                    ${product.brand}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-1 justify-between gap-4">
                <div class="space-y-2">
                    <h3 class="text-sm font-bold text-white line-clamp-2 cursor-pointer hover:text-zinc-300 transition-colors" onclick="openProductModal('${product.id}')">
                        ${product.nameAr}
                    </h3>
                    <p class="text-xs text-zinc-400 line-clamp-2">${product.descriptionAr}</p>
                </div>
                <div class="flex items-center justify-between pt-3 border-t border-zinc-800/80">
                    <div class="flex flex-col">
                        <span class="text-[10px] text-zinc-500 uppercase">السعر</span>
                        <span class="text-base font-black text-white">${product.price.toFixed(2)} <span class="text-xs font-normal text-zinc-400">دينار</span></span>
                    </div>
                    <a href="https://wa.me/962799350131?text=${encodeURIComponent('مرحباً، أستفسر عن المنتج: ' + product.nameAr + ' (' + product.price + ' دينار)')}" 
                        target="_blank" rel="noopener noreferrer"
                        class="bg-emerald-600 hover:bg-emerald-500 text-white w-9 h-9 rounded-xl flex items-center justify-center transition-colors shadow-md shadow-emerald-900/20"
                        title="اطلب عبر واتساب">
                        <i class="fa-brands fa-whatsapp text-base"></i>
                    </a>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Event Listeners Setup
function setupEventListeners() {
    const handleSearch = (e) => {
        searchQuery = e.target.value.trim();
        renderProducts();
    };
    searchInput.addEventListener("input", handleSearch);
    mobileSearchInput.addEventListener("input", handleSearch);

    brandButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            brandButtons.forEach(b => {
                b.classList.remove("active", "bg-white", "text-zinc-950");
                b.classList.add("bg-zinc-900", "text-zinc-300", "border", "border-zinc-800");
            });
            btn.classList.add("active", "bg-white", "text-zinc-950");
            btn.classList.remove("bg-zinc-900", "text-zinc-300", "border", "border-zinc-800");
            currentBrand = btn.dataset.brand;
            renderProducts();
        });
    });

    categoryFiltersContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-pill");
        if (!btn) return;

        document.querySelectorAll(".cat-pill").forEach(p => {
            p.classList.remove("bg-zinc-200", "text-zinc-950", "font-bold");
            p.classList.add("bg-zinc-900", "text-zinc-300", "font-medium");
        });
        btn.classList.remove("bg-zinc-900", "text-zinc-300", "font-medium");
        btn.classList.add("bg-zinc-200", "text-zinc-950", "font-bold");

        currentCategory = btn.dataset.category;
        renderProducts();
    });

    resetFiltersBtn.addEventListener("click", () => {
        currentCategory = "all";
        currentBrand = "all";
        searchQuery = "";
        searchInput.value = "";
        mobileSearchInput.value = "";
        
        brandButtons.forEach(b => {
            if (b.dataset.brand === "all") {
                b.classList.add("active", "bg-white", "text-zinc-950");
                b.classList.remove("bg-zinc-900", "text-zinc-300");
            } else {
                b.classList.remove("active", "bg-white", "text-zinc-950");
                b.classList.add("bg-zinc-900", "text-zinc-300");
            }
        });

        document.querySelectorAll(".cat-pill").forEach(p => {
            if (p.dataset.category === "all") {
                p.classList.add("bg-zinc-200", "text-zinc-950", "font-bold");
                p.classList.remove("bg-zinc-900", "text-zinc-300", "font-medium");
            } else {
                p.classList.remove("bg-zinc-200", "text-zinc-950", "font-bold");
                p.classList.add("bg-zinc-900", "text-zinc-300", "font-medium");
            }
        });

        renderProducts();
    });

    closeModalBtn.addEventListener("click", closeModal);
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeModal();
    });
}

// Open Product Details Modal
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    modalContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div class="aspect-square bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800">
                <img src="${product.primaryImage}" alt="${product.nameAr}" 
                    onerror="this.onerror=null; this.src='placeholder.svg';"
                    class="w-full h-full object-cover">
            </div>
            <div class="space-y-4">
                <div class="flex items-center gap-2">
                    <span class="bg-zinc-800 text-zinc-300 text-xs font-bold px-3 py-1 rounded-full">${product.brand}</span>
                    ${product.model ? `<span class="text-xs text-zinc-400">الموديل: ${product.model}</span>` : ''}
                </div>
                <h2 class="text-xl font-bold text-white leading-snug">${product.nameAr}</h2>
                <p class="text-sm text-zinc-400 leading-relaxed">${product.descriptionAr}</p>
                <div class="pt-2">
                    <span class="text-xs text-zinc-500 uppercase">السعر الرسمي</span>
                    <div class="text-2xl font-black text-white">${product.price.toFixed(2)} <span class="text-sm font-normal text-zinc-400">دينار أردني</span></div>
                </div>
                <div class="pt-4 flex gap-3">
                    <a href="https://wa.me/962799350131?text=${encodeURIComponent('مرحباً، أود طلب أو الاستفسار عن هذا المنتج:\n- ' + product.nameAr + '\n- الماركة: ' + product.brand + '\n- السعر: ' + product.price + ' دينار')}" 
                        target="_blank" rel="noopener noreferrer"
                        class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-900/30">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>اطلب عبر واتساب</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    productModal.classList.remove("hidden");
    productModal.classList.add("flex");
}

function closeModal() {
    productModal.classList.remove("flex");
    productModal.classList.add("hidden");
}
