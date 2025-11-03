# 💖 Divas do Momento ✨

## [Kami]'s Favorite Divas (v. 1.0)

Este projeto é um site moderno e totalmente responsivo construído em React/Vite para apresentar uma galeria das artistas favoritas do momento, utilizando técnicas de CSS avançado e interatividade com Hooks.

---

## 🌟 Funcionalidades e Destaques do Projeto

* **Estrutura Componentizada:** O site é dividido em componentes React limpos (`HeroHeader`, `Section-Card`, `Section-Spotify`, `Footer`) para facilitar a manutenção e escalabilidade.
* **Hero Header Avançada:** Possui um menu (`Navbar`) fixo no topo com alta precedência (`z-index`) e uma galeria de fotos dinâmica.
* **Galeria 3D (Dome Gallery):** Implementação de um efeito de visualização de imagens avançado, ancorando as fotos em uma esfera 3D (baseado em código de componentes de alto desempenho).
* **Cards Interativos (Flip Card):** A seção de Biografia utiliza cards que viram no clique, usando o `useState` para controlar a animação e o CSS 3D (`transform-style: preserve-3d`) para revelar a minibiografia.
* **Design Customizado:** Uso intensivo de CSS puro e Flexbox para garantir o design pixel-perfect e uma estética visual única.
* **Responsividade:** Layout totalmente adaptável para dispositivos móveis (`@media (max-width: 600px)`), garantindo que o conteúdo seja legível e bem organizado em qualquer tela.
* **Hooks Essenciais:** Prática com `useState` (para interatividade dos cards), `useEffect` (para o ciclo de vida) e `useCallback`/`useRef` (para componentes complexos).

---

## 🛠️ Stack Tecnológica

* **Framework:** React (Vite.js)
* **Linguagem:** JavaScript (ES6+) / JSX
* **Estilização:** CSS3 puro e Flexbox
* **Dependências Chave:**
    * `@use-gesture/react` (Para interatividade de toque/mouse no Domo).
    * `react-glitch-effect` (Para efeitos visuais animados).

---

## ⚙️ Configuração e Execução Local

Siga estas etapas para rodar o projeto no seu ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o `npm` (ou `yarn`) instalados.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [Link do seu Repositório]
    cd site
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento (Vite):**
    ```bash
    npm run dev
    ```
    O site será aberto em `http://localhost:5173` ou um endereço IP local (ex: `http://192.168.x.x:5173`).

---

## 📁 Estrutura de Arquivos

A organização dos componentes é a chave para a manutenção do site:
