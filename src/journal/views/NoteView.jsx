import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeInUp"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="ligh">
          05 de abrl de 1995
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 1 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          typeo="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          typeo="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Descripción"
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
