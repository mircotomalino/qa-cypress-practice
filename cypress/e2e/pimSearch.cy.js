describe('Gestión de empleados - PIM', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Buscar un empleado existente', () => {
    // Ir a PIM


    cy.get('a.oxd-main-menu-item[href="/web/index.php/pim/viewPimModule"]').click()

    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.url().should('include', 'pim/addEmployee')
    
    cy.get('input[name="firstName"]').type('Toni')
    cy.get('input[name="lastName"]').type('Garcia')
    // cy.contains('a', 'PIM').click()

    // Limpiar Employee Id y asignar un nuevo valor
    cy.get('.oxd-switch-input.--label-right').click()
    cy.get('input.oxd-input').eq(1).type('Pérez')    // cy.get('input[placeholder="Type for hints..."]').type('Paul');

    // // Click en Search
    // cy.get('button[type="submit"]').contains('Search').click();

    // // Verificar resultados
    // cy.get('.oxd-table').should('contain', 'Paul');
  });
});
