import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
//import { Link } from "react-router-dom";

const MovieInfoUser = ({ movie, handleOnInfo }) => {

  return (

    <Box sx={{ backgroundColor: "#eeeeee", height: 380, border: 1, '&:hover': {backgroundColor:"white"} }}>
      <Stack
        sx={{ height: 0.3, px: 4, width: 0.75 }}
        justifyContent="space-around"
        spacing={0}
      >
            <Stack spacing={0} sx={{ width: 1 }}>
              <Typography fontSize={24}>{movie.name}</Typography>
            </Stack>

            <Stack spacing={2}  sx={{ width: 1}} direction="row" alignItems="center" >
              <Typography fontSize={24}>Genre:</Typography>
              <Typography fontSize={20}>{movie.genre}</Typography>
            </Stack>

            <Stack spacing={0} sx={{ width: 1 }}>
              <Typography fontSize={20}>Release date: {movie.releaseDate} </Typography>
            </Stack>

        </Stack>
        <>
            <Box
                  component="img"
                  sx={{ height: 0.7, width: 1, objectFit: "cover", '&:hover': {cursor: "pointer"} }}
                  src={movie.coverImage}
                  alt="cover image of the movie"
                  onClick={() => handleOnInfo(movie)}
            />
        </>
    </Box>
  );
};

export default MovieInfoUser;