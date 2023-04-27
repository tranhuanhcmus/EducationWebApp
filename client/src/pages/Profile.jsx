import React from "react";
import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Cart from "./Cart";
import Loading from "../utils/Loading";
import { getImage, handleFileUpload } from "../utils/fetchData";

const FormDialog = ({ open, handleClose, currentUser }) => {
  const [inputs, setInputs] = React.useState({
    name: "",
    phone: "",
    email: "",
  });
  const [bending, setBending] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState();
  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setInputs((inputs) => {
      return { ...inputs, [key]: value };
    });
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBending((state) => true);
    const fileName = `${currentUser.ID}.png`;
    await handleFileUpload(selectedImage, fileName);
    setBending((state) => false);
    window.location.reload();
  };

  return bending ? (
    <Loading />
  ) : (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Profile Form</DialogTitle>

      <DialogContent>
        <Container>
          <Grid
            component={"form"}
            container
            spacing={2}
            id="Profile"
            onSubmit={handleSubmit}
          >
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                fullWidth
                margin="normal"
                id="name"
                label="Name"
                name="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                fullWidth
                margin="normal"
                id="phone"
                label="Phone Number"
                name="phone"
                type="tel"
                inputProps={{ pattern: "[0-9]{10}" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInput}
                fullWidth
                margin="normal"
                id="email"
                label="Email"
                name="email"
                type={"email"}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                component="input"
                id="avatar"
                label="Avatar"
                name="Avatar"
                type="file"
                onChange={imageChange}
              />
              {selectedImage && (
                <Box
                  sx={{
                    img: {
                      width: "100%",
                      objectFit: "contain",
                    },
                  }}
                >
                  <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="Profile">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.user);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [image, setImage] = React.useState("not yet");
  React.useEffect(() => {
    const loadImage = async () => {
      const newImage = await getImage(`${currentUser.ID}.png`);
      setImage(newImage);
    };
    loadImage();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} my={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ border: "0.5rem solid orange" }}>
            <CardHeader
              sx={{ bgcolor: "#a7c4cb" }}
              avatar={<AccountBoxIcon fontSize="large" />}
              title={
                <Typography sx={{ fontWeight: 600 }} variant="h5">
                  {currentUser.NAME}
                </Typography>
              }
            ></CardHeader>
            <CardMedia
              component={"img"}
              title="avatar"
              image={image}
              height="30%"
            />
            <CardContent>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ContactPhoneIcon />
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  aria-valuetext="phone"
                >
                  {currentUser.PHONE}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <EmailIcon />
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  aria-valuetext="name"
                >
                  {currentUser.MAIL}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "uppercase",
                }}
              >
                <ContactPageIcon />
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  aria-valuetext="name"
                >
                  {currentUser.ROLE}
                </Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <Button onClick={handleClickOpen}>Edit</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Cart />
        </Grid>
      </Grid>
      <FormDialog
        open={open}
        handleClose={handleClose}
        currentUser={currentUser}
      />
    </Container>
  );
};

export default Profile;
