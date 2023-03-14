const { I } = inject();
const search_page = require('../pages/search_page');

Feature('Pesquisa de artigos');

Scenario('Pesquisar artigos com palavra-chave', ({ search_page }) => {
  const searchText = 'Migração';

  search_page.searchOpen();
  search_page.searchFor(searchText);
  search_page.clickSearch();
  
  I.see(searchText);
});

Scenario('Pesquisar artigos sem texto', ({ search_page }) => {
  
    search_page.searchOpen();
    search_page.clickSearch();

    I.see('Agibank amplia atuação nacional e deve inaugurar 20 novas lojas ainda neste ano');
  
});