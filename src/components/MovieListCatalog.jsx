import React from "react";
import Grid from "@mui/material/Grid";
import MovieCatalog from "./MovieCatalog";

const MovieListCatalog = ({ movies, handleAddToFavorite, handleOnInfo }) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={movie._id}>
            <MovieCatalog
            movie={movie}
            handleAddToFavorite={handleAddToFavorite}
            handleOnInfo={handleOnInfo}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieListCatalog;