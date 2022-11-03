# Notas:

- ok - trocar todos os ícones pela biblioteca do phophor-icon;
- ok - transformar input de busca em component
- organizar a tabela pra que o header fique fixo; // in progress...
- ok - fixar a logo da ufal no header (procurar em commits anteriores);
- ok - no CardLabelInput é necessário criar uma propriedade que aceite um ícone para o input

- parcial - para resolver a questão da tabela da tela Dashboard não scrollar:
coloca uma tabela só com thead dentro de uma div e outra div só com tbody, depois faz a estilização diferente. (!!!Atenção!!! isso pode causar um problema de requisição no back-end). Outra alternativa é colocar os estilos apenas no thead e tbody para ver se ele se conversam e não fica alterando a estilização.
  - mantive o thead fixo, mas ele aumenta de tamanho quando a tela aumenta. (possível solução: definir uma largura maxima para esse elemento que vai respeitar a largura maxima da página para telas maiores)

- parcial - no CardAddUser  na última aba o input está com os titulo descentralizados, estou arrumando seguindo o modelo de um outro código antigo que foi copiado.
  - agora na última aba os labels dos inputs estão desalinhados;

- parcial - no header do mobile os ícones de menu estão scrolando junto com a tela. tem que resolver isso. Talvez tenha que retirar a estilização fixed
  - se tirar a estilização fixed, retira também a responsividade dos ícones

- no header quando colocar muito texto o ícone de x diminui, não consegui entender porquê esse comportamento ocorre

- estilizar o layout Desktop para telas a partir de 1024px. No momento só está funcionando a responsividade para telas a partir de 1500px.

- na tela de login do mobile a tela está scrolando sem necessidade.