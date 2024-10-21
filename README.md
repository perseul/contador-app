# Documentação da Criação do Componente e Testes
### Counter.js: Este componente exibe um contador que pode ser incrementado ou decrementado. O estado do contador é gerenciado pelo hook useState.

### Counter.test.js: Este arquivo contém os testes para o componente Counter. Utiliza a React Testing Library para renderizar o componente e simular interações do usuário.

# Explicação dos Testes
### Teste de Renderização Inicial:

### Propósito: Verificar se o contador é renderizado com o valor inicial correto.
Verifica: Se o texto do contador é '0'.
Teste de Incremento:

### Propósito: Confirmar que o botão de incremento aumenta o contador corretamente.
Verifica: Se o contador mostra '1' após um clique no botão "Incrementar".
Teste de Decremento:

### Propósito: Garantir que o botão de decremento diminui o contador corretamente.
Verifica: Se o contador mostra '-1' após um clique no botão "Decrementar".

# Execute npm start para visualizar o componente no navegador na porta 3000

# Execute npm test para vizualizar os testes do componente criado no console