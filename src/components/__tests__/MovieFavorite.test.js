import { render, screen } from "@testing-library/react";
/*Render nos permite renderizar nuestro component y Screen crea todos los queries necesarios para crear el cuerpo del documento*/
import userEvent from "@testing-library/user-event";

import Chance from "chance";
import MovieFavorite from "../MovieFavorite"; //componente a testear

//Creamos una instancia de Chance para utilizarlo
const chance = new Chance();

const handleLess = jest.fn();

describe("When using MovieFavorite component",()=>{

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
        render(<MovieFavorite movie={movie} />);
        const name = screen.getByText(movie.name);
        // screen.debug();
        expect(name).toBeVisible();
      });

      it("should display the movie genre label", () => {
        render(<MovieFavorite movie={movie} />);
        const genreLabel = screen.getByText("Genre:");
        expect(genreLabel).toBeVisible();
      });

      it("should display the movie genre", () => {
        render(<MovieFavorite movie={movie} />);
        const myGenre = screen.getByText(movie.genre);
        expect(myGenre).toBeVisible();
      });

      it("should display the movie Release date label and the date", () => {
        render(<MovieFavorite movie={movie} />);
        const releaseDateLabel = screen.getByText("Release date: "+ movie.releaseDate);
        expect(releaseDateLabel).toBeVisible();
      });

      it("should display the movie cover image", () => {
        render(<MovieFavorite movie={movie}/>);
        const image = screen.getByRole("img");
        expect(image).toBeVisible();
      });

      it("should display the remove button", () => {
        render(<MovieFavorite movie={movie} />);
        const removeButton = screen.getByRole("button", { name: "Remove" });
        expect(removeButton).toBeVisible();
      });

      it("should call onClick property when the remove button is clicked", async () => {
        const use = userEvent.setup();
        render(<MovieFavorite movie={movie} handleLess={handleLess} />);
        const removeButton = screen.getByRole("button", { name: "Remove" });
        await use.click(removeButton);
        expect(handleLess).toHaveBeenCalledTimes(1)
      });

})