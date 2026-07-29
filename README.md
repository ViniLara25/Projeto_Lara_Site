# 🧠 Projeto Lara - Assistente de IA Multi-Agente

A **Lara** não é apenas um chatbot; é um ecossistema de inteligência artificial focado em **lógica de processos, otimização de fluxos e resiliência**. Construída em Python, sua arquitetura foi desenhada para resolver o problema crônico das alucinações de IA através de validação cruzada, execução segura de código e pesquisa web com filtragem semântica.

## ✨ Arquitetura e Diferenciais

### 🔍 Motor de Pesquisa Web Híbrido
- **Quality Gate Multilíngue:** Suporte otimizado para scripts complexos (CJK, Árabe, Cirílico), ajustando dinamicamente os pesos de relevância.
- **Fallback em Camadas:** Em caso de falha do provedor principal, o sistema aciona o DuckDuckGo passando os resultados por um Reranker Semântico e similaridade de Cosseno (Embeddings) antes de entregar ao LLM.

### ⚖️ Motores de Consenso (Fact-Checking Nativo)
- **Finanças e Criptomoedas:** Busca o valor exato em APIs financeiras (YFinance, CoinGecko, Binance) e cruza simultaneamente com as últimas notícias da Web. Um Roteador IA (Groq) julga os dados para explicar o motivo de quedas ou altas sem alucinar números.
- **Esportes:** Extrai dados estruturados (API-Football) paralelamente à leitura de notícias web. A IA é estritamente instruída a priorizar os dados da API para status e placar, usando a web apenas para contexto adicional.

### 💻 Code Sandbox Seguro
- **Isolamento em Nuvem (Modal):** A IA pode escrever, validar e executar scripts (Python, JS, Bash) em contêineres efêmeros na nuvem.
- **Injeção Dinâmica via AST:** O sistema lê a árvore sintática abstrata (AST) do código gerado, detecta as dependências (imports) reais do script e instala os pacotes em tempo de execução de forma segura.

### 🎨 Criação e Edição Multi-Modal
- **Geração de Imagens (Flux) e Vídeos (Kling/Wan-AI):** Integração com APIs externas protegidas contra timeout através de injeção de pings de status.
- **Edição Avançada (Inpainting):** Detecção inteligente de alvo usando `CLIPSeg` acionado sob demanda para modificar detalhes pontuais de imagens com precisão matemática.

### 🧠 Memória Persistente e RAG
- Indexação vetorial para armazenamento de conversas e sumarização de arquivos de código da base do usuário, garantindo contexto infinito.

### 🏠 Integração IoT
- Conexão direta com **Home Assistant** para automação residencial segura via comandos de API.

## 🛠️ Stack Tecnológico
- **Linguagem Principal:** Python 3.x
- **Infraestrutura e Sandbox:** [Modal](https://modal.com/)
- **Orquestração de IA:** Groq, SiliconFlow, DeepSeek
- **Banco de Dados / Cache:** Pinecone (Vector DB), Redis (Cache de consultas rápidas)
- **Segurança:** Bloqueio de rede nativo (SSRF Protection) e injeção de dependências em runtime, sistema de `FileLock` para I/O atômico.
