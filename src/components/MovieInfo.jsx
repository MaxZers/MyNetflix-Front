import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


const MovieInfo = ({ movie }) => {

  return (

    <Box sx={{ backgroundColor: "#eeeeee", height: 580, border: 1 }}>
      <Box
        component="img"
        sx={{ height: 0.5, width: 1, objectFit: "cover" }}
        src={movie.coverImage}s
        alt="cover image of the movie"
      />
      <Stack
        sx={{ height: 0.5, px: 4, width: 0.90 }}
        justifyContent="space-around"
        spacing={0}
      >
            <Stack spacing={0} overflow={"auto"} sx={{ width: 1 }}>
              <Typography fontSize={24}>{movie.name}</Typography>
              <Typography fontSize={18}>{movie.synopsis}</Typography>
            </Stack>

            <Stack spacing={2}  sx={{ width: 1}} direction="row" alignItems="center" >
              <Typography fontSize={24}>Genre:</Typography>
              <Typography fontSize={20}>{movie.genre}</Typography>
            </Stack>

            <Stack spacing={0} sx={{ width: 1 }}>
              <Typography fontSize={20}>Release date: {movie.releaseDate} </Typography>
            </Stack>

            <Stack spacing={0} textAlign={"center"} sx={{ width: 1}}>
              <Typography fontSize={20} >
                  <a href={movie.movieUrl} target="blank" style={{ textDecoration: "none"}}>Watch movie</a>
              </Typography>
            </Stack>

        </Stack>
    </Box>
  );
};

export default MovieInfo;