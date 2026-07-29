<<<<<<< HEAD
# 🧠 Projeto Lara - Assistente de IA Multi-Agente

A **Lara** não é apenas um chatbot; é um ecossistema de inteligência artificial focado em **lógica de processos, otimização de fluxos e resiliência**. Construída em Python, sua arquitetura foi desenhada para resolver o problema crônico das alucinações de IA através de validação cruzada, execução segura de código e pesquisa web com filtragem semântica.

## ✨ Arquitetura e Diferenciais

### 🔍 Motor de Pesquisa Web Híbrido
- **Quality Gate Multilíngue:** Suporte otimizado para scripts complexos (CJK, Árabe, Cirílico), ajustando dinamicamente os pesos de relevância.
- **Fallback em Camadas:** Em caso de falha do provedor principal, o sistema trás os resultados por um Reranker Semântico e similaridade de Cosseno (Embeddings) antes de entregar ao LLM.

### ⚖️ Motores de Consenso (Fact-Checking Nativo)
- **Finanças e Criptomoedas:** Busca o valor exato em APIs financeiras e cruza simultaneamente com as últimas notícias da atuais. Um julgador integrado para explicar o motivo de quedas ou altas sem alucinar números.
- **Esportes:** Extrai dados estruturados paralelamente à leitura de notícias web. A IA é estritamente instruída a priorizar os dados da API para status e placar, usando a web apenas para contexto adicional.

### 💻 Code Sandbox Seguro
- **Isolamento:** A IA pode escrever, validar e executar scripts (Python, JS, Bash) em nuvem.
- **Injeção Dinâmica via AST:** O sistema lê a árvore sintática abstrata (AST) do código gerado, detecta as dependências (imports) reais do script e instala os pacotes em tempo de execução de forma segura.

### 🎨 Criação e Edição Multi-Modal
- **Geração de Imagens:** Integração com excelente gerador de imagens, ela cria imagens com máxima qualidade.
- **Edição Avançada (Inpainting):** Detecção inteligente de alvo usando `CLIPSeg` acionado sob demanda para modificar detalhes pontuais de imagens com precisão matemática.

### 🧠 Memória Persistente e RAG
- Indexação vetorial para armazenamento de conversas e sumarização de arquivos de código da base do usuário, garantindo contexto infinito.

### 📱 Integração IoT
- Conexão direta com **Aplicativos** para total automação de aplicativos de forma segura.

## 🛠️ Stack Tecnológico
- **Linguagem Principal:** Python 3.x
- **Infraestrutura:** [Modal](https://modal.com/)
- **Orquestração de IA:** Groq, SiliconFlow, DeepSeek
- **Banco de Dados / Cache:** Pinecone (Vector DB), Redis (Cache de consultas rápidas)
- **Segurança:** Bloqueio de rede nativo (SSRF Protection) e injeção de dependências em runtime, sistema de `FileLock` para I/O atômico.
=======
# Landing page da Lara IA

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

## SEO antes de publicar

Substitua `https://SEU-DOMINIO.com.br` em:

- `robots.txt`
- `sitemap.xml`

Também é recomendado trocar os caminhos de `og:image` e do JSON-LD por URLs
absolutas do domínio público.

## Vídeos

Os vídeos são demonstrações ilustrativas produzidas a partir da identidade
visual e da interface fornecida. Não são gravações reais dos aplicativos citados
e não indicam parceria com Uber ou Spotify.

## Privacidade

A captura do menu lateral foi anonimizada. Nome, e-mail e foto pessoal não
foram incluídos nos arquivos públicos.

## Performance e acessibilidade

- Sem bibliotecas JavaScript externas.
- Imagens em WebP.
- Vídeos com `preload="metadata"`.
- Apenas o vídeo ativo é reproduzido.
- Animações respeitam `prefers-reduced-motion`.
- Imagens fora da primeira tela usam `loading="lazy"`.
- Navegação por teclado e link para pular ao conteúdo.
- HTML semântico, metadados Open Graph e JSON-LD.
>>>>>>> de6f9a2 (Primeiro commit)
