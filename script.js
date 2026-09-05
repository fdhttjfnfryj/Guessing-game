// База данных со всеми бравлерами и их уникальными текстовыми иконками/эмодзи
const brawlersDatabase = [
    { name: "эмз", icon: "📱💁‍♀️", hint: "Популярная зомби-блогерша с баллончиком спрея" },
    { name: "леон", icon: "🦎🍭", hint: "Легендарный скрытный бравлер в капюшоне-хамелеоне" },
    { name: "ворон", icon: "🦅🗡️", hint: "Легендарный бравлер-птица, стреляет отравленными кинжалами" },
    { name: "спайк", icon: "🌵🟢", hint: "Легендарный говорящий (?) кактус, кидающий игольчатые гранаты" },
    { name: "кадзе", icon: "💨⚔️", hint: "Ловкий ассасин, управляющий силой ветра" },
    { name: "нори", icon: "🐙🌊", hint: "Морской бравлер, связанный с океанскими глубинами" },
    { name: "сквик", icon: "💧🐶", hint: "Создан из слюны генерала Гавса, бросает липкие бомбы" },
    { name: "мелоди", icon: "🎤🎶", hint: "Популярная певица с летающими вокруг неё нотами" },
    { name: "нита", icon: "🐻🔴", hint: "Призывает на поле боя своего огромного призрачного медведя" },
    { name: "шейд", icon: "👻🕶️", hint: "Призрачный бравлер из новейших обновлений" },
    { name: "джуджу", icon: "🧸🔮", hint: "Новый артиллерист, использующий куклы и магию элементов" },
    { name: "мо", icon: "🐹⛏️", hint: "Маленький слепой бравлер-крот на буровой машине" },
    { name: "кенжи", icon: "🍣⚔️", hint: "Мастер суши и грозный ассасин с острым мечом" },
    { name: "клэнси", icon: "🦞🛡️", hint: "Бравлер-рак, который улучшает свои атаки по ходу матча" },
    { name: "берри", icon: "🦄🍦", hint: "Бравлер-единорог, бросающий лужи липкого мороженого" },
    { name: "драко", icon: "🎸🐉", hint: "Тяжелый рокер на драконе, играющий огненное соло" },
    { name: "лили", icon: "🌱🎭", hint: "Бравлер-растение, умеющий телепортироваться за спину врага" },
    { name: "анжело", icon: "🦟🏹", hint: "Комар-купидон с болота любви, стреляющий из лука" },
    { name: "шелли", icon: "🤠🔫", hint: "Самый первый бравлер игры с мощным дробовиком" },
    { name: "кольт", icon: "🤠🔫", hint: "Стрелок с двумя револьверами и идеальной прической" },
    { name: "булл", icon: "🐂🌾", hint: "Грозный бык, который обожает прятаться в кустах" },
    { name: "брок", icon: "🚀🕶️", hint: "Парень с ракетницей, танцующий под крутые треки" },
    { name: "эль примо", icon: "💪👑", hint: "Мексиканский рестлер, прыгающий на врагов с супер-ударом" },
    { name: "поко", icon: "💀🎸", hint: "Скелет-музыкант, который лечит союзников своей гитарой" },
    { name: "роза", icon: "🥊🌿", hint: "Боксер-ботаник, создающая щит из прочных растений" },
    { name: "джесси", icon: "🛠️🐕", hint: "Юная изобретательница, атакующая с помощью турели-собаки" },
    { name: "динамайк", icon: "💣🧨", hint: "Старый шахтер, закидывающий всю карту динамитом" },
    { name: "бо", icon: "🦅🏹", hint: "Охотник, стреляющий взрывными стрелами и ставящий мины" },
    { name: "тик", icon: "🤖💣", hint: "Раздражающий робот, бросающий самонаводящуюся голову" },
    { name: "8-бит", icon: "🕹️👾", hint: "Медленный игровой автомат, увеличивающий урон союзников" },
    { name: "рико", icon: "🤖🔮", hint: "Робот, чьи резиновые шарики отскакивают от стен" },
    { name: "дэррил", icon: "🛢️🤠", hint: "Робот-пират, который катится по карте внутри бочки" },
    { name: "пенни", icon: "🏴‍☠️🪙", hint: "Пиратка, стреляющая мешками монет из своей мортиры" },
    { name: "карл", icon: "⛏️🔄", hint: "Кирка этого бравлера возвращается к нему как бумеранг" }
];

// Функция случайного перемешивания массива
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let brawlers = shuffle([...brawlersDatabase]);
let currentIndex = 0;
let skipsLeft = 3; // Количество доступных пропусков

// Функция обновления сердечек на экране
function updateSkipsDisplay() {
    const display = document.getElementById('skips-display');
    let hearts = "";
    for (let i = 0; i < skipsLeft; i++) {
        hearts += "❤️ ";
    }
    display.innerText = skipsLeft > 0 ? `Пропуски: ${hearts}` : "Пропусков больше нет! ❌";
    
    // Если пропусков 0, отключаем кнопку пропуска
    if (skipsLeft === 0) {
        document.getElementById('skip-btn').disabled = true;
    }
}

// Загрузка бравлера на экран
function loadBrawler() {
    const brawlerDisplay = document.getElementById('brawler-image');
    const hintDisplay = document.getElementById('brawler-hint');
    
    brawlerDisplay.innerHTML = brawlers[currentIndex].icon || "👾";
    hintDisplay.innerText = brawlers[currentIndex].hint;
    
    // Сброс оформления
    document.body.className = "";
    document.getElementById('result-message').innerText = "";
    document.getElementById('answer-input').value = "";
    
    // Управление кнопками
    document.getElementById('check-btn').style.display = "inline-block";
    document.getElementById('next-btn').style.display = "none";
    if (skipsLeft > 0) {
        document.getElementById('skip-btn').style.display = "inline-block";
    }
    
    document.getElementById('answer-input').disabled = false;
    document.getElementById('answer-input').focus();
    updateSkipsDisplay();
}

// Запуск игры
loadBrawler();

// Проверка ответа
function checkAnswer() {
    const inputField = document.getElementById('answer-input');
    const userAnswer = inputField.value.trim().toLowerCase();
    const resultMessage = document.getElementById('result-message');
    const body = document.body;

    const correctAnswer = brawlers[currentIndex].name;

    if (userAnswer === correctAnswer) {
        resultMessage.innerText = `Правильно! Это ${correctAnswer.toUpperCase()}! 🎉`;
        body.className = "correct-flash";
        
        inputField.disabled = true;
        document.getElementById('check-btn').style.display = "none";
        document.getElementById('skip-btn').style.display = "none";
        document.getElementById('next-btn').style.display = "inline-block";
    } else {
        resultMessage.innerText = "Не угадал! Попробуй еще раз... 😢";
        body.className = "wrong-flash";

        setTimeout(() => {
            body.className = "";
            resultMessage.innerText = "";
            inputField.value = "";
        }, 1500);
    }
}

// Новая функция ПРОПУСКА бравлера
function skipBrawler() {
    if (skipsLeft > 0) {
        skipsLeft--; // Отнимаем один пропуск
        
        const correctAnswer = brawlers[currentIndex].name;
        const resultMessage = document.getElementById('result-message');
        
        resultMessage.innerText = `Вы пропустили! Это был: ${correctAnswer.toUpperCase()} 🧐`;
        document.getElementById('answer-input').disabled = true;
        
        // Прячем старые кнопки и показываем кнопку "Дальше"
        document.getElementById('check-btn').style.display = "none";
        document.getElementById('skip-btn').style.display = "none";
        document.getElementById('next-btn').style.display = "inline-block";
        
        updateSkipsDisplay();
    }
}

// Переход дальше
function nextBrawler() {
    currentIndex++;
    
    if (currentIndex >= brawlers.length) {
        currentIndex = 0;
        brawlers = shuffle([...brawlersDatabase]);
        alert("Потрясающе! Раунд завершен. Перемешиваем бравлеров снова!");
    }
    
    loadBrawler();
}

// Ввод через Enter
document.getElementById('answer-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (document.getElementById('check-btn').style.display !== "none") {
            checkAnswer();
        } else if (document.getElementById('next-btn').style.display !== "none") {
            nextBrawler();
        }
    }
});
