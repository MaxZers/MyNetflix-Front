import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chance from "chance";
import MovieInfoUser from "../MovieInfoUser";

const chance = new Chance();
const handleOnInfo = jest.fn();

describe("When displaying movie info to the user",()=>{

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

    it("should call onClick property when the movie image cover is clicked", async () => {
        const use = userEvent.setup();
        render(<MovieInfoUser movie={movie} handleOnInfo={handleOnInfo} />);
        const image = screen.getByRole("img");
        await use.click(image);
        expect(handleOnInfo).toHaveBeenCalledTimes(1)
      });

})