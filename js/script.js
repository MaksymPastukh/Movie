/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const removeAdvertisement = document.querySelectorAll('.promo__adv img'),
    changeGenre = document.querySelector('.promo__genre'),
    changeBg = document.querySelector('.promo__bg'),
    changeMoviesList = document.querySelector('.promo__interactive-list');


// Удаляем всю рекламу

removeAdvertisement.forEach(item => {
    item.remove();
})

// Заменяем жанр фильма

changeGenre.innerText = 'драма';


// Заменяем фонувою картинку
changeBg.style.backgroundImage = "url('../img/bg.jpg')"

//Очищаем польность список фильмов в HTML

changeMoviesList.innerHTML = '';

// Сортируем фильмы в базе данных по алфавитному порядку

movieDB.movies.sort();


// Добавляем фильмы на страницу с базы данных, так же номеруем фильмы
// Используя цикл и конкантенацию строк!

movieDB.movies.forEach((item, index) => {
    changeMoviesList.innerHTML += `
         <li class="promo__interactive-item">${index + 1}. ${item}
             <div class="delete"></div>
         </li>     
    `;
})