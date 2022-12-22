describe("when adding a movie to favorites and see it on favorite page", () => {

    it("should add a movie to favorite page clicking add button", () => {
        cy.visit("/");
        cy.contains("Add to my favorites").click();

        cy.fixture("movies").then((movies) => {
            const movie = movies[0];

            cy.contains(movie.name);
            cy.contains(movie.genre);
            cy.contains(movie.releaseDate);
            cy.get("img").should("have.attr", "alt", "cover image of the movie");
            cy.get("img").should("have.attr", "src", movie.coverImage);
          });

      });

    it("Visit favorite page and see movie information in a modal and see it", () => {
        cy.addFavoriteMovie();

        cy.fixture("movies").then((movies) => {
            const movie = movies[0];

            cy.contains(movie.name);
            cy.contains(movie.genre);
            cy.contains(movie.releaseDate);
            cy.get("img").should("have.attr", "src", movie.coverImage);
            cy.get("img").click();
            cy.contains("Movie Information");
            cy.contains("Watch movie").click();
          });

    })

});