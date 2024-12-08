const weapons = {
    Zeus: {
        name: "Zeus",
        image: "img/Zeus.jpg",
        details: {
            "Info": "Зброя для пострілів на малій дистанції з одним патроном у магазині, який завдає летальної електричної шкоди жертві.",
        }
    },
    DesertEagle: {
        name: "Desert Eagle",
        image: "img/Desert Eagle.jpg",
        details: {
            "Info": "самозарядний пістолет великого калібру (до 12,7 мм). Позиціонується як мисливська зброя, спортивна зброя та зброя для самозахисту від диких звірів та злочинних посягань. Був розроблений в 1983 році в США компанією Magnum Research",
        }
    },
    Tec9: {
        name: "Tec-9",
        image: "img/Tec-9.jpg",
        details: {
            "Info": "самозарядний пістолет заснований на принципі вільного затвора. Виготовлявся в Американському підрозділі Шведської компанії Interdynamic AB, спроєктований збройовим дизайнером шведського походження Джорджем Келлгреном. ",
        }
    },
    FiveseveN: {
        name: "Five-seveN",
        image: "img/Five-seveN.jpg",
        details: {
            "Info": "бельгійський самозарядний пістолет, що був розроблений і зараз виробляється бельгійською фірмою Fabrique Nationale of Herstal (Національна фабрика в Ерсталі). Назва є комбінацією: з одного боку, Five-seveN — це «5-7» (5,7 — калібр зброї, який дорівнює .224), а з іншого — перша і остання букви назви, які пишуться заголовними, це абревіатура фірми Fabrique Nationale.",
        }
    },
    DualBerettas: {
        name: "Dual Berettas",
        image: "img/Dual Berettas.jpg",
        details: {
            "Info": "серія напівавтоматичних пістолетів, розроблених і виготовлених виробником Beretta (Італія). Модель 92 була розроблена в 1972 році, а виробництво багатьох варіантів різнокаліберних пістолетів продовжується й досі.",
        }
    }
};

function show(key) {
    window.location.href = `index2.html?weapon=${key}`;
}
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('weapon');

    if (key) {
        showDetails(key);
    }
});

function showDetails(key) {
    const weapon = weapons[key];
    const weaponContent = `
        <h1>${weapon.name}</h1>
        <img src="${weapon.image}" alt="${weapon.name}" class="details-image">
        <div class="info">
            ${Object.entries(weapon.details)
                .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                .join('')}
        </div>
    `;
    document.getElementById("Content").innerHTML = weaponContent;
}

