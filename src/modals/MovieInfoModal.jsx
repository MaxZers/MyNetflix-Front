import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import MovieInfo from "../components/MovieInfo"


const EditMovieModal = ({ open, onClose, movie }) => {

  return (
    <Dialog open={open} onClose={onClose}
    >
      <DialogTitle>
        Movie Information
      </DialogTitle>

      <DialogContent>
        <MovieInfo movie={movie}/>
      </DialogContent>

    </Dialog>
      )
}

export default EditMovieModal