import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import MovieCatalog from "../MovieCatalog";


const chance = new Chance();
const handleAddToFavorite = jest.fn();

describe("When using MovieCatalog component",()=>{

      let movie;
      beforeEach(() => {
          movie = {
            _id: chance.guid(),
            name: chance.name(),
            synopsis: chance.string(),
            coverImage: chance.url(),
            genre: chance.string(),
            movieUrl: chance.url(),
            releaseDate: chance.string(),
          };
        });

      it("should display the movie name", () => {
        render(<MovieCatalog movie={movie} />);
        const name = screen.getByText(movie.name);
        expect(name).toBeVisible();
      });

      it("should display the movie genre label", () => {
        render(<MovieCatalog movie={movie} />);
        const genreLabel = screen.getByText("Genre:");
        expect(genreLabel).toBeVisible();
      });

      it("should display the movie genre", () => {
        render(<MovieCatalog movie={movie} />);
        const myGenre = screen.getByText(movie.genre);
        expect(myGenre).toBeVisible();
      });

      it("should display the movie Release date label and the date", () => {
        render(<MovieCatalog movie={movie} />);
        const releaseDateLabel = screen.getByText("Release date: "+ movie.releaseDate);
        expect(releaseDateLabel).toBeVisible();
      });

      it("should display the movie cover image", () => {
        render(<MovieCatalog movie={movie}/>);
        const image = screen.getByRole("img");
        expect(image).toBeVisible();
      });

      it("should display the add to my favorites button", () => {
        render(<MovieCatalog movie={movie} />);
        const addFavoriteButton = screen.getByRole("button", { name: "Add to my favorites" });
        expect(addFavoriteButton).toBeVisible();
      });

      it("should call onClick property when the add to my favorites button is clicked", async () => {
        const use = userEvent.setup();
        render(<MovieCatalog movie={movie} handleAddToFavorite={handleAddToFavorite} />);
        const addFavoriteButton = screen.getByRole("button", { name: "Add to my favorites" });
        await use.click(addFavoriteButton);
        expect(handleAddToFavorite).toHaveBeenCalledTimes(1)
      });

})