import $ from 'jquery';
import 'slick-carousel';

const slider = () => {
  $(function () {
    $("#menu, .menu__list").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({
        scrollTop: top
      }, 1000);
    });

    $('.hero__slider').slick({
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          infinite: true
        }

      }]
    });

    $('.header__button, .menu').on('click', function () {
      $('.header__button').toggleClass('active');
      $('body').toggleClass('lock');
      $('.menu').toggleClass('active');
    })

  });
}

export default slider;
