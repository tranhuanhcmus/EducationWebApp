import { useState, useEffect, useCallback } from "react";
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
import { useSelector } from "react-redux";
import { getImage } from "../utils/fetchData";
import { GetMyCourse, HandleGetCourseOfTeacher } from "../utils/fetchData";

import { makeRequest } from "./../utils/axios";
import { useQuery } from "react-query";
const Section = ({ Type, index, onAdd }) => {
  const [courses, setCourses] = useState([]);
  const [courseImgs, setCourseImgs] = useState([]);

  const currentUser = useSelector((state) => state.auth.user);
  const fetchCourses = useCallback(async () => {
    const array = [];
    const temp = [];
    const res = await makeRequest({ url: "/course", method: "get" });

    if (currentUser.ROLE === "student") {
      const data = await GetMyCourse(currentUser.ID);
      data.forEach((course) => temp.push(course));
    } else {
      const data = await HandleGetCourseOfTeacher(currentUser.ID);
      data.forEach((course) => temp.push(course));
    }
    const items = JSON.parse(localStorage.getItem("items"));
    items.forEach((course) => temp.push(course));
    res.data.forEach(async (course) => {
      const data1 = await getImage(course.IMG);
      setCourseImgs((prev) => {
        return [...prev, data1];
      });
    });
    res.data.map((index) => {
      var i = 0;
      temp.map((course) => {
        if (course.CID === index.CID) {
          i = i + 1;
        }
      });
      if (i === 0) {
        array.push(index);
      }
    });
    setCourses(array);
    console.log(res.data);
  }, []);
  useEffect(() => {
    if (Type == "Courses") {
      fetchCourses();
    }
  }, [fetchCourses]);

  //fetch blogs
  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery(
    "latest-blogs",
    () => {
      return makeRequest({
        method: "get",
        url: "/forum",
      });
    },
    {
      select: (data) =>
        data.data
          .sort(
            (a, b) =>
              new Date(b.DATE_ESTABLISHED) - new Date(a.DATE_ESTABLISHED)
          )
          .slice(0, 6),
    }
  );

  return (
    <Box
      sx={{
        width: "100%",
        py: "1.5rem",

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
          <Link to={`/${Type}`}>
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
          {Type == "Blogs" && blogs ? (
            blogs.map((blog) => (
              <Grid key={blog.FID} item xs={12} sm={6} lg={4}>
                <Card>
                  <Link to={`blogs/details/${blog.FID}`} state={{ blog }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={blog.TITLE}
                        src={"anh1.png"}
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
                              textTransform: "uppercase",
                            }}
                          >
                            {blog.TITLE}
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
                            {blog.CATEGORY}
                            <br />
                            {blog.NAME}
                          </Typography>
                        </Stack>
                        {/* <Rating value={5} readOnly precision={0.5} /> */}
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
                          Time: {new Date(blog.DATE_ESTABLISHED).toDateString()}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            ))
          ) : courses.length != 0 && Type == "Courses" ? (
            courses.map((course, index) => {
              // const [image, setImage] = useState("");
              const image = "";
              //get Image from database
              // useEffect(() => {
              //   const loadImage = async () => {
              //     const data = await getImage(course.IMG);
              //     setImage(data);
              //   };
              //   loadImage();
              // }, []);

              return (
                <Grid key={course.CID} item xs={12} sm={6} lg={4}>
                  <Card>
                    <Link to={`coursesdetails/${course.CID}`} state={course}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={course.COURESENAME}
                          src={courseImgs[index]}
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
                              {course.COURESENAME}-{course.CATEGORY}
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
                              {course.OWNERNAME}
                            </Typography>
                          </Stack>
                          {/* <Rating value={5} readOnly precision={0.5} /> */}
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
                            {course.DESCRIPTION}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                    <CardActions>
                      <Stack
                        direction={"row"}
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tooltip
                          title="Add to Cart"
                          TransitionComponent={Zoom}
                          onClick={() => {
                            onAdd(
                              course.COURESENAME,
                              course.IMG,
                              course.PRICE,
                              course.CID
                            );
                            fetchCourses();
                          }}
                        >
                          <IconButton color="primary">
                            <ShoppingCartIcon />
                          </IconButton>
                        </Tooltip>
                        <Typography
                          variant="body1"
                          sx={{ mr: "auto", fontWeight: "500" }}
                        >
                          {course.PRICE}đ
                        </Typography>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Grid
              item
              className="flex items-center justify-center uppercase font-sans text-3xl md:text-xl sm:text-md w-full font-thin m-3"
            >
              There is no production
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
