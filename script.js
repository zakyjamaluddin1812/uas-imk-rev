var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 5,
    breakpoints: {
        1024: {
          perPage: 3,
         
        },
        767: {
          perPage: 2,
      
        },
        640: {
          perPage: 2,
    
        },
      },
    perMove: 1,
  } );
  
  splide.mount();