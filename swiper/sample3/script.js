
const swiper =new Swiper('.swiper',{
    direction:'horizontal',
    // loop:'true',
    speed: 400,
    spaceBetween: 100,
    slidesPerView:1,


    // effects
    // effect:'cards',
    // effect:'slide',
    // effect:'fade',
    effect:'coverflow',
    // effect:'flip',
    // effect: 'cube',

    // attributes for the cards effect
    cardsEffect:{

    },
    // effect:'creative',
    creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -1000],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
    },
    cubeEffect: {
      slideShadows: false,
    },


    pagination:{
        el:'.swiper-pagination'
    },



    followFinger:'true',



    centeredSlides:'true',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    //   sets the height of the swiper to the height of the image
    //   autoHeight:'true',
    //   sets auto play speed
      autoplay:{
        delay:2000,
      },

    //   responsive breakpoints
    breakpoints:{

        320:{
            slidesPerView:1,
            spaceBetween:200
        },

        640:{
            slidesPerView:1,
            spaceBetween:100,
        },
    },
})