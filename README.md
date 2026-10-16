# Robusta Abrasivos — teste v2

Página principal e seis páginas de categorias, em HTML/CSS/JavaScript sem compilação.

## Atualizar o GitHub existente

1. Extraia o ZIP.
2. Abra o repositório `robusta-site-teste`, na aba Code (raiz).
3. Clique Add file → Upload files.
4. Arraste TODO O CONTEÚDO extraído, incluindo `index.html`, `assets`, `abrasivos` e as seis novas pastas. Não envie o ZIP nem uma pasta externa envolvendo os arquivos.
5. Clique Commit changes. Os arquivos de mesmo caminho serão atualizados.
6. Acompanhe a publicação em Actions e depois atualize o site com Ctrl + Shift + R.

As configurações Pages existentes (main e root) permanecem adequadas. Não altere o domínio.

## URLs

Base: https://caiogarciaalves.github.io/robusta-site-teste/

- cintas-de-lixa/
- rodas-pg/
- rolos/
- discos-flap/
- disco-rokit/
- fitas-mylar/

Os seis cards da página principal e de /abrasivos/ usam links relativos internos, compatíveis com o subdiretório do GitHub Pages. As páginas de categorias incluem navegação de retorno, cabeçalho, rodapé, links entre categorias e o bloco de canais de compra.

## Conteúdo e limites

Conteúdo das categorias preservado dos seis arquivos fornecidos. Discos Flap permanece com a mensagem Página em construção presente no original. As tabelas e informações comerciais não foram revisadas tecnicamente. O arquivo nossos abrasivos.txt foi usado para conferir a correspondência das seis categorias; os cards preservam o visual aprovado, com fundo #BABABA.

CSS das categorias usa nomes de classe próprios para não conflitar com cards e banner da página principal. Imagens de produtos foram copiadas para assets/imagens. Fontes externas restantes, se houver, estão indicadas nos arquivos originais; links para WhatsApp e marketplaces continuam externos.

Verificados caminhos locais, âncoras, imagens e sintaxe JavaScript. Conferência visual no navegador ainda necessária após publicação.

Este é um ambiente de teste: noindex,nofollow está presente. Não há CNAME ou alteração de DNS. Para produção, revisar a restrição de uso comercial do GitHub Pages e definir hospedagem adequada. O código pode permanecer no GitHub.

## Arquivos

- index.html: principal.
- abrasivos/index.html: principal na rota abrasivos.
- <categoria>/index.html: conteúdo de cada categoria.
- assets/css/style.css: visual compartilhado e cards com fundo cinza.
- assets/css/<categoria>.css: estilos exclusivos de cada página.
- assets/js/main.js: horários e ano do rodapé.
- assets/imagens/: imagens locais.

Para alterar o conteúdo da principal, atualizar index.html e abrasivos/index.html. Para alterar uma categoria, editar seu index.html e, quando necessário, seu CSS específico.

## Atualização v3 — Automações

Nova página: https://caiogarciaalves.github.io/robusta-site-teste/automacoes/

Conteúdo preservado do HTML enviado: serviços, história, contato, redes sociais e horários. Cabeçalho e rodapé compartilhados adicionados, com link Automações em todas as páginas. O formulário abre o WhatsApp com a mensagem preenchida; o visitante precisa confirmar o envio no WhatsApp. Não há envio de email nem banco de dados. Imagens copiadas para o projeto.

Para atualizar, extraia o ZIP v3 e envie todo o conteúdo na raiz do mesmo repositório, substituindo os arquivos existentes. Mantenha a configuração do Pages e o domínio como estão.

## Atualização v4 — Marcas

Nova rota: /marcas/. Conteúdo preservado do HTML enviado, incluindo banner, carrossel de logos e seções Rockwell Automation, Mitsubishi Electric e Altus. Cabeçalho e rodapé compartilhados e link Marcas adicionados em todas as páginas. Imagens locais e CSS isolado para esta página. Carrossel preserva controles, pausa ao foco/mouse e respeita preferência de movimento reduzido. Relações comerciais e informações de produtos são as fornecidas no HTML, sem verificação externa.

Atualizar enviando todo o conteúdo extraído do ZIP v4 na raiz do mesmo repositório. Conferência visual e interação do carrossel no navegador pendentes após publicação.

## Atualização v5 — Blog e artigos

Rotas: /blog/, /915x100/ e /686x50/. Cards do Blog apontam para os artigos locais; Todas as postagens retorna a /blog/. Link Blog inserido no menu e rodapé de todas as páginas. Conteúdo e datas dos artigos preservados conforme arquivos enviados. Informações técnicas e comerciais não passaram por revisão externa. CSS exclusivo de cada artigo para preservar seus layouts e evitar conflitos. Imagens locais.

Envie o conteúdo extraído do ZIP v5 na raiz do repositório existente. A configuração do Pages e o domínio permanecem iguais. Conferência visual no navegador pendente após publicação.
