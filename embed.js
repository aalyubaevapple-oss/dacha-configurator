/*
 * Виджет конфигуратора для сайта производителя.
 * Вставка на страницу:
 *   <script src="https://АДРЕС-КОНФИГУРАТОРА/embed.js" data-m="demo" data-height="760"></script>
 * data-m — id производителя (папка в config/), data-height — высота блока.
 */
(function () {
  var s = document.currentScript;
  if (!s) return;
  var base = s.src.replace(/embed\.js(\?.*)?$/, '');
  var m = (s.getAttribute('data-m') || 'demo').replace(/[^a-z0-9-]/gi, '');
  var h = parseInt(s.getAttribute('data-height'), 10) || 760;
  var f = document.createElement('iframe');
  f.src = base + '?m=' + encodeURIComponent(m) + '&embed=1';
  f.title = 'Конфигуратор дома';
  f.loading = 'lazy';
  f.allow = 'clipboard-write; web-share; fullscreen';
  f.style.cssText = 'display:block;width:100%;height:' + h + 'px;max-height:92vh;border:0;border-radius:14px;box-shadow:0 2px 16px rgba(0,0,0,.08)';
  s.parentNode.insertBefore(f, s);
})();
