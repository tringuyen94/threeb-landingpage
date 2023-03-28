const animation1 = bodymovin.loadAnimation({
   container: document.getElementById('animation1'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/animation_1.json'
});
const animation2 = bodymovin.loadAnimation({
   container: document.getElementById('animation2'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/animation_2.json'
});
const animation3 = bodymovin.loadAnimation({
   container: document.getElementById('animation3'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/animation_3.json'
});
const animation4 = bodymovin.loadAnimation({
   container: document.getElementById('animation4'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/animation_4.json'
});
const animation5 = bodymovin.loadAnimation({
   container: document.getElementById('animation5'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: '../assets/animations/animation_5.json'
});

const bottomNavigate = document.getElementsByClassName('footer-navigation_mobile')[0]
window.addEventListener('scroll', (e) => {
   if (window.scrollY > 4200) {
      bottomNavigate.style.position = 'relative'
   } else {
      bottomNavigate.style.position = 'fixed'
   }
})