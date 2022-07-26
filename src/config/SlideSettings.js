const settings = {
 infinite: false,
 autoplay: false,
 slidesToShow: 5,
 slidesToScroll: 5,
 InitialSlide: 0,
 responsive: [
  {
   breakpoints: 1024,
   settings: {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    Infinite: false
   }
  },
  {
   breakpoint: 768,
   settings: {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    InitialSlide: 1,
   }
  },
  {
   breakpoint: 480,
   settings: {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1

   }
  }
 ]
}
export default settings