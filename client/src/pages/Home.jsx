import React from "react";
import Carousel from "../components/Carousel";
import Section from "../components/Section";

const Home = () => {
  const sectionVariants = ["Courses", "Tests", "Blogs"];

  const [bgs, setBgs] = React.useState([]);
  React.useEffect(() => {
    const getRandomImages = async () => {
      const imagePromises = [];

      for (let i = 0; i < 5; i++) {
        imagePromises.push(
          fetch(`https://picsum.photos/1920/1080?random=${i}`).then(
            (response) => response.url
          )
        );
      }

      const images = await Promise.all(imagePromises);
      setBgs(images);
    };

    getRandomImages();
  }, []);

  return (
    <>
      <Carousel backgrounds={bgs} />
      {sectionVariants.map((variant, index) => {
        return <Section key={index} Type={variant} index={index} />;
      })}
    </>
  );
};

export default Home;
