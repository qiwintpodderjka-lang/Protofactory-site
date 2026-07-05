// Анимация статистики

function animateValue(id, start, end, duration) {

    let obj = document.getElementById(id);
    let range = end - start;
    let increment = end > start ? 1 : -1;

    let stepTime = Math.abs(
        Math.floor(duration / range)
    );

    let current = start;

    let timer = setInterval(() => {

        current += increment;

        obj.textContent = current;

        if(current === end){
            clearInterval(timer);
        }

    }, stepTime);
}

// Запуск после загрузки страницы

window.onload = () => {

    animateValue("players", 0, 4, 1500);
    animateValue("factories", 0, 50, 2000);
    animateValue("contracts", 0, 120, 2500);

};

// Кнопка играть

document.getElementById("playBtn")
.addEventListener("click", () => {

    alert(
        "Скоро игра станет доступна!"
    );

});
