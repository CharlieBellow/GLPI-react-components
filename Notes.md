# Notas:

- ok - trocar todos os ícones pela biblioteca do phophor-icon;
- ok - transformar input de busca em component
- organizar a tabela pra que o header fique fixo; // in progress...
- ok - fixar a logo da ufal no header (procurar em commits anteriores);
- ok no CardLabelInput é necessário criar uma propriedade que aceite um ícone para o input

- para resolver a questão da tabela da tela Dashboard não scrollar:
coloca uma tabela só com thead dentro de uma div e outra div só com tbody, depois faz a estilização diferente. (!!!Atenção!!! isso pode causar um problema de requisição no back-end). Outra alternativa é colocar os estilos apenas no thead e tbody para ver se ele se conversam e não fica alterando a estilização

- no header quando colocar muito texto o ícone de x diminui, não consegui entender porquê esse comportamento ocorre

- estilizar o layout Desktop para telas a partir de 1024px. No momento só está funcionando a responsividade para telas a partir de 1500px.

- no header do desktop os ícones de menu estão scrolando junto com a tela. tem que resolver isso. Talvez tenha que retirar a estilização fixed

- no CardAddUser  na última aba o input está com os titulo descentralizados, estou arrumando seguindo o modelo de um outro código antigo que foi copiado.