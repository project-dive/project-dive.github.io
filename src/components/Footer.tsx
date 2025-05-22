import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from "@mui/material/Grid2";
import projektgruppen from "assets/projektgruppen.jpg";
import { Box, IconButton, Stack, Typography } from '@mui/material';





export default function Footer() {
  return (
    <div>
      {/* <Box sx={{ width: "100%", bottom: 0, mt: 4, pt: 2, bgcolor: 'primary.main', justifyContent: "center" }}> */}
        <Grid container
          spacing={3}
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            px: 20,
            py: 4,
            bgcolor: 'primary.main',
            marginTop: 5
          }}
        >
          <Grid size={6}>
            <img width={"100%"} src={projektgruppen}/>
          </Grid>
            
          <Grid size={6}>
          <Stack spacing={2}>
            <Typography variant="body1" color="text.secondary" align="left">
              Dive är en studentdriven projektgrupp på Datasektionen jobbar med att nå ut till kvinnor och icke-binära som ska söka högskoleutbildning till hösten för att visa upp både programmet och sektionen.
            </Typography>
            
            <Typography variant="body2" color="text.secondary" align="left">
              <Box fontWeight='fontWeightMedium' display='inline'>Övre raden, från vänster: </Box>
              Johan Hahlin, Sara Strandberg, Stella Bobert, Alexander Stjernberg (Advisor), Markus Videfors (Projektledare), Lisa Engström, Casper Reuterlöv, Jakob Fäldt Pettersson
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              <Box fontWeight='fontWeightMedium' display='inline'>Nedre raden, från vänster: </Box>
              Isadora Fukiat Winter, Emelie Söderlund, Lydia Brorsson (Vice projektledare), Meya Wikner (PR-ansvarig), Sofia Wallgren, Carl Hansson
            </Typography>
            
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1" color='text.secondary'>
                Project Dive 2025
              </Typography>
              <IconButton color='tertiary' onClick={() => {window.open("https://www.linkedin.com/company/project-dive/");}}>
                <LinkedInIcon />
              </IconButton>
              <IconButton color='tertiary' onClick={() => {window.open("https://www.instagram.com/project_dive_kth/");}}>
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Stack>

          </Grid>

          <Typography variant="body2" color="text.secondary" align="center">
            &copy; {new Date().getFullYear()} Datasektionen, KTH Sverige
          </Typography>
          
        </Grid>
        
      {/* </Box> */}
    </div>
  )
}