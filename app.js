// Phone Box Store - Application Logic (Direct Image URLs)

const PRODUCTS = [
    {
        id: "pb-01",
        title: "شاحن جويروم 20 واط سريع يدعم PD",
        category: "شواحن جدارية",
        brand: "JOYROOM",
        price: "12.00",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
        description: "شاحن جداري سريع بقدرة 20 واط يدعم تقنية PD لشحن الآيفون والأجهزة الحديثة بأعلى أمان وسرعة."
    },
    {
        id: "pb-02",
        title: "سماعة Anker Soundcore P20i لاسلكية",
        category: "سماعات بلوتوث",
        brand: "Anker",
        price: "22.00",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
        description: "سماعات داخل الأذن لاسلكية مع صوت نقي، باس قوي، ومقاومة للماء IPX5 مع بطارية تدوم حتى 30 ساعة."
    },
    {
        id: "pb-03",
        title: "كابل UGREEN Type-C إلى Lightning قماش متين",
        category: "كابلات ووصلات",
        brand: "UGREEN",
        price: "8.50",
        image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80",
        description: "كابل شحن ونقل بيانات مضفر بالألياف المقواة معتمد من Apple مع حماية ضد الإنحناء والقطع."
    },
    {
        id: "pb-04",
        title: "باور بانك WIWU بسعة 10000 مللي أمبير MagSafe",
        category: "باور بانك وشواحن متنقلة",
        brand: "WIWU",
        price: "25.00",
        image: "https://images.unsplash.com/photo-1609592424074-be4816c483d7?w=600&auto=format&fit=crop&q=80",
        description: "بنك طاقة لاسلكي يدعم المغناطيس MagSafe لشحن هواتف آيفون أثناء التنقل بكل سهولة."
    },
    {
        id: "pb-05",
        title: "لاصق حماية زجاجي معزز للشاشة",
        category: "شاشات حماية وكفرات",
        brand: "Apple",
        price: "5.00",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80",
        description: "حماية زجاجية حرارية مضادة للبصمات والخدوش بتغطية كاملة وحواف منحنية لجميع الموديلات."
    },
    {
        id: "pb-06",
        title: "ماسك هاتف للسيارة مع شاحن لاسلكي 15W",
        category: "مستلزمات سيارات",
        brand: "JOYROOM",
        price: "18.00",
        image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80",
        description: "حامل جوال الذكي لفتحات التكييف بالسيارة يفتح ويغلق تلقائياً بمستشعر حركة مع شحن سريع."
    }
];

const CATEGORIES = [
    "شواحن جدارية",
    "سماعات بلوتوث",
    "كابلات ووصلات",
    "باور بانك وشواحن متنقلة",
    "شاشات حماية وكفرات",
    "مستلزمات سيارات"
];

let selectedCategory = "all";
let selectedBrand = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
    initCategories();
    renderProducts();
    initEventListeners();
});

function initCategories() {
    const catContainer = document.getElementById("categoryFilters");
    if (!catContainer) return;

    CATEGORIES.forEach(cat => {
        const btn = document.createElement("button");
        btn.dataset.category = cat;
        btn.className = "cat-pill whitespace-nowrap bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0";
        btn.innerText = cat;
        catContainer.appendChild(btn);
    });
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyState");
    if (!grid) return;

    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
        const matchesBrand = selectedBrand === "all" || p.brand.toLowerCase() === selectedBrand.toLowerCase();
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesBrand && matchesSearch;
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
        if (emptyState) emptyState.classList.remove("hidden");
        return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden shadow-lg transition-all flex flex-col group";
        
        const whatsappMsg = encodeURIComponent(`مرحباً PHONE BOX، أود طلب/الاستفسار عن المنتج: ${p.title} - السعر: ${p.price} د.أ`);
        
        card.innerHTML = `
            <div class="relative h-48 bg-zinc-950 overflow-hidden cursor-pointer" onclick="openProductModal('${p.id}')">
                <img src="${p.image}" alt="${p.title}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ${p.brand}
                </span>
            </div>
            <div class="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                    <span class="text-[10px] text-zinc-400 block mb-1">${p.category}</span>
                    <h3 class="text-sm font-bold text-white group-hover:text-zinc-200 line-clamp-2 cursor-pointer" onclick="openProductModal('${p.id}')">${p.title}</h3>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-zinc-800/60">
                    <div>
                        <span class="text-base font-black text-white">${p.price}</span>
                        <span class="text-[10px] text-zinc-400">د.أ</span>
                    </div>
                    <a href="https://wa.me/962799350131?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer"
                        class="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>طلب</span>
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initEventListeners() {
    const searchInput = document.getElementById("searchInput");
    const mobileSearchInput = document.getElementById("mobileSearchInput");

    const handleSearch = (e) => {
        searchQuery = e.target.value.trim();
        renderProducts();
    };

    if (searchInput) searchInput.addEventListener("input", handleSearch);
    if (mobileSearchInput) mobileSearchInput.addEventListener("input", handleSearch);

    const brandBtns = document.querySelectorAll(".brand-btn");
    brandBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            brandBtns.forEach(b => {
                b.classList.remove("bg-white", "text-zinc-950", "active");
                b.classList.add("bg-zinc-900", "text-zinc-300");
            });
            btn.classList.remove("bg-zinc-900", "text-zinc-300");
            btn.classList.add("bg-white", "text-zinc-950", "active");
            
            selectedBrand = btn.dataset.brand;
            renderProducts();
        });
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("cat-pill")) {
            const pills = document.querySelectorAll(".cat-pill");
            pills.forEach(p => {
                p.classList.remove("bg-zinc-200", "text-zinc-950", "active", "font-bold");
                p.classList.add("bg-zinc-900", "text-zinc-300");
            });
            e.target.classList.remove("bg-zinc-900", "text-zinc-300");
            e.target.classList.add("bg-zinc-200", "text-zinc-950", "active", "font-bold");

            selectedCategory = e.target.dataset.category;
            renderProducts();
        }
    });

    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            selectedCategory = "all";
            selectedBrand = "all";
            searchQuery = "";
            if (searchInput) searchInput.value = "";
            if (mobileSearchInput) mobileSearchInput.value = "";
            renderProducts();
        });
    }

    const closeModalBtn = document.getElementById("closeModalBtn");
    const productModal = document.getElementById("productModal");

    if (closeModalBtn && productModal) {
        closeModalBtn.addEventListener("click", closeModal);
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) closeModal();
        });
    }
}

function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById("modalContent");
    const productModal = document.getElementById("productModal");
    if (!modalContent || !productModal) return;

    const whatsappMsg = encodeURIComponent(`مرحباً PHONE BOX، أرغب بشراء: ${product.title} بسعر ${product.price} د.أ`);

    modalContent.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div class="h-64 bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800">
                <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
            </div>
            <div class="space-y-4 text-right">
                <span class="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">${product.brand}</span>
                <h3 class="text-xl font-bold text-white">${product.title}</h3>
                <p class="text-xs text-zinc-400 leading-relaxed">${product.description}</p>
                <div class="text-2xl font-black text-white">${product.price} <span class="text-xs font-normal text-zinc-400">دينار أردني</span></div>
                <a href="https://wa.me/962799350131?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer"
                    class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    <span>طلب مباشر عبر الواتساب</span>
                </a>
            </div>
        </div>
    `;

    productModal.classList.remove("hidden");
    productModal.classList.add("flex");
}

function closeModal() {
    const productModal = document.getElementById("productModal");
    if (productModal) {
        productModal.classList.add("hidden");
        productModal.classList.remove("flex");
    }
}
