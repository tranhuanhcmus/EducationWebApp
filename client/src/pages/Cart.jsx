import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  ListItem,
  List,
  Rating,
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import styles from "../styles/styles";

const MessageDialog = ({ open, msg, handleClose }) => {
  <Dialog open={open} onClose={handleClose} color="warning">
    <DialogTitle>Message</DialogTitle>
    <DialogContent>
      <DialogContentText>{msg}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>;
};
const Cart = () => {
  const data = [
    {
      id: 1,
      title: "IELTS Listening Band 6",
      author: "Harry Bui",
    },
    {
      id: 2,
      title: "IELTS Reading Band 5",
      author: "Harry Bui",
    },
    { id: 3, title: "IELTS Listening Band 7", author: "Harry Bui" },
  ];
  const [courses, setCourses] = React.useState(data);
  const handleRemove = (id) => {
    setCourses((courses) => courses.filter((course) => course.id !== id));
  };
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("This is a message");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box my={2}>
      <Container>
        <Stack direction={"row"} sx={{ ...styles.flexCenter }} spacing={2}>
          <ShoppingCartIcon fontSize="large" />
          <Typography variant="h2" fontSize={"large"}>
            Cart
          </Typography>
        </Stack>

        <List>
          {courses.map((course) => (
            <ListItem
              key={course.id}
              sx={{
                "&:hover": {
                  bgcolor: "whitesmoke",
                },
              }}
            >
              <img
                src="https://picsum.photos/200"
                alt="item-course"
                style={{
                  height: "100%",
                  width: "100px",
                  objectFit: "center",
                }}
              />
              <Stack ml={2} flex="3">
                <Typography variant="body1" fontWeight={600}>
                  {course.title}
                </Typography>
                <Typography color={"gray"} fontSize="0.75rem">
                  {course.author}
                </Typography>
                <Rating defaultValue={5} readOnly />
              </Stack>
              <Stack ml={2} flex="1">
                <Typography variant="body2" fontWeight={600}>
                  100.000đ
                </Typography>
              </Stack>
              <Stack ml={2} direction="row">
                <Tooltip title="Remove from Cart">
                  <IconButton
                    color="error"
                    size="large"
                    onClick={() => handleRemove(course.id)}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Buy now">
                  <IconButton
                    color="primary"
                    size="large"
                    onClick={handleClickOpen}
                  >
                    <MonetizationOnIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Container>
      <MessageDialog open={open} msg={msg} handleClose={handleClose} />
    </Box>
  );
};

export default Cart;
