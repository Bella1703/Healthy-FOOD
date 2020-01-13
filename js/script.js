//ПЛАВНЫЕ ССЫЛКИ
$(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


//СЛАЙДЕР
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        dotsClass: 'slider__dots',
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

//ВЫПАДАЮЩЕЕ МЕНЮ
let navBurger = document.body.querySelector(".nav__burger");
let navSmall = document.body.querySelector(".nav__small");

function Nav() {
    if (navSmall.classList.contains("display-none")) {
        navSmall.classList.remove("display-none");
    } else {
        navSmall.classList.add("display-none");
    }
}

navBurger.addEventListener("click", Nav);

//ВЫПАДАЮЩИЙ КАЛЕНДАРЬ, ВРЕМЯ
$(document).ready(function () {
    $('input.timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 60,
        minTime: '10',
        maxTime: '22',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});


$(function () {
    $("#datepicker").datepicker({
        minDate: 'today',
        maxDate: 'today + 14',
    });
});

//МОДАЛЬНОЕ ОКНО
let modalWindow = document.body.querySelector(".modal-window");
let submit = document.body.querySelector(".submit");
let xIcon = document.body.querySelector(".modal-window__x-icon");

function showModalWindow() {
    modalWindow.classList.remove("display-none");
    document.body.style.overflow = "hidden";
    setTimeout(hideModalWindow, 5000);
}

function hideModalWindow() {
    modalWindow.classList.add("display-none");
    document.body.style.overflow = "";
}

submit.addEventListener("click", function(){

    let isError = false;
    let email = document.body.querySelector('#mail');
    let errorMail = document.querySelector('.error-mail');
    if (!email.validity.valid || email.value.length < 2) {
        isError = true;
        errorMail.innerHTML = "Введите корректный адрес электронной почты";
        email.classList.add("invalid");
    } else {
        errorMail.innerHTML = "";
        email.classList.remove("invalid");
    }

    let name = document.body.querySelector('#name');
    let errorName = document.querySelector('.error-name');
    let re=/^[a-zа-яё]+$/i;
    if (!re.test(name.value) || name.value.length < 2) {
        isError = true;
        errorName.innerHTML = "Введите корректное имя";
        name.classList.add("invalid");
    } else {
        errorName.innerHTML = "";
        name.classList.remove("invalid");
    }

    let date = document.body.querySelector('#datepicker');
    let errorDate = document.querySelector('.error-date');
    if (date.value == "") {
        isError = true;
        errorDate.innerHTML = "Выберите дату";
        date.classList.add("invalid");
    } else {
        errorDate.innerHTML = "";
        date.classList.remove("invalid");
    }

    let people = document.body.querySelector('#people');
    let errorPeople = document.querySelector('.error-people');
    if (people.value == "") {
        isError = true;
        errorPeople.innerHTML = "Укажите число гостей";
        people.classList.add("invalid");
    } else {
        errorPeople.innerHTML = "";
        people.classList.remove("invalid");
    }

    let time = document.body.querySelector('#time');
    let errorTime = document.querySelector('.error-time');
    if (time.value == "") {
        isError = true;
        errorTime.innerHTML = "Выберите время";
        time.classList.add("invalid");
    } else {
        errorTime.innerHTML = "";
        time.classList.remove("invalid");
    }


    if(!isError){
        showModalWindow();
        name.value = "";
        date.value = "";
        people.value = "";
        email.value = "";
        time.value = "";
    }
});
modalWindow.addEventListener("click", hideModalWindow);
xIcon.addEventListener("click", hideModalWindow);

