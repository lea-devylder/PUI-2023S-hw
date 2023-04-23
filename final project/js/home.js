const container = document.querySelector('#big-rectangle');
const text = document.querySelector('.text');

// container.addEventListener('mouseenter', () => {
//     const duration = text.offsetWidth / 50;
//     gsap.to(text, { x: -(text.offsetWidth - container.offsetWidth), duration: duration, ease: 'linear' })
// });

// container.addEventListener('mouseleave', () => {
//     gsap.to(text, { x: 0, duration: 0.3, ease: 'power2.inOut' });
//   });


// $('#big-rectangle').each(function(){
// 	var dealName = $(this).children('.text');
  
//   if(dealName.width() >= $(this).width()) {
//   	dealName.addClass('scrollTextAni');
//   }
  
// })