/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."]
    };


    const removeAdvertisement = document.querySelectorAll('.promo__adv img'),
        changeGenre = document.querySelector('.promo__genre'), changeBg = document.querySelector('.promo__bg'),
        changeMoviesList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'), formInput = form.querySelector('.adding__input'),
        formCheckbox = form.querySelector('[type="checkbox"]');


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let filmNew = formInput.value;
        const filmFavorite = formCheckbox.checked;

        if (filmNew) {

            if (filmNew.length > 15) {
                filmNew = `${filmNew.substring(0, 16)}...`;
            }

            if (filmFavorite) {
                console.log('Добавляем новый фильм')
            }

            movieDB.movies.push(filmNew);
            sortArr(movieDB.movies);

            newMovieList(movieDB.movies, changeMoviesList);
        }


        e.target.reset();
    })


// Удаляем всю рекламу

    const removeAdv = (del) => {
        del.forEach(item => {
            item.remove();
        });
    };

    // Заменяем жанр фильма
    // Заменяем фонувою картинку
    const makeChanges = () => {
        changeGenre.innerText = 'драма';
        changeBg.style.backgroundImage = "url('../img/bg.jpg')"
    };

// Сортируем фильмы в базе данных по алфавитному порядку

    const sortArr = (arr) => {
        arr.sort();
    };


//Очищаем польность список фильмов в HTML
// Добавляем фильмы на страницу с базы данных, так же номеруем фильмы
// Используя цикл и конкантенацию строк!

    function newMovieList(film, parent) {
        parent.innerHTML = '';
        sortArr(film);

        film.forEach((item, index) => {
            parent.innerHTML += `
         <li class="promo__interactive-item">${index + 1}. ${item}
             <div class="delete"></div>
         </li>`;
        })


        document.querySelectorAll('.delete').forEach((item, index) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(index, 1);

                newMovieList(film, parent);
            });
        });
    }


    removeAdv(removeAdvertisement);
    makeChanges();
    newMovieList(movieDB.movies, changeMoviesList);

});