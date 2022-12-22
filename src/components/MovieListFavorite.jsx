import React from "react";
import Grid from "@mui/material/Grid";
import MovieFavorite from "./MovieFavorite"

const MovieListFavorite = ({ movies, handleLess, handleOnInfo }) => {

  if (movies.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {movies.map((movie) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={movie._id}>
            <MovieFavorite
              movie={movie}
              handleLess={handleLess}
              handleOnInfo={handleOnInfo}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieListFavorite;