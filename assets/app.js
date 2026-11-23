// Mostra a barra fixa (nav2) só depois que o botão do hero sai da tela.
(function () {
  var bar = document.querySelector('[data-sticky]');
  var heroBtn = document.querySelector('.hero .btn');
  var finalCta = document.querySelector('.quote');
  if (!bar || !heroBtn || !('IntersectionObserver' in window)) return;
  var heroVisible = true, finalVisible = false;
  function update() { bar.classList.toggle('is-on', !heroVisible && !finalVisible); }
  new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }).observe(heroBtn);
  if (finalCta) new IntersectionObserver(function (e) { finalVisible = e[0].isIntersecting; update(); }).observe(finalCta);
})();
