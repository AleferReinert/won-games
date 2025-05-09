# Won Games

E-commerce de jogos completo.

## Requisitos

##### Cabeçalho

- Logo
- Menu com links: Home, Explorar
- Busca
- Dropdown do carrinho
- Dropdown do usuário com links: Minha conta, Lista de desejos, Logout

##### Rodapé

- Logo
- Colunas de: contato, redes sociais, links internos, endereço
- Direitos autorais

##### Home

- Banner
- Seções de jogos: lançamentos, populares, em breve, gratuitos

##### Página do jogo

- Banner, nome, preço, descrição curta
- Botão para adicionar/remover da lista de desejos
- Botão para adicionar/remover do carrinho
- Galeria de imagens
- Descrição longa
- Categorias, plataformas, data de lançamento, desenvolvedor, editora, classificação etária
- Seções de jogos: em breve, recomendados

##### Explorar

- Listagem de jogos
- Filtros por: faixa de preço, plataforma, categorias
- Ordenar por preço mais baixo ou mais alto

##### Minha conta

- Navegação lateral com links: Meu perfil, Meus pedidos, Logout

##### Minha conta / Meu perfil

- Nome (pode ser alterado)
- E-mail (não pode ser alterado)
- Link para redefinição de senha

##### Minha conta / Meus pedidos

- Lista de jogos comprados exibindo: foto, nome, preço
- Número do cartão exibindo apenas os 4 últimos dígitos
- Bandeira do cartão
- Data da compra

##### Lista de desejos

- Listagem de jogos favoritados
- Seção de jogos recomendados

##### Login

- Formulário com: e-mail, senha
- Link para redefinir senha
- Link para criar conta

##### Cadastro

- Formulário com: nome completo, e-mail, senha, confirmação de senha
- Link para login

##### Carrinho

- Listagem dos jogos
- Botão para remover jogo do carrinho
- Valor total
- Pagamento com cartão de crédito/débito
- Link para página de explorar
- Botão para comprar agora
- Texto sobre informações de segurança e termos de uso
- Link para termos de uso
- Seção de jogos recomendados

## Layout

[Visualizar no Figma](https://www.figma.com/file/xwqB4b2hX8yPmp66vRuHLz/Won-Games---Em-Andamento!!?type=design&node-id=7-49&t=dzqMOk9JEmm2w6Mv-0)

## Começando

1. Clone o repositório:

   ```
   git clone https://github.com/aleferreinert/won-games.git
   ```

2. Instale as dependências:

   ```
   yarn install
   ```

3. Configure as variaveis de ambiente como em `.env.example` e `cypress/.env.example`.

## Scripts

Inicie o servidor de desenvolvimento:

```
yarn dev
```

Inicie o Storybook:

```
yarn storybook
```

Execute os testes unitários:

```bash
# Storybook precisa estar em execução
yarn test-storybook
```

Execute os testes e2e:

```bash
# No terminal
yarn cy:run

# Com interface gráfica
yarn cy:open
```

Criar componente, template ou página:

```
yarn plop
```

## Tecnologias Utilizadas

- **Chromatic:** Ferramenta para revisão visual e gestão de componentes do Storybook.
- **Cypress:** ferramenta de automação de testes end-to-end para aplicações web.
- **MSW:** Biblioteca de simulação de API para navegador e Node.js.
- **NextAuth:** Autenticação para Next.js.
- **NextJS:** Framework em React.
- **PlopJS:** Ferramenta para gerar arquivos personalizados.
- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **Strapi:** CMS headless para gerenciar conteúdo.
- **Storybook:** Ferramenta para desenvolver componentes de interface isoladamente.
- **Styled Components:** Biblioteca para escrever CSS com JavaScript.
- **Testing Library:** Conjunto de utilitários para testar componentes React.
- **TypeScript:** Superconjunto do JavaScript que adiciona tipagem estática opcional.

## URLs do Projeto

Explore o projeto no link: [wongames-store.vercel.app](https://wongames-store.vercel.app)

Storybook: [Visualizar no Chromatic](https://main--64ceaf6be6c94aa14b9fe174.chromatic.com)

## Crédito

Projeto desenvolvido durante o curso [React Avançado: Crie aplicações com NextJS, Strapi e mais](https://www.udemy.com/course/react-avancado).
