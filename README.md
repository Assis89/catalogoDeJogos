# 🎮 Frontend - Catálogo de Jogos Dark Edition

![Angular](https://img.shields.io/badge/angular-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white)

Interface moderna com tema dark fluorescente e carrossel de jogos sugeridos.

## ✨ Funcionalidades

### 🎯 Componentes Principais
- **📋 Lista de Jogos** - Tabela com CRUD completo
- **➕ Novo Jogo** - Formulário de cadastro
- **✏️ Editar Jogo** - Formulário de edição
- **🎪 Carrossel Sugeridos** - Slider com 5 jogos

### 🎨 Design System
- **🌑 Tema Dark** - Fundo gradiente escuro
- **⚡ Cores Fluorescentes** - Ciano, magenta, amarelo
- **💎 Glassmorphism** - Blur effects e transparências
- **🎭 Animações** - Hover effects e transições
- **📱 Responsivo** - Mobile-first design

### 🚀 Recursos Técnicos
- **Angular 18** com Standalone Components
- **TypeScript** para tipagem forte
- **Reactive Forms** com validação
- **HTTP Client** para comunicação com API
- **CSS Grid/Flexbox** para layouts

## 🛠️ Como executar

### Pré-requisitos
```bash
npm install -g @angular/cli
```

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
ng serve
```
🟢 **App disponível em:** `http://localhost:4200`

### Build de Produção
```bash
ng build --prod
```

## 📂 Estrutura de Componentes

```
src/app/
├── components/
│   ├── lista-jogos/              # Componente principal
│   │   ├── lista-jogos.component.ts
│   │   ├── lista-jogos.component.html
│   │   └── lista-jogos.component.css
│   ├── novo-jogo/                # Formulário cadastro
│   │   ├── novo-jogo.component.ts
│   │   ├── novo-jogo.component.html  
│   │   └── novo-jogo.component.css
│   ├── editar-jogo/              # Formulário edição
│   │   ├── editar-jogo.component.ts
│   │   ├── editar-jogo.component.html
│   │   └── editar-jogo.component.css
│   └── carrossel-sugeridos/      # Slider de jogos
│       ├── carrossel-sugeridos.component.ts
│       ├── carrossel-sugeridos.component.html
│       └── carrossel-sugeridos.component.css
├── services/
│   └── game.service.ts           # Service HTTP
├── app.routes.ts                 # Roteamento
├── app.config.ts                 # Configuração global
└── styles.css                    # Tema dark global
```

## 🎨 Design System Detalhado

### 🌑 Paleta de Cores
```css
/* Cores Primárias */
--primary-cyan: #00ffff      /* Ciano fluorescente */
--primary-magenta: #ff00ff   /* Magenta vibrante */
--primary-yellow: #ffff00    /* Amarelo neon */
--primary-red: #dc2626       /* Vermelho vibrante */
--primary-purple: #7c3aed    /* Roxo intenso */

/* Botão Novo Jogo */
--btn-add-gradient: linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)

/* Fundos */
--bg-gradient: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
--container-bg: rgba(26, 32, 44, 0.95)
--glass-bg: rgba(45, 55, 72, 0.8)
```

### 🎯 Botão "Novo Jogo" Centralizado
- **Posicionamento**: Centralizado com `display: flex` e `justify-content: center`
- **Gradiente**: Vermelho → Roxo (`#dc2626` → `#7c3aed`)
- **Hover Effect**: Inversão do gradiente + escala 1.08
- **Sombra**: Brilho vermelho/roxo fluorescente
- **Tipografia**: Font-weight 700, letter-spacing 1.5px, uppercase

## 🎪 Carrossel de Jogos

### Jogos Incluídos
1. **Cyberpunk 2077** (RPG, 2020) - ⭐ 8.5
2. **The Witcher 3** (RPG, 2015) - ⭐ 9.3  
3. **Valorant** (FPS, 2020) - ⭐ 8.7
4. **League of Legends** (MOBA, 2009) - ⭐ 8.9
5. **Elden Ring** (Souls-like, 2022) - ⭐ 9.5

## 🖼️ Sistema de Imagens

Coloque suas imagens em: `public/images/jogos/`
- **Formato**: JPG, PNG ou WebP
- **Dimensões**: 300x200px (proporção 3:2)

## 📱 Responsividade

- **Mobile**: Stack vertical, carrossel 1 card
- **Desktop**: Layout completo, carrossel 3 cards

---

> 🎨 **Interface moderna** construída com **Angular + CSS avançado**
