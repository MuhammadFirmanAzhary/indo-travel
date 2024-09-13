  // menu-btn-mobile
  const menuBtn = document.querySelector('.menu-icon');
  const navlinks = document.querySelector('.nav-links');
  menuBtn.addEventListener('click', () => {
      navlinks.classList.toggle('mobile-menu');
  })
  // scroll riview
  const animatedItems = document.querySelectorAll('.scroll-animate');

const scrollHandler = () => {
animatedItems.forEach(item => {
const rect = item.getBoundingClientRect();
if (rect.top < window.innerHeight && rect.bottom > 0) {
item.classList.add('show');
}
});
};

window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler);
