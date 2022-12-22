import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import MovieForm from "../forms/MovieForm"

const EditMovieModal = ({ open, onClose, onSubmit, movie }) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Select a movie to Edit
      </DialogTitle>
      <DialogContent>
        <MovieForm
            defaultEditValues={movie}
            onSubmit={onSubmit}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='error'
          form='movie-form'
          children="Cancel"
          onClick={onClose}
        />
        <Button
          variant='outlined'
          form='movie-form'
          type='submit'
          children='Update'
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  )
}

export default EditMovieModal