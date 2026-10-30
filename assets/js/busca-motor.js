(function (raiz, factory) {
  'use strict';
  var motor = factory();
  if (typeof module === 'object' && module.exports) module.exports = motor;
  else raiz.RobustaBusca = motor;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var stop = new Set(['a','as','o','os','de','da','das','do','dos','e','em','no','na','nos','nas','para','por','com','uma','um','como','qual','quais']);
  function normalizar(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .replace(/[×✕]/g, 'x').replace(/(\d)\s*x\s*(\d)/g, '$1x$2')
      .replace(/\bzirconia\b/g, 'zirconio').replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function pesquisar(documentos, termo) {
    var consulta = normalizar(String(termo || '').slice(0, 120));
    if (!consulta) return [];
    var palavras = consulta.split(/\s+/).filter(function (p) {return !stop.has(p);});
    if (!palavras.length) palavras = consulta.split(/\s+/);
    return documentos.map(function (doc) {
      var titulo=normalizar(doc.title), descricao=normalizar(doc.description), titulos=normalizar(doc.headings), texto=normalizar(doc.text);
      var tudo=[titulo,descricao,titulos,texto].join(' ');
      if (!palavras.every(function (p) {return tudo.includes(p);})) return null;
      var pontos=titulo.includes(consulta) ? 100 : 0;
      palavras.forEach(function (p) {pontos+=(titulo.includes(p)?40:0)+(descricao.includes(p)?12:0)+(titulos.includes(p)?15:0)+(texto.includes(p)?1:0);});
      return {doc:doc,score:pontos};
    }).filter(Boolean).sort(function (a,b) {return b.score-a.score || a.doc.title.localeCompare(b.doc.title,'pt-BR');});
  }
  return {normalizar:normalizar,pesquisar:pesquisar};
}));
