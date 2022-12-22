import React from "react";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import MovieInfo from "./MovieInfo";

const MovieAdmin = ({ movie, handleOnEdit, handleOnDelete }) => {
  return (
    <>
      <MovieInfo movie={movie} />
      <Stack direction="row">
        <Button
          onClick={() => handleOnEdit(movie)}
          sx={{
            background: "#26abe4",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          EDIT
        </Button>
        <Button
          onClick={() => handleOnDelete(movie._id)}
          sx={{
            background: "#636363",
            height: 64,
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          DELETE
        </Button>
      </Stack>
    </>
  );
};

export default MovieAdmin;