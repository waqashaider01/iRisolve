window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var bag_img = document.querySelector('.category_img_banner');
  bag_img.style.backgroundSize = 100 + scrollPosition/12 + '%';
});