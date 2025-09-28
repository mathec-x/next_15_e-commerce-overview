# MatechStore - E-commerce de Tecnologia

Uma aplicação de e-commerce completa desenvolvida com Next.js, TypeScript e Material-UI, apresentando produtos tecnológicos com funcionalidades de carrinho de compras e APIs backend simuladas.

## 🚀 Funcionalidades

### Página de Produto
- ✅ Exibição de foto, nome, preço e descrição do produto
- ✅ Botão "Adicionar ao carrinho" funcional
- ✅ Simulação visual de preço promocional (desconto)
- ✅ Seletor de quantidade
- ✅ Status de estoque
- ✅ Design responsivo e moderno

### Carrinho de Compras
- ✅ Carrinho flutuante (drawer) acessível de qualquer página
- ✅ Resumo completo: produtos, quantidades, preços
- ✅ Funcionalidade para remover itens
- ✅ Alteração de quantidades
- ✅ Cálculo automático do total
- ✅ Badge no ícone mostrando quantidade de itens

### Backend/API
- ✅ **GET /api/products/:id** - Retorna dados detalhados de um produto
- ✅ Validação de dados e tratamento de erros
- ✅ Responses padronizadas com TypeScript

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Material-UI (MUI)** - Componentes e design system
- **React Context API** - Gerenciamento de estado do carrinho
- **Node.js** - Runtime para APIs backend
- **Emotion** - Styled components para MUI

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   ├── products/[id]/route.ts    # API de produtos
│   │   └── cart/
│   │       ├── add/route.ts          # API adicionar ao carrinho
│   │       └── route.ts              # API buscar carrinho
│   ├── product/[id]/
│   │   ├── page.tsx                  # Página dinâmica de produto
│   │   └── not-found.tsx             # Página 404 personalizada
│   ├── layout.tsx                    # Layout principal
│   └── page.tsx                      # Página inicial
├── components/
│   ├── cart/
│   │   └── CartDrawer.tsx            # Carrinho flutuante
│   ├── layout/
│   │   └── Header.tsx                # Cabeçalho da aplicação
│   ├── product/
│   │   └── ProductPage.tsx           # Componente da página de produto
│   └── providers/
│       └── MuiThemeProvider.tsx      # Provedor de tema MUI
├── contexts/
│   └── CartContext.tsx               # Context do carrinho
└── types/
    └── index.ts                      # Definições TypeScript
```

## 🚦 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone ou navegue até o diretório do projeto:**
   ```bash
   cd /home/engebras/Projects/lab/next_e-commerce
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linting do código
```

## 🎯 Como Usar a Aplicação

### Página Inicial
1. Acesse `http://localhost:3000`
2. Visualize os produtos em destaque
3. Clique em "Ver Produto" para acessar os detalhes

### Página de Produto
1. Navegue até um produto (ex: `http://localhost:3000/product/1`)
2. Ajuste a quantidade desejada
3. Clique em "Adicionar ao Carrinho"
4. Observe a confirmação e o badge do carrinho

### Carrinho de Compras
1. Clique no botão flutuante do carrinho (canto inferior direito)
2. Visualize os produtos adicionados
3. Altere quantidades com os botões +/-
4. Remova itens com o ícone de lixeira
5. Veja o total calculado automaticamente

## 🔧 APIs Backend

### GET /api/products/:id
Retorna detalhes de um produto específico.

**Exemplo de resposta:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "iPhone 15 Pro Max",
    "price": 7999.99,
    "originalPrice": 8999.99,
    "description": "O iPhone 15 Pro Max oferece desempenho excepcional...",
    "image": "/images/iphone-15-pro-max.jpg",
    "category": "Smartphones",
    "inStock": true
  }
}
```

## 🎨 Características de Design

- **Material Design 3** - Interface moderna e intuitiva
- **Responsivo** - Funciona perfeitamente em desktop e mobile
- **Tema customizado** - Cores e tipografia personalizadas
- **Animações suaves** - Micro-interações aprimoram a UX
- **Acessibilidade** - Componentes seguem padrões de acessibilidade

## 📝 Produtos Disponíveis

O projeto inclui 4 produtos de demonstração:
1. **iPhone 15 Pro Max** (com desconto)
2. **MacBook Air M3**
3. **AirPods Pro 2** (com desconto)
4. **iPad Pro 12.9"**

## 🚧 Melhorias Futuras

- [ ] Integração com banco de dados real
- [ ] Sistema de autenticação de usuários
- [ ] Processo de checkout completo
- [ ] Múltiplas formas de pagamento
- [ ] Sistema de avaliações de produtos
- [ ] Busca e filtros avançados
- [ ] Wishlist de produtos
- [ ] Dashboard administrativo

## 🤝 Contribuições

Este é um projeto de demonstração desenvolvido para fins educacionais. Sugestões e melhorias são sempre bem-vindas!

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
