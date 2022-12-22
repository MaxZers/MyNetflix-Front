import Container from "@mui/system/Container";
import {React} from "react";
import MovieListCatalog from "../components/MovieListCatalog"
import MovieInfoModal from "../modals/MovieInfoModal"
import { useState } from "react";
import { Fab, Box } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Swal from 'sweetalert2';

const MovieCatalogPage = ({ movies, handleAddToFavorite }) => {

    const [isInfoMovieModalVisible, setIsInfoMovieModalVisible] = useState(false);
    const [infoMovie, setInfoMovie] = useState();

    const handleOnInfo = movie => {
        setIsInfoMovieModalVisible(true)
        setInfoMovie(movie)
    }

    /**VAMOS A INTENTAR HACER UN MODAL CON LA INFO DE LAS PELICULAS DEL MISMO GENERO */

   /* function ShowSelected()
    {
        var cod = document.getElementById("sortGenre").value;
        alert(cod);

        var combo = document.getElementById("sortGenre");
        var selected = combo.options[combo.selectedIndex].text;
        alert(selected);
    }*/

    const sendToSort = () =>{
        var myGenre = document.getElementById("sortGenre").value;
        if(myGenre === ""){
            Swal.fire(
                'Oops',
                'You need to select a genre to sort',
                'info'
              )
        }
    }

    return(
        <Container maxWidth="lg" sx={{ margin: 2 }}>
            <MovieListCatalog
                movies={movies}
                handleAddToFavorite={handleAddToFavorite}
                handleOnInfo = {handleOnInfo}
            />

            <MovieInfoModal
                open={isInfoMovieModalVisible}
                onClose={() => setIsInfoMovieModalVisible(false)}
                movie={infoMovie}
            />

            <Fab
                variant="extended"
                onClick={sendToSort}
                id="sortButton"
                sx={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                }}
                >
                <BorderColorIcon sx={{ mr: 1 }} />
                Order by year
            </Fab>

            <Box
                sx={{
                    id:"sortButton",
                    position: "absolute",
                    bottom: "100px",
                    right: "24px",
                    }}
            >
                <select id="sortGenre" name="sortGenre">
                    <option hidden selected value={""}>Sort by Genre</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Kids">Kids</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Cince Fiction">Cince Fiction</option>
                    <option value="Epic">Epic</option>
                    <option value="Others">Others</option>
                </select>

            </Box>


        </Container>
    );
};

export default MovieCatalogPage;