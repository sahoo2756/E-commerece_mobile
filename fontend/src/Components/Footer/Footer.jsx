import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import "./footer.css"

const CustomFooter = () => {
  return (
    <Box style={{background : "#000"}} sx={{ color: 'white', pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Company</Typography>
            <Link  href="#" color="inherit" display="block">About</Link>
            <Link href="#" color="inherit" display="block">Careers</Link>
            <Link href="#" color="inherit" display="block">Brand Center</Link>
            <Link href="#" color="inherit" display="block">Blog</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Help Center</Typography>
            <Link href="#" color="inherit" display="block">Discord Server</Link>
            <Link href="#" color="inherit" display="block">Twitter</Link>
            <Link href="#" color="inherit" display="block">Facebook</Link>
            <Link href="#" color="inherit" display="block">Contact Us</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Legal</Typography>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Licensing</Link>
            <Link href="#" color="inherit" display="block">Terms & Conditions</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Download</Typography>
            <Link href="#" color="inherit" display="block">iOS</Link>
            <Link href="#" color="inherit" display="block">Android</Link>
            <Link href="#" color="inherit" display="block">Windows</Link>
            <Link href="#" color="inherit" display="block">MacOS</Link>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <SportsBasketballIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomFooter;
