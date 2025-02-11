# Réplica do Spotify (Versão Desktop)

## Visão Geral
Este projeto é uma réplica da interface do Spotify, desenvolvida utilizando **HTML, CSS e JavaScript**. A implementação inicial foca apenas no front-end para desktop, sem integração com APIs. Futuramente, será adicionada uma API e um framework para aprimorar a experiência do usuário.

---

## Estrutura de Diretórios

```
/
|-- index.html
|-- src/
|   |-- assets/
|   |   |-- icons/    # Ícones utilizados na interface
|   |   |-- playlist/ # Imagens e elementos visuais das playlists
|   |-- css/
|   |   |-- base/
|   |   |   |-- _reset.css    # Reset CSS para normalizar estilos
|   |   |   |-- _variables.css # Variáveis globais para cores, fontes, espaçamentos
|   |   |-- layout/
|   |   |   |-- _aside.css  # Estilização da barra lateral
|   |   |   |-- _footer.css # Estilização do rodapé
|   |   |   |-- _header.css # Estilização do cabeçalho
|   |   |-- main.css # Importa e gerencia todos os arquivos CSS
|   |-- js/
|   |   |-- api.js    # Lida com futuras requisições de API
|   |   |-- events.js # Manipulação de eventos de animações
```

---

## Descrição dos Arquivos Principais

### **index.html**
Este é o arquivo principal do projeto. Contém a estrutura básica da interface, incluindo sidebar, player, header e conteúdo principal.

### **CSS**

- **base/_reset.css**: Define um reset global para normalizar estilos entre navegadores.
- **base/_variables.css**: Contém variáveis globais para facilitar a customização.
- **layout/_aside.css**: Estilos específicos para a barra lateral.
- **layout/_footer.css**: Estilos do rodapé.
- **layout/_header.css**: Estilos do cabeçalho.
- **main.css**: Importa todos os arquivos CSS e define estilos globais.

### **JavaScript**

- **api.js**: Arquivo destinado às futuras requisições de API para buscar músicas e playlists.
- **events.js**: Manipula eventos de clique, scroll e interações do usuário.

---

## Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/oTiagoPereira/spotify-replica.git
   ```
2. Navegue até a pasta do projeto:
   ```sh
   cd spotify-replica
   ```
3. Abra o arquivo `index.html` no navegador ou utilize um servidor local como o Live Server do VS Code.

---

## Melhorias Futuras
- Adicionar responsividade para versão mobile.
- Implementar uma API para buscar dados reais.
- Migrar para um framework como React.js para melhorar a escalabilidade.
