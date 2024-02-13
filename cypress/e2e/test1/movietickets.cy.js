import tests from '../../fixtures/seats-param';

describe("movie tickets main and reservation screens", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru");
  });
  it("Should be enter the site", () => {
    cy.fixture("selectors").then((selector) => {
      cy.get(selector[1].title).should("have.text", "Идёмвкино");
    });
  });

  it("Should display 7 days", () => {
    cy.fixture("selectors").then((selector) => {
      cy.get(selector[6].allday).should("have.length", 7);
    });
  });

  it("Should be films", () => {
    cy.fixture("selectors").then((selector) => {
      cy.get(selector[7].today).click();
      cy.get(selector[8].film1).should("have.text", 'Зверополис');
      cy.get(selector[9].duration1).should("have.text", '108 мин. ');
      cy.get(selector[10].film2).should("have.text", 'Терминатор-заржавел');
      cy.get(selector[11].descrip2).should("have.text", 'Машины так и не научились делать wd-40');
    });
  });

  tests.forEach((test) => {
    it.only(test.name, () => {
      cy.get('.page-nav__day').eq(3).click();
      cy.get('main > :nth-child(3)').contains("14:00").click();

      test.data.forEach((seat) => {
        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat}`).click();

      });
      cy.get('.acceptin-button').click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    });
  });
});

