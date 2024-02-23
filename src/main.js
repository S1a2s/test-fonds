// import Swiper from 'swiper';


// const swiper = new Swiper('.my-swiper', {
//   direction: 'vertical',
//   spaceBetween: 20,
//   slidesPerView: 'auto',

//   navigation: {
//     nextEl: '.swiper-button-down',
//     prevEl: '.swiper-button-top',
//   },

//   plugins: {
//     scrollContainer: true,
//   },
// });
 const hiddenItems = document.querySelectorAll('.fonds-item--hidden');
    const toggleButton = document.getElementById('toggleButton');
    
    // Функція, яка показує або ховає елементи списку в залежності від їх стану
    function toggleItems() {
      hiddenItems.forEach(item => {
        item.classList.toggle('fonds-item--hidden');
      });
      // Зміна тексту кнопки
      if (toggleButton.innerText === 'Показати ще') {
        toggleButton.innerText = 'Показати менше';
      } else {
        toggleButton.innerText = 'Показати ще';
      }
    }
    
    // Додаємо обробник кліку на кнопку
    toggleButton.addEventListener('click', toggleItems);