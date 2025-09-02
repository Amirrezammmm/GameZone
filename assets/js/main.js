
const categories = [
    {id:0 , Name:"اکشن"},
    {id:1 , Name:"استراتژیک"},
    {id:2 , Name:"مسابقه‌ای"},
    {id:3 , Name:"چندنفره آنلاین"},
    {id:4 , Name:"نقش‌آفرینی"},
];
const games = [
    {id:0,Name:"Assassin's Creed Valhalla",cat_id:0,url:"assets/images/valhalla.jpg",price:2500000,desc:"در نقش ایوور، رهبر قبیله‌ای نروژی، باید قبیله‌ات را از سرزمین‌های یخ‌زده‌ی اسکاندیناوی به دشت‌های سرسبز و آشفته‌ی انگلستان هدایت کنی. مأموریت تو تنها زنده ماندن نیست، بلکه ساختن خانه‌ای جدید در سرزمینی دشمن است.اما در پس نبردهای خونین با پادشاهان ساکسون، درگیری‌های قبیله‌ای، و اتحادهای ناپایدار، تو وارد دنیایی مخفی و کهن می‌شوی که تاریخ بشریت را تغییر می‌دهد ."},
    {id:2,Name:"The Last of Us Part II",cat_id:0,url:"assets/images/The Last of Us Part II.jpg",price:3000000,desc:"پنج سال پس از رویدادهای قسمت اول، الی حالا یک دختر ۱۹ ساله‌ است که در شهر جکسون همراه با جوئل زندگی می‌کند؛ شهری امن در میان دنیایی ویران. اما یک تراژدی تکان‌دهنده همه چیز را تغییر می‌دهد.الی وارد سفری بی‌رحمانه برای انتقام می‌شود؛ سفری که مرز بین خوب و بد، قهرمان و ضدقهرمان را محو می‌کند. در این مسیر، او با انتخاب‌هایی روبه‌رو می‌شود که نه‌تنها جانش، بلکه انسانیتش را تهدید می‌کند.بازی داستانی دوگانه دارد؛ نه‌تنها روایت الی را دنبال می‌کنیم، بلکه داستان شخصیت جدیدی به‌نام Abby را نیز تجربه می‌کنیم؛ کسی که خودش قربانی گذشته‌ای دردناک است. این تضاد، داستان را به چالشی فلسفی درباره‌ی درد، خشونت، و دایره‌ی بی‌پایان انتقام تبدیل می‌کند."},
    {id:3,Name:"Age of Empires IV",cat_id:1,url:"assets/images/ps5 age of empires iv.jpg",price:1500000,desc:"بازی Age of Empires IV یک استراتژی تاریخی در زمان واقعی است که بازیکن را به قلب نبردهای مهم تاریخ می‌برد. در این بازی، داستان‌های چهار تمدن اصلی شامل انگلیسی‌ها، مغول‌ها، چینی‌ها و سلطان‌نشین دهلی روایت می‌شود. هر تمدن، یک کمپین جداگانه با داستان‌هایی واقعی از تاریخ دارد؛ مثلاً در کمپین انگلیسی، بازیکن از زمان ویلیام فاتح تا جنگ‌های صد ساله بین انگلستان و فرانسه را تجربه می‌کند. بازی تمرکز زیادی بر روایت تاریخی با استفاده از مستندهای کوتاه، صحنه‌پردازی سینمایی و گیم‌پلی پویا دارد. Age of Empires IV ترکیبی است از یادگیری تاریخ و رهبری ارتش در میدان نبرد."},
    {id:4,Name:"Total War: Warhammer III",cat_id:1,url:"assets/images/Total War Warhammer III.jpg",price:800000,desc:"بازی Total War: Warhammer III ترکیبی حماسی از استراتژی نوبتی و نبردهای هم‌زمان در دنیای فانتزی Warhammer است. داستان بازی درباره گشوده شدن دروازه‌ای به دنیای آشوب (Chaos Realm) است؛ جایی که خدایان تاریکی جهان فانی را تهدید می‌کنند. شما می‌توانید یکی از نژادهای قدرتمند مانند کایوس (Kislev)، کاتای اعظم (Grand Cathay)، چهار خدای آشوب (Khorne، Nurgle، Slaanesh، Tzeentch) یا شیاطین آزاد را رهبری کنید. هر جناح اهداف خود را دارد؛ برخی به دنبال نابودی آشوب‌اند و برخی به دنبال سلطه بر آن. بازی با مرگ یک خدای باستانی آغاز می‌شود و بازیکن در دل نبردهایی عظیم، تصمیم‌گیرنده سرنوشت دنیای Warhammer خواهد بود."},
    {id:5,Name:"Forza Horizon 5",cat_id:2,url:"assets/images/Forza Horizon 5.webp",price:5600000,desc:"بازی Forza Horizon 5 یک مسابقه‌ای جهان‌باز و نفس‌گیر در دل مناظر زیبا و متنوع مکزیک است. شما به عنوان ستاره‌ی فستیوال Horizon وارد بازی می‌شوید؛ جایی که باید در رقابت‌های پرهیجان، اکتشاف مسیرهای ناشناخته، و ماجراجویی‌های منحصر‌به‌فرد شرکت کنید. بازی دارای تنوع محیطی فوق‌العاده‌ای است؛ از بیابان‌ها و جنگل‌ها گرفته تا شهرهای تاریخی و آتشفشان‌های فعال. بیش از ۵۰۰ ماشین وجود دارد که می‌توانید آن‌ها را برانید، تیونینگ کنید و در رقابت‌های آفلاین یا آنلاین استفاده کنید. Forza Horizon 5 ترکیبی از آزادی، سرعت، گرافیک خیره‌کننده و تجربه‌ای سینمایی از رانندگی در دنیایی پویا و زنده است."},
    {id:6,Name:"Gran Turismo 7",cat_id:2,url:"assets/images/Gran Turismo 7.webp",price:6500000,desc:"بازی Gran Turismo 7 یک شبیه‌ساز رانندگی واقع‌گرایانه و دقیق است که برای طرفداران مسابقات حرفه‌ای ساخته شده. در این بازی شما وارد دنیای ماشین‌های کلاسیک، مدرن و مسابقه‌ای می‌شوید و می‌توانید بیش از ۴۰۰ خودروی مختلف را در پیست‌های متنوع و معروف جهان تجربه کنید. تمرکز بازی بر دقت فنی، هندلینگ واقعی، تیونینگ تخصصی و زیبایی ماشین‌هاست. بخش داستانی بازی شما را وارد ماجراجویی در دنیای خودروها می‌کند، از کلکسیون‌داری و خرید خودرو گرفته تا شرکت در تورنمنت‌های بین‌المللی. Gran Turismo 7 تجربه‌ای جدی، عمیق و حرفه‌ای از رانندگی برای عاشقان اتومبیل است."},
    {id:7,Name:"Call of Duty: Warzone",cat_id:3,url:"assets/images/Call of Duty Warzone.jpg",price:3400000,desc:"بازی Call of Duty: Warzone یک بتل‌رویال اول‌شخص و رایگان است که بازیکنان را در یک میدان نبرد عظیم به نام وردانسک (Verdansk) و بعدها آل مازره (Al Mazrah) یا دیگر نقشه‌ها قرار می‌دهد. در این بازی، ۱۰۰ تا ۱۵۰ بازیکن به‌صورت انفرادی یا تیمی برای بقا و پیروزی رقابت می‌کنند. Warzone ترکیبی از گیم‌پلی سریع، اکشن تاکتیکی، و سیستم لوت و خرید است که عمق استراتژیک بالایی دارد. مکانیزم‌هایی مثل Gulag (مبارزه برای بازگشت پس از مرگ)، Loadout Drops (کلاس‌های شخصی‌سازی‌شده)، و رویدادهای درون‌نقشه‌ای بازی را از سایر رقبا متمایز می‌کند. Warzone تجربه‌ای پرهیجان، رقابتی و شدیداً اعتیادآور از دنیای Call of Duty ارائه می‌دهد."},
    {id:8,Name:"Valorant",cat_id:3,url:"assets/images/Valorant.jpg",price:2500000,desc:"بازی Valorant یک شوتر تاکتیکی آنلاین و رقابتی از استودیو Riot Games است که ترکیبی از دقت و استراتژی Counter-Strike با قدرت‌های ویژه شخصیت‌محور مانند Overwatch را ارائه می‌دهد. در این بازی دو تیم پنج‌نفره در مقابل هم قرار می‌گیرند؛ یکی برای کاشت بمب (Spike) و دیگری برای خنثی‌سازی آن. هر Agent در بازی دارای مهارت‌ها و توانایی‌های منحصربه‌فردی است که نقش حیاتی در روند نبرد دارند. نقشه‌ها طراحی دقیقی دارند و نیازمند همکاری تیمی، استراتژی دقیق و نشانه‌گیری سریع هستند. Valorant یک تجربه رقابتی، فشرده و تمرکزمحور است که مهارت و هماهنگی تیمی را به چالش می‌کشد."},
    {id:9,Name:"The Witcher 3: Wild Hunt",cat_id:4,url:"assets/images/The Witcher 3 Wild Hunt.jpg",price:1200000,desc:"بازی The Witcher 3: Wild Hunt یک نقش‌آفرینی جهان‌باز حماسی است که داستان گرالت، شکارچی هیولاهای حرفه‌ای (ویچر) را روایت می‌کند. گرالت در جستجوی دختر خوانده‌اش، سیری، است که توسط نیروی مرموز و خطرناک به نام «Wild Hunt» تعقیب می‌شود. بازی ترکیبی از گرافیک بی‌نظیر، داستان‌سرایی عمیق، تصمیم‌گیری‌های پیچیده و دنیای گسترده‌ای پر از ماموریت‌های جانبی و شخصیت‌های فراموش‌نشدنی است. در این جهان تاریک و فانتزی، هر انتخاب شما می‌تواند پیامدهای بزرگی داشته باشد و سرنوشت جهان را تغییر دهد. The Witcher 3 به‌عنوان یکی از بهترین بازی‌های نقش‌آفرینی تاریخ شناخته می‌شود."},
    {id:10,Name:"Elden Ring",cat_id:4,url:"assets/images/Elden Ring.webp",price:4000000,desc:"بازی Elden Ring یک نقش‌آفرینی جهان‌باز و تاریک است که توسط FromSoftware ساخته شده و با همکاری نویسنده مشهور جورج آر. آر. مارتین شکل گرفته است. داستان بازی درباره سرزمین گسترده و رمزآلود «The Lands Between» است که پس از شکستن حلقه اِلدن (Elden Ring)، دچار هرج‌ومرج و نابودی شده است. بازیکن در نقش یک «تارن‌شکن» (Tarnished) باید در این دنیای بزرگ و خطرناک به جستجو و نبرد بپردازد تا حلقه را بازسازی و سرنوشت سرزمین را رقم بزند. Elden Ring ترکیبی از گیم‌پلی چالش‌برانگیز، مبارزات دقیق و آزادی کامل در اکتشاف محیط‌های متنوع و تاریک است که تجربه‌ای عمیق و فراموش‌نشدنی از سبک سولزبورن ارائه می‌دهد."},
]
localStorage.setItem("cat",JSON.stringify(categories));
localStorage.setItem("games",JSON.stringify(games));
const content = document.querySelector('.items_container');
//--------------------
document.addEventListener('DOMContentLoaded', () => {
    const catItems = document.querySelectorAll(".cat_item");
    catItems.forEach((card, index) => {
        card.addEventListener("click", () => {
            catItems.forEach(g => g.classList.remove("focused"));
            card.classList.add("focused");

            if (index === 0) {
                renderGamesByCategory(null);
            } else {
                renderGamesByCategory((index - 1).toString());
            }
        });
    });

    catItems[0].classList.add("focused");
    renderGamesByCategory(null);

    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", SearchGames);

document.querySelector('.items_container').addEventListener('click', function(event) {
    const card = event.target.closest('.game-card');
    if (!card || event.target.classList.contains("add-to-cart-btn")) return;
    showModalFromCard(card);
});

document.querySelector('.search_container').addEventListener('click', function(event) {
    const card = event.target.closest('.game-card');
    if (!card || event.target.classList.contains("add-to-cart-btn")) return;
    showModalFromCard(card);
});



});




function renderGamesByCategory(catId = null){
    content.innerHTML = "";
    const ctg = JSON.parse(localStorage.getItem("cat"));
    const gms = JSON.parse(localStorage.getItem("games"));

    const filteredGames = catId === null
    ? gms
    : gms.filter(g => g.cat_id === Number(catId));

    filteredGames.forEach((Game) => {
        let gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${Game.url}" alt="تصویر بازی" class="card_image">
            <h3 class="game-name">${Game.Name}</h3>
            <p class="game-price">${formatNumberToPersian(Game.price)+ ' تومان'}</p>
            <p class="game-desc">${Game.desc}</P>
        `;

        let button = document.createElement("button");
        button.className = "add-to-cart-btn";
        button.textContent = "افزودن به سبد خرید";
        gameCard.appendChild(button);

        content.appendChild(gameCard);
    });
}

function SearchGames() {
    const ctg = JSON.parse(localStorage.getItem("cat"));
    const gms = JSON.parse(localStorage.getItem("games"));
    const input = document.getElementById("search").value.toLowerCase();

    const searchContainer = document.querySelector(".search_container");
    if (input.trim() === "") {
        searchContainer.innerHTML = "";
        searchContainer.style.display = "none";
        return;
    }
    searchContainer.innerHTML = "";
    searchContainer.style.display = "grid";

    const filteredGames = gms.filter(game => {
        const gameNameMatch = game.Name.toLowerCase().includes(input);
        const category = ctg.find(c => c.id === game.cat_id);
        const categoryMatch = category && category.Name.toLowerCase().includes(input);
        return gameNameMatch || categoryMatch;
    });

    if (filteredGames.length === 0) {
        searchContainer.innerHTML = "<li style='padding: 0.5rem; text-align: center; color: #777;'>محصولی یافت نشد</li>";
    } else {
        filteredGames.forEach(game => {
            const div = document.createElement("div");
            div.classList.add("game-card");
            div.innerHTML = `
                <img src="${game.url}" alt="${game.Name}" class="card_image">
                <div class="game-info">
                    <div class="game-name">${game.Name}</div>
                    <div class="game-price">${formatNumberToPersian(game.price)} تومان</div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${game.id})">افزودن به سبد خرید</button>
                <p class="game-desc">${game.desc}</P>
            `;
            searchContainer.appendChild(div);
        });
    }
}

function formatNumberToPersian(number) {
  const num = Number(number);
  if (isNaN(num)) return "مقدار نامعتبر است";
  return num.toLocaleString('fa-IR');
}

function getGameIdFromCard(card) {
    const gameName = card.querySelector('.game-name').textContent;
    const games = JSON.parse(localStorage.getItem("games"));
    const game = games.find(g => g.Name === gameName);
    return game?.id ?? null;
}

function showModalFromCard(card) {
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.image img');
    const g_name = document.querySelector('.g_name h2');
    const g_desc = document.querySelector('.g_desc');
    const g_price = document.querySelector('.price_value');

    const gameName = card.querySelector('.game-name').textContent;
    const gamePrice = card.querySelector('.game-price').textContent;
    const gameImageSrc = card.querySelector('img').src;
    const gameDesc = card.querySelector('.game-desc') ? card.querySelector('.game-desc').textContent : "توضیحات در دسترس نیست";

    modalImage.src = gameImageSrc;
    g_name.textContent = gameName;
    g_price.textContent = "قیمت: " + gamePrice;
    g_desc.textContent = gameDesc;

    modal.style.display = 'block';
        document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        const modal = document.querySelector('.modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}


const darkAndLight = {dark:"assets/images/dark-mode.png",light:"assets/images/day-mode.png"};

const darkLightModeBtn = document.querySelector('.dark_ligh_mode');
const modeImg = darkLightModeBtn.querySelector('img');
let currentMode = 'light';  
modeImg.src = darkAndLight.dark;
darkLightModeBtn.addEventListener('click', () => {
    if (currentMode === 'light') {
        document.body.classList.add('dark-mode');
        modeImg.src = darkAndLight.light;
        currentMode = 'dark';
        document.getElementById("theme-style").href = "assets/css/darkMode.css";
    } else {
        document.body.classList.remove('dark-mode');
        modeImg.src = darkAndLight.dark;
        currentMode = 'light';
        document.getElementById("theme-style").href = "assets/css/style.css";
    }
});