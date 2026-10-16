# Robusta Abrasivos — página de teste

Página estática em HTML, CSS e JavaScript. Não precisa instalar Node, compilar nem executar comandos para publicar.

## O que foi montado

- Cabeçalho com logo e navegação por seções.
- Banner em HTML com imagem do site atual, textos e botão.
- Apresentação dos abrasivos e três benefícios, com conteúdo enviado pelo Caio.
- Seis categorias de produtos.
- Blocos enviados de abrasivos sob medida, horários e canais de compra.
- Rodapé e acesso flutuante ao WhatsApp.
- Layout adaptável a celular e computador; navegação por teclado e redução de animações.

As páginas de categorias continuam apontando para o site atual, porque ainda não foram migradas. O menu desta página usa âncoras locais. Os horários seguem America/Sao_Paulo, de segunda a sexta, 08h–17h; feriados não são tratados.

O banner e o cabeçalho são uma reconstrução em HTML; não uma exportação do editor GoDaddy. As fontes de título usam Arial Narrow/Arial do dispositivo. O visual pode variar conforme as fontes disponíveis.

## Arquivos

- `index.html`: página completa na raiz.
- `abrasivos/index.html`: mesma página em `/abrasivos/`, pronta para testar a rota.
- `assets/css/style.css`: estilos de toda a página.
- `assets/js/main.js`: funcionamento dos horários e ano do rodapé.
- `assets/imagens/`: imagens locais.
- `assets/fontes-imagens.json`: origem das imagens e resultado da importação.
- `.nojekyll`: publicação direta dos arquivos estáticos.

Nesta primeira versão, as duas páginas HTML são cópias equivalentes com caminhos relativos ajustados. Ao editar o conteúdo, atualize ambas. Depois da migração, podemos definir qual será a página principal e eliminar essa duplicação.

## Criar o repositório pelo navegador

1. Acesse https://github.com/new com sua conta.
2. Em **Repository name**, escreva `robusta-site-teste`.
3. Escolha **Public** para usar GitHub Pages no plano gratuito. Todo arquivo enviado ficará público; envie apenas os arquivos deste projeto.
4. Clique em **Create repository**.
5. Extraia o ZIP recebido no computador.
6. No repositório, clique em **uploading an existing file** ou **Add file → Upload files**.
7. Arraste o CONTEÚDO da pasta extraída: `index.html`, pasta `assets`, pasta `abrasivos`, `README.md` e demais arquivos. Não envie apenas o ZIP nem uma pasta externa contendo tudo. O `index.html` deve aparecer na raiz do repositório.
8. Clique em **Commit changes**. Se o Windows ocultar `.nojekyll`, você pode criar esse arquivo vazio pelo botão **Add file → Create new file**.

## Publicar o teste no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
3. Em **Branch**, selecione `main` e `/(root)`.
4. Clique em **Save** e aguarde a publicação.
5. O endereço aparecerá nessa tela, normalmente `https://SEU-USUARIO.github.io/robusta-site-teste/`.
6. A página também estará em `https://SEU-USUARIO.github.io/robusta-site-teste/abrasivos/`.

Este pacote está pronto para o teste, mas não foi enviado ao GitHub nem publicado automaticamente.

## Conferência visual antes da migração

- Abra o endereço em computador e celular.
- Confira banner, logo, imagens, recortes e títulos.
- Clique no botão do banner, no menu e nos links do rodapé.
- Expanda os horários e confira o dia destacado.
- Confira os links de Mercado Livre, Shopee, TikTok e WhatsApp.
- Confira os seis links de categoria, que ainda levam ao site atual.

## Domínio e publicação definitiva

Nenhum DNS foi alterado e não há arquivo `CNAME` neste teste. Não cancele a GoDaddy durante a montagem.

As duas páginas têm `noindex,nofollow` para evitar que o teste seja indexado. Retire essa configuração apenas na publicação definitiva e configure endereço canônico, sitemap e redirecionamentos conforme o domínio escolhido.

GitHub Pages restringe sites voltados principalmente a facilitar transações comerciais. Este pacote permite avaliar a reconstrução; antes de substituir o site comercial, confirme uma hospedagem adequada. O código pode continuar no GitHub mesmo se a hospedagem definitiva for outra.

Referências oficiais:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Atualizar depois

Abra um arquivo no GitHub, clique no lápis, faça a alteração e clique em **Commit changes**. Para imagens, use **Add file → Upload files** dentro de `assets/imagens`. Uma nova publicação é iniciada após cada atualização da branch configurada.
