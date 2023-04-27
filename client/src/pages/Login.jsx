import React from "react";
import {
  Avatar,
  Box,
  Checkbox,
  Button,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
  Grid,
  Link,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeRequest } from "../utils/axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth";

const theme = createTheme();

const Login = () => {
  const [inputs, setInputs] = React.useState({});
  const [remember, setRemember] = React.useState(false);
  const [msg, setMsg] = React.useState("This is a message");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setInputs((inputs) => {
      return { ...inputs, [key]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest({
      url: "/auth/login",
      method: "post",
      data: inputs,
    })
      .then((res) => {
        setMsg(res.data.msg);
        setOpen(true);
        dispatch(login(res.data));
      })
      .then(() => window.location.replace("/"))

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
            height: "75vh",
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
            Sign In
          </Typography>

          <Box
            component={"form"}
            sx={{
              mt: 1,
              maxWidth: "400px",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              fullWidth
              required
              margin="normal"
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={handleInput}
            />
            <TextField
              fullWidth
              required
              margin="normal"
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              type={"password"}
              onChange={handleInput}
            />
            <FormControlLabel
              control={<Checkbox value={"remember"} color="primary" />}
              label="Remember me"
              onClick={() => {
                setRemember((remember) => !remember);
              }}
            />
            <Button
              sx={{ mt: 3, mb: 2, fontWeight: "600" }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Sign In
            </Button>
            <Grid
              container
              sx={{ mt: 1, display: "flex", alignItems: "center" }}
            >
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/register"
                  variant="body2"
                  sx={{ textDecoration: "none" }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ fontWeight: "600" }}
                  >
                    Register
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
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
          <Link
            href="/register"
            variant="body2"
            sx={{ textDecoration: "none" }}
          >
            <Button
              color="primary"
              variant="contained"
              sx={{ fontWeight: "600" }}
            >
              Register
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

export default Login;
