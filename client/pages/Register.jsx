import React from "react";
import {
  Avatar,
  Box,
  Button,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
  Grid,
  Link,
  Container,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeRequest } from "../utils/axios";
const theme = createTheme();
const Register = () => {
  const [inputs, setInputs] = React.useState({});
  const [msg, setMsg] = React.useState("This is a message");
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState("student");
  const [showErr, setShowErr] = React.useState({
    password2: false,
  });
  const handleClose = () => setOpen(false);
  const handleInput = (e) => {
    setShowErr((showErr) => {
      return { ...showErr, ["password2"]: false };
    });
    const key = e.target.id;
    const value = e.target.value;

    setInputs((inputs) => {
      return { ...inputs, [key]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs["password"] != inputs["password2"]) {
      setShowErr((showErr) => {
        return { ...showErr, ["password2"]: true };
      });
      return;
    }
    makeRequest({
      url: "/auth/register",
      method: "post",
      data: { ...inputs, role },
    })
      .then((res) => {
        setMsg(res.data.msg);
        setOpen(true);
      })
      .catch((err) => {
        setMsg(err.response.data.msg);
        setOpen(true);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "url(https://picsum.photos/1600/720) no-repeat center/cover",
          animation: "shrink 20s infinite alternate",
          "@keyframes shrink": {
            "0%": {
              backgroundSize: "115% 115%",
            },
            "100%": {
              backgroundSize: "100% 100%",
            },
          },
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "0.75rem",
            backdropFilter: "blur(10px)",
            bgcolor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" component={"h1"} sx={{ fontWeight: "600" }}>
            Register
          </Typography>

          <Container>
            <Grid
              component={"form"}
              container
              spacing={2}
              id="register"
              onSubmit={handleSubmit}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  margin="normal"
                  id="name"
                  label="Name"
                  name="name"
                  autoFocus
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  margin="normal"
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  onChange={handleInput}
                  type="tel"
                  inputProps={{ pattern: "[0-9]{10}" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  margin="normal"
                  id="email"
                  label="Email"
                  name="email"
                  type={"email"}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  margin="normal"
                  id="username"
                  label="Username"
                  name="username"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  margin="normal"
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  margin="normal"
                  id="password2"
                  label="Retype Password"
                  name="password2"
                  type="password"
                  onChange={handleInput}
                  error={showErr["password2"]}
                  helperText={showErr["password2"] && "Password does not match"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  onChange={(e) => setRole(e.target.value)}
                  color="secondary"
                >
                  <FormLabel>Role</FormLabel>
                  <RadioGroup
                    aria-labelledby="role-group"
                    name="radio-buttons-group"
                    defaultValue={"student"}
                    row
                  >
                    <FormControlLabel
                      value="student"
                      control={<Radio color="secondary" />}
                      label="Student"
                    />
                    <FormControlLabel
                      value="teacher"
                      control={<Radio color="secondary" />}
                      label="Teacher"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Button
                  sx={{
                    fontWeight: "600",
                    width: "60%",
                    mx: "auto",
                  }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Register
                </Button>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ fontWeight: "600" }}
                  >
                    Login
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle id="alert-dialog-title">{"Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link href="/login" variant="body2" sx={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              sx={{ fontWeight: "600" }}
            >
              Login
            </Button>
          </Link>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Register;
