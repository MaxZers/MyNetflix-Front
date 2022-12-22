import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Box, Grid, TextField, Select, MenuItem, FormControl, InputLabel} from '@mui/material'


const MovieForm = ({ onSubmit, defaultEditValues }) => {

  const defaultValues = {
    name: '',
    synopsis: '',
    coverImage: '',
    genre: '',
    movieUrl: '',
    releaseDate: ''
  }
  /**Definimos los valores a mostrar en el formato*/

  const movieFormSchema = yup.object().shape({
    name: yup.string().required('You need to add a name'),
    coverImage: yup.string(),
    genre: yup.string().required('You need to enter a genre'),
    releaseDate: yup.string("Release date needed"),
  })
  /**Hacemos los anuncios de elemento requerido */

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultEditValues || defaultValues,
    resolver: yupResolver(movieFormSchema),
    mode: 'all',
  })

  const coverImageValue = watch('coverImage')

  return (
    <Box
      id='movie-form'
      component='form'
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: '24px' }}
    >
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Controller
            control={control}
            name='name'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Name'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='synopsis'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Synopsis'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='coverImage'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Cover Image'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
        {
          !!coverImageValue &&
          <Grid item xs={12}>
            <Box
              sx={{ width: '100%' }}
              component='img'
              src={coverImageValue}
            />
          </Grid>
        }

        <Grid item xs={6}>
          <Controller
            control={control}
            name='genre'
            render={ ({ field, fieldState }) => (
              <FormControl sx={{ width: '100%' }}>
                  <InputLabel>Genre</InputLabel>
                  <Select
                        {...field}
                        label='Genre'
                        variant='outlined'
                        fullWidth
                        error={ !!fieldState.error }
                        helperText={ fieldState.error?.message }
                      >
                        <MenuItem value={"Action"}>Action</MenuItem>
                        <MenuItem value={"Drama"}>Drama</MenuItem>
                        <MenuItem value={"Kids"}>Kids</MenuItem>
                        <MenuItem value={"Comedy"}>Comedy</MenuItem>
                        <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                        <MenuItem value={"Horror"}>Horror</MenuItem>
                        <MenuItem value={"Cince Fiction"}>Cince Fiction</MenuItem>
                        <MenuItem value={"Epic"}>Epic</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name='movieUrl'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Movie url'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name='releaseDate'
            render={ ({ field, fieldState }) => (
              <TextField
                  label="Release date"
                  type="date"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...field}

                  variant='outlined'
                  fullWidth
                  error={ !!fieldState.error }
                  helperText={ fieldState.error?.message }
              />

            )}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default MovieForm