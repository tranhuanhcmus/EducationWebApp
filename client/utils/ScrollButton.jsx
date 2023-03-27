import React, { useState } from "react";

import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <IconButton
      sx={{
        display: visible ? "flex" : "none",
        position: "fixed",
        bottom: "2vh",
        right: "2vw",
        bgcolor: "#1976d2",
        outline: "solid #1976d2",
      }}
    >
      <ArrowUpwardIcon onClick={scrollToTop} />
    </IconButton>
  );
};

export default ScrollButton;
