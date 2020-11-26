$(function () {

  const worksSlider = $('[data-slider="slick"]');

  /* Filter
  =========================*/

  let filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if (cat === 'all') {
      $("[data-cat]").removeClass('hide');
    } else {

      $("[data-cat]").each(function () {

        let workCat = $(this).data('cat');

        if (workCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }
  });


  /* Modal windows
  =========================*/
  /* Открытие модального окна
  ============================*/
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)"
      });
    }, 200);

    worksSlider.slick('setPosition');

  });


  /* Закрытие модального окна
  ============================*/
  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function () {
      modalParent.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 200);
  });


  $(".modal").on("click", function (event) {
    let $this = $(this);
    $this.find(".modal__dialog").css({
      transform: "scale(0)"
    });

    setTimeout(function () {
      $this.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });


  /* Slider: https://kenwheeler.github.io/slick/
  =========================*/
  worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
  });


  /* Mobile nav
  =========================*/

  const navToggle = $("#navToggle");
  const nav = $("#nav");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  /* Выравнивание блоков по вертикали: https://github.com/liabru/jquery-match-height
  https://pcvector.net/scripts/layout_and_interface/458-bloki-odinakovo-vysoty-jquerymatchheight.html
  =========================*/
  /* $(function() {
    $('.Селектор?').matchHeight(options);
});*/


});
