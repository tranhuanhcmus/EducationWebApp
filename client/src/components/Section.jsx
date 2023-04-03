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
  Link,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Section = ({ Type, index }) => {
  const variants = [
    {
      name: "Python Course",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente necessitatibus distinctio obcaecati natus ducimussint esse quaerat voluptatum culpa, officiis numquam maioresnam, possimus dolor quo maxime dolores adipisci.",
      price: "69.000d",
    },
    {
      name: "Python Course",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente necessitatibus distinctio obcaecati natus ducimussint esse quaerat voluptatum culpa, officiis numquam maioresnam, possimus dolor quo maxime dolores adipisci.",
      price: "69.000d",
    },
    {
      name: "Python Course",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente necessitatibus distinctio obcaecati natus ducimussint esse quaerat voluptatum culpa, officiis numquam maioresnam, possimus dolor quo maxime dolores adipisci.",
      price: "69.000d",
    },
    {
      name: "Python Course",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente necessitatibus distinctio obcaecati natus ducimussint esse quaerat voluptatum culpa, officiis numquam maioresnam, possimus dolor quo maxime dolores adipisci.",
      price: "69.000d",
    },
    {
      name: "Python Course",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente necessitatibus distinctio obcaecati natus ducimussint esse quaerat voluptatum culpa, officiis numquam maioresnam, possimus dolor quo maxime dolores adipisci.",
      price: "69.000d",
    },
    {
      name: "Python Course",
      image: "https://picsum.photos/600/300",
      author: "HarryBui",
      rating: 4.5,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sapiente necessitatibus distinctio obcaecati natus ducimussint esse quaerat voluptatum culpa, officiis numquam maioresnam, possimus dolor quo maxime dolores adipisci.",
      price: "69.000d",
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
          <Typography variant="h4" sx={{ mr: "auto" }}>
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
                          sx={{ fontWeight: "600" }}
                        >
                          {course.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="span"
                        >
                          {course.author}
                        </Typography>
                      </Stack>
                      <Rating value={course.rating} readOnly precision={0.5} />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "justify",
                          display: "block",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          lineHeight: "1.2rem",
                          maxHeight: "3.6rem",
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
                        {course.price}
                      </Typography>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
