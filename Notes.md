Link do projeto na vercel:

<https://glpi-react-components.vercel.app/>
# Notas:

- ok - trocar todos os ícones pela biblioteca do phophor-icon;
- ok - transformar input de busca em component
- organizar a tabela pra que o header fique fixo; // in progress...
- ok - fixar a logo da ufal no header (procurar em commits anteriores);
- ok - no CardLabelInput é necessário criar uma propriedade que aceite um ícone para o input
- ok -  parcial - para resolver a questão da tabela da tela Dashboard não scrollar:
coloca uma tabela só com thead dentro de uma div e outra div só com tbody, depois faz a estilização diferente. (!!!Atenção!!! isso pode causar um problema de requisição no back-end). Outra alternativa é colocar os estilos apenas no thead e tbody para ver se ele se conversam e não fica alterando a estilização.
  - mantive o thead fixo, mas ele aumenta de tamanho quando a tela aumenta. (possível solução: definir uma largura maxima para esse elemento que vai respeitar a largura maxima da página para telas maiores)
- ok - estilizar o layout Desktop para telas a partir de 1024px. No momento só está funcionando a responsividade para telas a partir de 1440px.
- ok- parcial - no header do mobile os ícones de menu estão scrolando junto com a tela. tem que resolver isso. Talvez tenha que retirar a estilização fixed
  - se tirar a estilização fixed, retira também a responsividade dos ícones
- ok - na tela de login do mobile a tela está scrolando sem necessidade.
- ok - fazer a responsividade do menu lateral.
  - quando clica no menu pra ele diminuir, o thead da tabela continua fixo. Como resolver se o tamanho dele está fixo?
  - ok - os ícones ficam pequenos quando o menu está clicado
  - ok - falta centralizar melhor os ícones

- ok - criar um componente de Page que recebe como props o conteúdo da página
- ok - no header quando coloca muito texto o ícone de x diminui, não consegui entender porquê esse comportamento ocorre
- ok - no CardAddUser  na última aba o input está com os titulo descentralizados, estou arrumando seguindo o modelo de um outro código antigo que foi copiado.
  - ok - agora na última aba os labels dos inputs estão desalinhados;
-- ok - no mobile os ícones da tabela sumiram. tem que refazer.
-- ok -as paginas não ficam mais ocupando apenas uma determinada largura
- ok - o toggle menu está mudando de lugar quando aumenta o tamanho da tela

- fazer o toastfy e o spinner de carregamento

- fazer o accordionMenu: colocar o mesmo sistema de .map() e as props para que ele possa ser reaproveitado.

- consertar o thead da tabela: coloquei um position relative no pai e agora falta reestilizar para ele ficar no lugar 
- in progress - retirar o scroll da tabela
  - in progress - agora a tabela não está mais responsiva

- fazer o toggle Menu do mobile
  - fazer o scroll

- usar formik e yup para validar formulários

- criar um component para a data e exportar ele na table test.
- criar um component novo e fazer a tabela usando o modelo do dashgo.  

mobile: acordion menu > fechamento de tag p







# GetStaticProps()
    - pegar dados dinâmicos (das rotas)
    - é pra usar na pagina que em que vai exibir os dados
    - retorna um objeto com os dados que estamos esperando para poderem ser usados nessa página
    - renderiza antes do acesso do usuário Pre-rendering
    - 

- (SG) STATIC GENERATION: 
  * executa apenas 1x no buid (serve para páginas que não mudam frequentemente.) 
  * Obs: é possível estipular um tempo para que a página possa ser gerada novamente dentro de um espaço de tempo determinado.


- (SSR) SERVER SIDE RENDERING:
  * Executa a cada requisição.
  * O processo é feito no servidor;
  * 
  
  - (CSR) CLIENT SIDE RENDERING:
  - Executa a cada requisição.
  - O processo é feito no navegador (client);
  -
  


sonacu - avaliar desempenho do cádigo

