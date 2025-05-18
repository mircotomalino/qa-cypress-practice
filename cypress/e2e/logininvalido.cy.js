describe('Login invalido', () => {
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

    
  });
