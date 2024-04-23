$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".mobile-nav").addClass("active");
  });

  $("#close-btn").click(function () {
    $(".mobile-nav").removeClass("active");
  });
});

window.addEventListener("load", (event) => {
  function start_hero_discount_slider() {
    $("#hero_discount_slider_id").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 477,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      prevArrow: `<svg width="23" height="16" viewBox="0 0 23 16" fill="#727272" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.292892 8.7071C-0.0976315 8.31658 -0.0976314 7.68342 0.292893 7.29289L6.65686 0.928931C7.04738 0.538406 7.68054 0.538406 8.07107 0.928931C8.46159 1.31946 8.46159 1.95262 8.07107 2.34314L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.7071ZM23 9L1 9L1 7L23 7L23 9Z"/>
      </svg>
      `,
      nextArrow: `<svg width="23" height="16" viewBox="0 0 23 16" fill="#727272" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.7071 8.7071C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928931C15.9526 0.538406 15.3195 0.538406 14.9289 0.928931C14.5384 1.31946 14.5384 1.95262 14.9289 2.34314L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.7071ZM8.74228e-08 9L22 9L22 7L-8.74228e-08 7L8.74228e-08 9Z"/>
      </svg>
      `,
      appendArrows: $(".hero_discount_arrows"),
    });
  }

  start_hero_discount_slider();

  function start_usa_story_slider() {
    $("#usa_story_list_slider_id").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 477,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  start_usa_story_slider();

  function start_trending_stores_slider() {
    $("#trending_stores_list_slider_id").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 477,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  start_trending_stores_slider();
});
