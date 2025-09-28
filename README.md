# MatechStore - E-commerce de Tecnologia

Uma aplicação de e-commerce completa desenvolvida com Next.js, TypeScript e Material-UI, apresentando produtos tecnológicos com funcionalidades de carrinho de compras e APIs backend simuladas.

## 🚀 Funcionalidades

### Página Inicial (Lista de Produtos)
- ✅ Exibição de todos os produtos disponíveis
- ✅ Cards de produtos com foto, nome, preço e descrição
- ✅ Navegação para página de detalhes do produto
- ✅ Design responsivo com layout em grid

### Página de Produto
- ✅ Exibição de foto, nome, preço e descrição do produto
- ✅ Botão "Adicionar ao carrinho" funcional
- ✅ Simulação visual de preço promocional (desconto)
- ✅ Seletor de quantidade
- ✅ Status de estoque
- ✅ Design responsivo e moderno

### Carrinho de Compras
- ✅ **Parallel Routes** - Carrinho implementado como rota paralela (@drawer)
- ✅ **Intercepting Routes** - Modal drawer intercepta rota /cart
- ✅ Carrinho flutuante (drawer) acessível de qualquer página
- ✅ Página dedicada de carrinho (/cart)
- ✅ Resumo completo: produtos, quantidades, preços
- ✅ Funcionalidade para remover itens
- ✅ Alteração de quantidades
- ✅ Cálculo automático do total
- ✅ Badge no ícone mostrando quantidade de itens
- ✅ Persistência de dados no localStorage

### Backend/API
- ✅ **GET /api/products** - Lista todos os produtos
- ✅ **GET /api/products/:id** - Retorna dados detalhados de um produto
- ✅ Validação de dados e tratamento de erros
- ✅ Responses padronizadas com TypeScript
- ✅ Fallback para dados mockados em caso de erro

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
│   ├── @drawer/                      # Parallel Route para o carrinho
│   │   ├── default.tsx               # Botão flutuante do carrinho
│   │   └── (.)cart/
│   │       └── page.tsx              # Intercepting Route - Modal drawer
│   ├── api/
│   │   └── products/
│   │       ├── route.ts              # GET /api/products - Lista produtos
│   │       └── [id]/route.ts         # GET /api/products/[id] - Produto específico
│   ├── cart/
│   │   └── page.tsx                  # Página dedicada do carrinho
│   ├── product/[id]/
│   │   ├── page.tsx                  # Página dinâmica de produto
│   │   └── not-found.tsx             # Página 404 personalizada
│   ├── layout.tsx                    # Layout principal com slots
│   └── page.tsx                      # Página inicial - Lista de produtos
├── components/
│   ├── contexts/
│   │   └── cart/                     # Context API do carrinho
│   │       ├── cartTypes.ts          # Tipos TypeScript
│   │       ├── cartContext.tsx       # Context definition
│   │       ├── cartProvider.tsx      # Provider component
│   │       ├── cartReducer.tsx       # Reducer para gerenciar estado
│   │       ├── useCart.tsx           # Hook personalizado
│   │       └── useCartStorage.tsx    # Hook para localStorage
│   ├── layout/
│   │   ├── FlexBox.tsx               # Componente de layout flexível
│   │   ├── Footer.tsx                # Rodapé da aplicação
│   │   ├── Header.tsx                # Cabeçalho da aplicação
│   │   └── ProductSelectorQuantity.tsx # Seletor de quantidade
│   ├── providers/
│   │   └── MuiThemeProvider.tsx      # Provedor de tema MUI
│   └── views/
│       ├── cart/
│       │   ├── CartContent.tsx       # Conteúdo principal do carrinho
│       │   ├── CartDrawer.tsx        # Drawer do carrinho
│       │   ├── CartEmpty.tsx         # Estado vazio do carrinho
│       │   ├── CartItem.tsx          # Item individual do carrinho
│       │   └── CartListContainer.tsx # Container da lista de itens
│       ├── product/
│       │   └── ProductPage.tsx       # Página de produto individual
│       └── products/
│           ├── ProductCard.tsx       # Card de produto na listagem
│           └── productsPage.tsx      # Página de listagem de produtos
└── utils/
    ├── math/
    │   ├── calculatePercentage.ts    # Cálculo de percentual de desconto
    │   ├── calculateTotal.ts         # Cálculo de total do carrinho
    │   └── formatPrice.ts            # Formatação de preços
    ├── mocks/
    │   └── products.ts               # Dados mockados dos produtos
    └── services/
        └── productService.ts         # Serviço para buscar produtos
```

## 🚦 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o projeto:**
   ```bash
   git clone https://github.com/mathec-x/next_15_e-commerce-overview.git
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
npm run dev      # Inicia servidor de desenvolvimento com Turbopack
npm run build    # Cria build de produção com Turbopack
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

### GET /api/products
Lista todos os produtos disponíveis.

**Exemplo de resposta:**
```json
[
  {
    "id": 1,
    "name": "iPhone 15 Pro Max",
    "price": 7999.99,
    "originalPrice": 8999.99,
    "description": "O iPhone 15 Pro Max oferece desempenho excepcional...",
    "image": "/images/iphone-15-pro-max.jpg",
    "category": "Smartphones",
    "inStock": true
  }
]
```

### GET /api/products/:id
Retorna detalhes de um produto específico.

**Exemplo de resposta:**
```json
{
  "id": 1,
  "name": "iPhone 15 Pro Max",
  "price": 7999.99,
  "originalPrice": 8999.99,
  "description": "O iPhone 15 Pro Max oferece desempenho excepcional...",
  "image": "/images/iphone-15-pro-max.jpg",
  "category": "Smartphones",
  "inStock": true
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
