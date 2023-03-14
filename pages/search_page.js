const { I } = inject();

module.exports = {
  fields: {
    searchOpen: '#search-open',
    searchInput: '[name="s"]',
    searchButton: '[type="submit"]',
  },

  searchFor(text) {
    I.fillField(this.fields.searchInput, text);
  },

  clickSearch() {
    I.click(this.fields.searchButton);
  },

  searchOpen() {
    I.amOnPage('/');
    I.waitForElement('#search-open', 5)
    I.click(this.fields.searchOpen);
  }
}
