const menuButton=document.querySelector('.rb-menu-toggle');const mainMenu=document.querySelector('.rb-menu');if(menuButton&&mainMenu){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mainMenu.classList.toggle('is-open',open)});document.addEventListener('keydown',event=>{if(event.key==='Escape'){mainMenu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');document.querySelectorAll('.rb-more[open]').forEach(el=>el.open=false)}});document.addEventListener('click',event=>{document.querySelectorAll('.rb-more[open]').forEach(el=>{if(!el.contains(event.target))el.open=false})})}

/* Busca do site: extensão do cabeçalho compartilhado. */
(function () {
  'use strict';
  var barra = document.querySelector('.rb-header .rb-nav-bar > .wrap');
  var origemScript = document.currentScript;
  if (!barra || !origemScript || barra.querySelector('.rb-search')) return;
  var raiz = new URL('../../', origemScript.src);
  if (!document.getElementById('rb-busca-estilos')) {
    var css = document.createElement('link');
    css.id = 'rb-busca-estilos';
    css.rel = 'stylesheet';
    css.href = new URL('assets/css/busca.css?v=1', raiz).href;
    document.head.appendChild(css);
  }
  var form = document.createElement('form');
  form.className = 'rb-search';
  form.setAttribute('role', 'search');
  form.setAttribute('aria-label', 'Pesquisa no site');
  form.action = new URL('busca/', raiz).href;
  form.method = 'get';
  var label = document.createElement('label');
  label.className = 'rb-search__label';
  label.htmlFor = 'rb-search-q';
  label.textContent = 'Pesquisar no site';
  var input = document.createElement('input');
  input.id = 'rb-search-q';
  input.name = 'q';
  input.type = 'search';
  input.placeholder = 'Pesquisar no site';
  input.maxLength = 120;
  input.required = true;
  input.autocomplete = 'off';
  if (location.pathname === new URL('busca/', raiz).pathname) {
    input.value = (new URLSearchParams(location.search).get('q') || '').slice(0, 120);
  }
  var button = document.createElement('button');
  button.type = 'submit';
  button.setAttribute('aria-label', 'Pesquisar no site');
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg>';
  form.append(label, input, button);
  form.addEventListener('submit', function (event) {
    input.value = input.value.trim();
    if (!input.value) {
      event.preventDefault();
      input.focus();
    }
  });
  barra.appendChild(form);
}());
