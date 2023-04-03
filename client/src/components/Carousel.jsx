import React from "react";
import { Box, IconButton, Pagination, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
const buttonStyle = {
  border: "solid 1px black",
  color: "white",
  backgroundColor: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "black",
  },
};
const Carousel = ({ backgrounds }) => {
  const [pos, setPos] = React.useState(0);
  const [bgs, setBgs] = React.useState(backgrounds);

  React.useEffect(() => {
    setBgs(backgrounds);
  }, [backgrounds]);

  const handleClick = (direction) => {
    if (direction == "next") {
      setPos((prevPos) => {
        if (prevPos == bgs.length - 1) return 0;
        return prevPos + 1;
      });
    } else
      setPos((prevPos) => {
        if (prevPos == 0) return bgs.length - 1;
        return prevPos - 1;
      });
  };
  return (
    <Box
      height={"50vh"}
      sx={{
        placeItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: "0",
          m: "auto",
          display: "flex",
          alignItems: "center",
          width: "100%",
          background: `url(${bgs[pos]})  no-repeat center/cover `,
          transition: "background-image ease 0.5s",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mx: "10px",
          }}
        >
          <IconButton sx={buttonStyle} onClick={() => handleClick("prev")}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton sx={buttonStyle} onClick={() => handleClick("next")}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          m: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack direction={"row"}>
          {bgs.map((bg, index) => {
            return (
              <IconButton key={index} color={index == pos ? "primary" : ""}>
                <CircleIcon sx={{ fontSize: "0.75rem" }} />
              </IconButton>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Carousel;
