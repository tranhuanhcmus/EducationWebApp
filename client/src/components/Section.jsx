import React from "react";
import {
  Box,
  Stack,
  Typography,
  Container,
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Zoom,
  Rating,
  Grid,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const Section = ({ Type, index }) => {
  const variants = [
    {
      name: "Writing Band 5.0",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "You will learn basic rules, structure of a writing test and tips for the exam. Beside that, you will also read many example tests and analyst its by teacher.",
      price: "199.000",
    },
    {
      name: "Writing Band 6.0",
      image: "https://picsum.photos/600/300",
      author: "James",
      rating: 4,
      desc: "Read many example tests and analyst its by teacher. Learning new vocabulary",
      price: "300.000",
    },
    {
      name: "Listening Band 5.0",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 5,
      desc: "Suitable for beginners. Do many test and read script with teacher",
      price: "199.000",
    },
    {
      name: "Writing Band 6.5",
      image: "https://picsum.photos/600/300",
      author: "James",
      rating: 4,
      desc: "Learning more and improve your writing skill. Learn new Grammar and Specialized Vocabulary",
      price: "369.000",
    },
    {
      name: "Listening Band 6.5",
      image: "https://picsum.photos/600/300",
      author: "Larry Wall",
      rating: 3.5,
      desc: "Learn Specialized vocabulary, special type of test and more ...",
      price: "469.000",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        py: "1.5rem",
        my: "1rem",
        bgcolor: `${index % 2 == 0 ? "#f5f5f5" : ""}`,
      }}
    >
      <Container>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mr: "auto", fontFamily: "Bebas Neue" }}
          >
            {Type}
          </Typography>
          <Link href={`/${Type}`}>
            <Button color="primary">
              <Typography variant="body1" sx={{ textAlign: "right" }}>
                More
              </Typography>
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </Link>
        </Stack>
        <hr />

        <Grid container spacing={3}>
          {variants.map((course, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} lg={4}>
                <Link to="coursesdetails/0">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={course.name}
                        src={`${course.image}`}
                        sx={{
                          width: "100%",
                          height: "200px",
                          objectFit: "contain",
                        }}
                      />
                      <CardContent>
                        <Stack>
                          <Typography
                            gutterBottom
                            variant="h6"
                            sx={{
                              fontWeight: "600",
                              fontFamily: "Roboto Slab",
                            }}
                          >
                            {course.name}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="span"
                            sx={{
                              fontWeight: "300",
                              fontFamily: "Roboto Slab",
                            }}
                          >
                            {course.author}
                          </Typography>
                        </Stack>
                        <Rating
                          value={course.rating}
                          readOnly
                          precision={0.5}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            my: 2,
                            textAlign: "left",
                            display: "block",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            lineHeight: "1.2rem",
                            maxHeight: "3.6rem",
                            fontWeight: "500",
                            fontFamily: "Poppins",
                          }}
                        >
                          {course.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Stack
                        direction={"row"}
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tooltip title="Add to Cart" TransitionComponent={Zoom}>
                          <IconButton color="primary">
                            <ShoppingCartIcon />
                          </IconButton>
                        </Tooltip>
                        <Typography
                          variant="body1"
                          sx={{ mr: "auto", fontWeight: "500" }}
                        >
                          {course.price}đ
                        </Typography>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
