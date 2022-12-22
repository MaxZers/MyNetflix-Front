import React from "react";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import MovieInfoUser from "./MovieInfoUser";
import { Typography } from "@mui/material";

const MovieFavorite = ({ movie, handleLess, handleOnInfo }) => {

  return (
    <>
      <MovieInfoUser
        movie={movie}
        handleOnInfo={handleOnInfo}
      />
      <Stack direction="row">
        <Button
          onClick={() => handleLess(movie._id)}
          sx={{
            background: "#e7e7e7",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
        <Typography fontSize={18}>Remove</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default MovieFavorite;