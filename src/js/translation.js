const selectLang = document.querySelectorAll(".language");
const allLang = ["ua", "en", "ru"];
const language = require('../translations.json')

console.log(language)

selectLang.forEach((e) =>
    e.addEventListener("click", function () {
        const langClick = e.innerHTML;
        changeURLLanguage(langClick);
    })
);

const changeURLLanguage = (lang) => {
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

export const changeLanguage = () => {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }

    for (let key in language) {
        document.querySelector(".lng-" + key).innerHTML = language[key][hash];
    }
}
