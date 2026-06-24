# 🖥️ DevBlog — Blog de Tecnologia e Programação

Blog desenvolvido como projeto acadêmico da disciplina de **Programação Web**, focado em conteúdos sobre desenvolvimento, segurança, DevOps e ferramentas para desenvolvedores.

🔗 **Site publicado (Vercel):** [https://devblog-rs.vercel.app](https://devblog-rs.vercel.app)  
🔗 **Site publicado (FTP):** [http://grupo5.neurosky.com.br/grupo5/](http://grupo5.neurosky.com.br/grupo5/)

---

## 📋 Sobre o Projeto

O DevBlog é um site estático com tema dark (inspirado no GitHub), construído com HTML5, CSS3 e JavaScript. O projeto conta com:

- **11 páginas** — Home, artigos completos, categorias, ferramentas, sobre, contato e documentação
- **Design responsivo** — Funciona em desktop, tablet e mobile
- **Tema GitHub Dark + Modo Claro** — Toggle de tema com persistência via localStorage
- **Semântica HTML5** — Tags como `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **JavaScript externo** — Toda interatividade em `js/main.js`, sem JS inline

---

## ⚡ Funcionalidades JavaScript (Entrega 2 — GB)

### JavaScript Nativo
- **Menu hambúrguer via addEventListener** — Substituição do `onclick` inline por listener em arquivo externo
- **Modo claro/escuro** — Toggle de tema com persistência via `localStorage`
- **Validação de formulário com feedback visual** — Erros em vermelho por campo + envio real via EmailJS
- **Filtro de artigos por categoria** — Botões (Web / Mobile / IA / Segurança / Todos) na página de categorias

### Biblioteca JavaScript
- **AOS (Animate on Scroll) 2.3.4** — Animações de entrada nos cards ao rolar a página (fade-up)
- **Leaflet.js 1.9.4** — Mapa interativo na página de contato com card flip de localização

---

## 🗂️ Estrutura do Projeto

```
devblog-rs/
├── index.html              # Página inicial com artigos em destaque
├── artigo.html             # Artigo sobre HTML5/CSS3
├── artigo-docker.html      # Artigo sobre Docker
├── artigo-python.html      # Artigo sobre Python para dados
├── artigo-ia.html          # Artigo sobre Inteligência Artificial
├── artigo-mobile.html      # Artigo sobre desenvolvimento mobile
├── artigo-seguranca.html   # Artigo sobre OWASP Top 10
├── categorias.html         # Listagem com filtro por categoria
├── ferramentas.html        # Ferramentas recomendadas
├── sobre.html              # Sobre a equipe (cards com AOS)
├── contato.html            # Formulário + newsletter + mapa Leaflet
├── js/
│   └── main.js             # JavaScript externo (todas as funcionalidades)
├── css/
│   └── style.css           # Estilos do site (dark + light mode)
├── docs/
│   ├── relatorio-ga.html   # Relatório de entrega (GA)
│   ├── relatorio-gb.html   # Relatório de entrega (GB)
│   └── sitemap.html        # Mapa do site visual
└── img/                    # Imagens do projeto
```

---

## 🚀 Como Clonar o Projeto

```bash
# Clone o repositório
git clone https://github.com/patrick-git-bite/devblog-rs.git

# Entre na pasta
cd devblog-rs
```

Abra o `index.html` no navegador para visualizar o site localmente.

---

## 🤝 Como Contribuir

### 1. Clone o repositório

```bash
git clone https://github.com/patrick-git-bite/devblog-rs.git
cd devblog-rs
```

### 2. Crie uma branch para suas alterações

```bash
git checkout -b feature/sua-alteracao
```

> **Padrão de nomes de branch:**
> - `feature/nome-descritivo` — para novas funcionalidades ou conteúdo
> - `fix/nome-descritivo` — para correções

### 3. Faça suas alterações e commit

```bash
git add .
git commit -m "feat: descrição clara do que foi feito"
```

> **Padrão de commits:**
> - `feat:` — nova funcionalidade ou conteúdo
> - `fix:` — correção de bug ou erro
> - `docs:` — alteração em documentação
> - `chore:` — tarefas de manutenção

### 4. Envie para o GitHub

```bash
git push origin feature/sua-alteracao
```

### 5. Abra uma Pull Request

1. Acesse [https://github.com/patrick-git-bite/devblog-rs](https://github.com/patrick-git-bite/devblog-rs)
2. Clique no banner **"Compare & pull request"** que aparece após o push
3. Escreva um título descritivo e explique o que foi feito
4. Clique em **"Create pull request"**
5. Aguarde a revisão e aprovação do merge

---

## 👥 Equipe

| Nome | Função | GitHub |
|------|--------|--------|
| Patrick Brando | Desenvolvedor / Líder | [@patrick-git-bite](https://github.com/patrick-git-bite) |
| Rafael Lima | Analista de TI | [@rafaelesnik](https://github.com/rafaelesnik) |
| Pedro Pereira | Engenharia da Computação | [@rthanatos](https://github.com/rthanatos) |

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- [AOS 2.3.4](https://michalsnik.github.io/aos/) — Animações ao scroll
- [Leaflet.js 1.9.4](https://leafletjs.com/) — Mapa interativo
- [EmailJS](https://www.emailjs.com/) — Envio de formulários sem backend
- Git & GitHub
- Vercel (deploy automático)
- FileZilla (deploy via FTP)

---

## 📄 Licença

Projeto acadêmico — Programação Web 2026.
