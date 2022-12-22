import { Container } from "@mui/material"
import MovieListFavorite from "../components/MovieListFavorite"
import MovieInfoModal from "../modals/MovieInfoModal"
import { useState } from "react";


const FavoritePage = ({ favoriteMovies, setFavoriteMovies }) => {

    const handleLess = id => {
        const tempFavoriteMovies = Array.from(favoriteMovies)
        const movieIndex = tempFavoriteMovies.findIndex(m => m._id === id)
        if (tempFavoriteMovies[movieIndex].qty === 1)
        setFavoriteMovies(tempFavoriteMovies.filter(m => m._id !== id))
        else {
        tempFavoriteMovies[movieIndex] = {
            ...tempFavoriteMovies[movieIndex],
            qty: tempFavoriteMovies[movieIndex].qty - 1,
        }
        setFavoriteMovies(tempFavoriteMovies)
        }
    }

    const [isInfoMovieModalVisible, setIsInfoMovieModalVisible] = useState(false);
    const [catalogMovie, setCatalogMovie] = useState();

    const handleOnInfo = movie => {
        setIsInfoMovieModalVisible(true)
        setCatalogMovie(movie)
    }

    return(
        <Container
            sx={{
                display: 'flex',
                margin: 2,
                justifyContent: 'space-between',
            }}
            >
            <MovieListFavorite
                movies={favoriteMovies}
                handleLess={handleLess}
                handleOnInfo = {handleOnInfo}
            />

            <MovieInfoModal
                open={isInfoMovieModalVisible}
                onClose={() => setIsInfoMovieModalVisible(false)}
                movie={catalogMovie}
            />
        </Container>
    );
};

export default FavoritePage;