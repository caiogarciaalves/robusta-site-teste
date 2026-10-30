(function () {
  'use strict';
  var form=document.getElementById('rb-busca-form');
  var origem=document.currentScript;
  if (!form || !origem || !window.RobustaBusca) return;
  var campo=document.getElementById('rb-busca-termo');
  var status=document.getElementById('rb-busca-status');
  var lista=document.getElementById('rb-busca-lista');
  var vazio=document.getElementById('rb-busca-vazio');
  var vazioTexto=document.getElementById('rb-busca-vazio-texto');
  var resultados=document.getElementById('rb-busca-resultados');
  var raiz=new URL('../../',origem.src);
  var indiceURL=new URL('assets/data/busca-index.json',raiz);
  var pendente;
  var sequencia=0;
  function carregar() {
    if (!pendente) pendente=fetch(indiceURL.href,{credentials:'same-origin'}).then(function(r){if(!r.ok)throw new Error('indice');return r.json();}).then(function(d){if(!Array.isArray(d.documents))throw new Error('formato');return d.documents;}).catch(function(e){pendente=null;throw e;});
    return pendente;
  }
  function trecho(doc,consulta) {
    var termo=window.RobustaBusca.normalizar(consulta).split(' ').find(function(p){return p.length>3;});
    var texto=doc.text || doc.description;
    var palavras=texto.split(/\s+/);
    var pos=termo ? palavras.findIndex(function(p){return window.RobustaBusca.normalizar(p).includes(termo);}) : -1;
    if (pos<25) return doc.description || texto.slice(0,220);
    var inicio=Math.max(0,pos-10);
    return (inicio?'… ':'')+palavras.slice(inicio,inicio+36).join(' ')+(palavras.length>inicio+36?'…':'');
  }
  function item(doc,consulta) {
    var li=document.createElement('li');li.className='rb-busca__item';
    var tipo=document.createElement('span');tipo.className='rb-busca__type';tipo.textContent=doc.type;
    var h=document.createElement('h3');var link=document.createElement('a');
    link.href=new URL(doc.path,raiz).href;link.textContent=doc.title;h.appendChild(link);
    var resumo=document.createElement('p');resumo.textContent=trecho(doc,consulta);
    var caminho=document.createElement('span');caminho.className='rb-busca__path';
    caminho.textContent='/'+doc.path;
    li.append(tipo,h,resumo,caminho);return li;
  }
  async function executar(valor,atualizarURL) {
    var atual=++sequencia;
    var consulta=String(valor || '').trim().slice(0,120);
    campo.value=consulta;
    var campoCabecalho=document.getElementById('rb-search-q');if(campoCabecalho)campoCabecalho.value=consulta;
    if(atualizarURL){var url=new URL(location.href);if(consulta)url.searchParams.set('q',consulta);else url.searchParams.delete('q');history.replaceState(null,'',url);}
    lista.replaceChildren();vazio.hidden=true;
    if(!consulta){status.textContent='Digite um produto, uma medida ou um assunto para pesquisar.';resultados.setAttribute('aria-busy','false');return;}
    status.textContent='Pesquisando…';resultados.setAttribute('aria-busy','true');
    try {
      var docs=await carregar();if(atual!==sequencia)return;
      var encontrados=window.RobustaBusca.pesquisar(docs,consulta);
      var fragmento=document.createDocumentFragment();
      encontrados.forEach(function(r){fragmento.appendChild(item(r.doc,consulta));});
      lista.appendChild(fragmento);
      status.textContent=encontrados.length+' '+(encontrados.length===1?'resultado encontrado':'resultados encontrados')+' para “'+consulta+'”.';
      if(!encontrados.length){vazioTexto.textContent='Não encontramos conteúdo para “'+consulta+'”. Tente outra palavra, confira a medida ou consulte o catálogo.';vazio.hidden=false;}
    } catch(e) {
      if(atual!==sequencia)return;
      status.textContent='Não foi possível carregar a busca agora.';
      vazioTexto.textContent='Confira sua conexão e tente pesquisar novamente. Você também pode acessar o catálogo ou falar com a Robusta.';vazio.hidden=false;
    } finally {if(atual===sequencia)resultados.setAttribute('aria-busy','false');}
  }
  form.addEventListener('submit',function(e){e.preventDefault();executar(campo.value,true);});
  executar(new URLSearchParams(location.search).get('q') || '',false);
}());
