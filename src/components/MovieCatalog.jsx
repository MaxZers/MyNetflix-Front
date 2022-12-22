import React from "react";
import MovieInfoUser from "./MovieInfoUser";
import Button from "@mui/material/Button";
import GradeIcon from '@mui/icons-material/Grade';
import { Typography } from "@mui/material";

const MovieCatalog = ({ movie,handleAddToFavorite, handleOnInfo }) => {
  return (
    <>
      <MovieInfoUser
        movie={movie}
        handleOnInfo={handleOnInfo}
      />
      <Button
        onClick={() => handleAddToFavorite(movie._id)}
        sx={{
          background: "#e7e7e7",
          height: 64,
          width: 1,
          margin: 0,
          padding: 0,
          borderRadius: 0,
          border: 1,
        }}
      >
        <Typography fontSize={18}>Add to my favorites</Typography>
        <GradeIcon sx={{ paddingLeft: 1 }} />
      </Button>
    </>
  );
};

export default MovieCatalog;