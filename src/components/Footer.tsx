import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Stack, Typography } from '@mui/material';





export default function Footer() {
  return (
    <div>
      <Box sx={{ width: "100%", bottom: 0, mt: 4, borderTop: 1, borderColor: "divider", pt: 2 }}>
        
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            Projekt Dive 2025
          </Typography>
          <IconButton color="primary" onClick={() => {window.open("https://www.linkedin.com/company/project-dive/");}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => {window.open("https://www.instagram.com/project_dive_kth/");}}>
            <InstagramIcon />
          </IconButton>
        </Stack>
        
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} Datasektionen, KTH Sverige
        </Typography>
      </Box>
    </div>
  )
}