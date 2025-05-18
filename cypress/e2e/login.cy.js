describe('Login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login inválido usando datos del fixture', () => {
    cy.fixture('loginData').then((data) => {
      cy.get('input[name="username"]').clear().type(data.invalid.username);
      cy.get('input[name="password"]').clear().type(data.invalid.password);
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid credentials').should('be.visible');
    });
  });

  it('Login válido y validación post-login', () => {
    cy.fixture('loginData').then((data) => {
      cy.get('input[name="username"]').clear().type(data.valid.username);
      cy.get('input[name="password"]').clear().type(data.valid.password);
      cy.get('button[type="submit"]').click();

      // Validar URL
      cy.url().should('include', '/dashboard');

      // Validar menú lateral y otros elementos visibles
      cy.get('.oxd-navbar-nav').should('be.visible');
      cy.get('.oxd-userdropdown-tab').should('be.visible');
      cy.get('.oxd-text.oxd-text--p').should('be.visible');
    });
  });
});