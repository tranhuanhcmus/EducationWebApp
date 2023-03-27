import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const footerStyle = {
  root: {
    backgroundColor: "#f5f5f5",
    padding: "48px 0",
    marginTop: "auto",
  },
  link: {
    textDecoration: "none",
    color: "#757575",
    "&:hover": {
      color: "#1976d2",
    },
  },
};

function Footer() {
  return (
    <Box component="footer" sx={footerStyle.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              We are a leading provider of online education and training
              programs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Links
            </Typography>
            <List>
              <ListItem>
                <Link href="/" sx={footerStyle.link}>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/courses" sx={footerStyle.link}>
                  Courses
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={footerStyle.link}>
                  About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={footerStyle.link}>
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              123 Main St
              <br />
              Anytown, USA
              <br />
              12345
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
