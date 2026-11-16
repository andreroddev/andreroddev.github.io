// Language: saved choice, otherwise the browser language.
(function () {
  var root = document.documentElement, saved = null;
  try { saved = localStorage.getItem('site_lang'); } catch (e) {}
  var nav = (navigator.language || 'en').toLowerCase();
  var lang = saved === 'pt' || saved === 'en' ? saved : nav.indexOf('pt') === 0 ? 'pt' : 'en';
  function apply(l) {
    root.setAttribute('data-lang', l); root.setAttribute('lang', l === 'pt' ? 'pt' : 'en');
    var t = document.querySelectorAll('[data-title-' + l + ']'); if (t.length) document.title = t[0].getAttribute('data-title-' + l);
    var b = document.getElementById('langbtn'); if (b) b.textContent = l === 'pt' ? 'English' : 'Português';
  }
  apply(lang);
  document.addEventListener('DOMContentLoaded', function () {
    apply(lang);
    var b = document.getElementById('langbtn');
    if (b) b.addEventListener('click', function () { lang = lang === 'pt' ? 'en' : 'pt'; try { localStorage.setItem('site_lang', lang); } catch (e) {} apply(lang); });
  });
})();
