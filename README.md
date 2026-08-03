# Landing page da Lara IA

Site institucional da **Lara**, assistente de IA para pesquisa, criação de
imagens, programação e ações no Android — pesquisas, imagens, programação,
voz e ações do dia a dia em uma experiência premium, mobile-first.

## Conteúdo

- `index.html`: página principal.
- `assets/css/styles.css`: design premium e mobile-first.
- `assets/js/main.js`: menu, animações, vídeos e interações.
- `assets/images/`: logo, capturas otimizadas, posters e imagem social.
- `assets/videos/`: quatro demonstrações curtas em MP4.
- `site.webmanifest`: metadados para instalação/PWA.
- `robots.txt` e `sitemap.xml`: base de SEO.

## Configurar o link da Lara na Web

O arquivo `index.html` usa:

```html
<body data-lara-web-url="/">
```

Isso funciona quando o site e a Lara estão no mesmo domínio e a aplicação Web
é acessada pela raiz.

Para usar uma rota específica:

```html
<body data-lara-web-url="/app">
```

Para usar outro domínio:

```html
<body data-lara-web-url="https://seu-endereco-publico-da-lara">
```

Todos os botões marcados com `data-lara-link` são atualizados automaticamente.

## Publicação ao lado do Flask atual

O projeto atual já usa `templates/index.html` para o chat. Não substitua esse
arquivo diretamente sem alterar as rotas.

Alternativas seguras:

1. Hospedar esta landing page em domínio ou subdomínio separado.
2. Servir a página em `/sobre` ou `/lara`.
3. Mover o chat para `/app` e usar a landing page na raiz.

## SEO

O domínio de publicação (`alara.ia.br`, definido em `CNAME`) já está
configurado em `robots.txt`, `sitemap.xml`, no `canonical`, no `og:image`
e no JSON-LD. Se o domínio final mudar, atualize esses mesmos pontos.

## Vídeos

Os vídeos da seção "Demonstrações" são ilustrativos, produzidos a partir da
identidade visual e da interface fornecida. Não são gravações reais dos
aplicativos citados e não indicam parceria com Uber ou Spotify. A seção
"Capturas reais de conversas com a Lara" usa, por outro lado, prints reais
tirados diretamente do aparelho.

## Privacidade

A captura do menu lateral (`lara-menu.webp`) foi anonimizada. Nome, e-mail e
foto pessoal não foram incluídos nos arquivos públicos. O mesmo cuidado foi
aplicado ao prints reais adicionados em `real-uber-app.webp`, que foi
recortado para remover o endereço de partida exibido no app de transporte —
revise antes de publicar caso o print original mude.

## Performance e acessibilidade

- Sem bibliotecas JavaScript externas.
- Imagens em WebP.
- Vídeos com `preload="metadata"`.
- Apenas o vídeo ativo é reproduzido.
- Animações respeitam `prefers-reduced-motion`.
- Imagens fora da primeira tela usam `loading="lazy"`.
- Navegação por teclado e link para pular ao conteúdo.
- HTML semântico, metadados Open Graph e JSON-LD.

## Changelog desta revisão

- Corrigido o cálculo de altura de `.hero-visual` e `.interface-gallery`:
  os cartões de telefone/print rotacionados estouravam a caixa em quase
  toda a faixa de celulares comuns (375–480px) e também no desktop —
  causa raiz do efeito de "imagens grandes e fora de proporção".
- `demo-alarm.mp4` foi cortado: o clipe original tinha um balão de
  confirmação cujo texto vazava da borda arredondada (defeito já presente
  nos pixels do vídeo gerado, não no CSS). O vídeo agora termina antes
  desse trecho.
- Logo, favicon e ícones do PWA atualizados para a nova identidade visual.
- Nova seção com capturas reais do app, sem edição.
