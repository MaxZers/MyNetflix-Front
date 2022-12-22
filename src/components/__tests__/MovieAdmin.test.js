import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import MovieAdmin from "../MovieAdmin";

//Creamos una instancia de Chance para utilizarlo
const chance = new Chance();

const handleOnEdit = jest.fn();
const handleOnDelete = jest.fn();

describe("When using MovieAdmin component",()=>{

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
        render(<MovieAdmin movie={movie} />);
        const name = screen.getByText(movie.name);
        expect(name).toBeVisible();
      });

      it("should display the movie's synopsis", () => {
        render(<MovieAdmin movie={movie} />);
        const name = screen.getByText(movie.synopsis);
        expect(name).toBeVisible();
      });

      it("should display the movie genre label", () => {
        render(<MovieAdmin movie={movie} />);
        const genreLabel = screen.getByText("Genre:");
        expect(genreLabel).toBeVisible();
      });

      it("should display the movie genre", () => {
        render(<MovieAdmin movie={movie} />);
        const myGenre = screen.getByText(movie.genre);
        expect(myGenre).toBeVisible();
      });

      it("should display the movie Release date label and the date", () => {
        render(<MovieAdmin movie={movie} />);
        const releaseDateLabel = screen.getByText("Release date: "+ movie.releaseDate);
        expect(releaseDateLabel).toBeVisible();
      });

      it("should display the a tag to navigat to movie url", () => {
        render(<MovieAdmin movie={movie} />);
        const myUrl = screen.getByRole("link");
        expect(myUrl).toBeVisible();
      });

      it("should display the movie cover image", () => {
        render(<MovieAdmin movie={movie}/>);
        const image = screen.getByRole("img");
        expect(image).toBeVisible();
      });

      it("should display the Edit button", () => {
        render(<MovieAdmin movie={movie} />);
        const editButton = screen.getByRole("button", { name: "EDIT" });
        expect(editButton).toBeVisible();
      });

      it("should call onClick property when the Edit button is clicked", async () => {
        const use = userEvent.setup();
        render(<MovieAdmin movie={movie} handleOnEdit={handleOnEdit} />);
        const editButton = screen.getByRole("button", { name: "EDIT" });
        await use.click(editButton);
        expect(handleOnEdit).toHaveBeenCalledTimes(1)
      });

      it("should display the Delete button", () => {
        render(<MovieAdmin movie={movie} />);
        const deleteButton = screen.getByRole("button", { name: "DELETE" });
        expect(deleteButton).toBeVisible();
      });

      it("should call onClick property when the Delete button is clicked", async () => {
        const use = userEvent.setup();
        render(<MovieAdmin movie={movie} handleOnDelete={handleOnDelete} />);
        const deleteButton = screen.getByRole("button", { name: "DELETE" });
        await use.click(deleteButton);
        expect(handleOnDelete).toHaveBeenCalledTimes(1)
      });

})