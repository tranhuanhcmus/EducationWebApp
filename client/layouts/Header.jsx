import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  Button,
  Avatar,
  Link,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  List,
  Drawer,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styles from "./../src/styles/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AdbIcon from "@mui/icons-material/Adb";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Header = () => {
  const currentUser = true;
  const pages = ["Courses", "Tests", "Blogs"];

  const [showMenu, setShowMenu] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setShowMenu(open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Link
            to="/"
            sx={{
              cursor: "pointer",
              color: "white",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              "&:hover": styles.glowText,
            }}
          >
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,

                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FIE
            </Typography>
          </Link>

          {/* Reponsive Menu Navigates */}
          <>
            <IconButton
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={showMenu}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {pages.map((text) => (
                    <>
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
          {/* List Navigates */}
          <Stack direction={"row"} spacing={4} sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Typography
                component="a"
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  color: "inherit",
                  "&:hover": {
                    color: "inherit",
                    translate: "0 -10%",
                    textDecoration: "underline",
                    cursor: "pointer",
                    transition: "ease 0.2s",
                  },
                }}
                href="/"
                key={page}
                textAlign={"center"}
              >
                {page}
              </Typography>
            ))}
          </Stack>

          {/* User Button */}
          <Stack direction={"row"} spacing={2}>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            {!currentUser ? (
              <>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  fontSize={"1rem"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    placeItems: "center",
                  }}
                >
                  Harry Bui
                </Typography>
                <IconButton sx={{ p: "0", m: "0" }} onClick={handleClick}>
                  <Avatar alt="username" src="https://picsum.photos/200" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <LocalLibraryIcon
                      sx={{ color: "#bdbdbd", margin: "0 8px 0 -4px" }}
                    />{" "}
                    My Courses
                  </MenuItem>
                  <Divider />

                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
