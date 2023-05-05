import React from "react";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import { makeRequest } from "./../utils/axios";

const Home = () => {
  const sectionVariants = ["Courses", "Tests", "Blogs"];
  const [courses, setCourses] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const discount = [
    "/discount/discount3.jpg",
    "/discount/discount1.jpg",
    "/discount/discount2.jpg",
    "/discount/discount4.jpg",
    "/discount/discount5.jpg",
    "/discount/discount6.jpg",
    "/discount/discount7.jpg",
    "/discount/discount8.jpg",
  ];

  const [bgs, setBgs] = React.useState([]);
  // React.useEffect(() => {
  //   const getRandomImages = async () => {
  //     const imagePromises = [];

  //     for (let i = 0; i < 5; i++) {
  //       imagePromises.push(
  //         fetch(`https://picsum.photos/1920/1080?random=${i}`).then(
  //           (response) => response.url
  //         )
  //       );
  //     }

  //     const images = await Promise.all(imagePromises);
  //     setBgs(images);
  //   };

  //   getRandomImages();
  // }, []);
  const [itemsInCart, setItemsInCart] = React.useState([]);
  const [score, setScore] = React.useState({});
  const [sum, setSum] = React.useState(0);
  React.useEffect(() => {
    setBgs(discount);

    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItemsInCart(items);
    }
    //get Courses
    const data_courses = makeRequest({
      url: "/course",
      method: "get",
    })
      .then((res) => res.data)
      .then((data) => {
        const array = [];

        data.map((index) => {
          var i = 0;
          items.map((course) => {
            if (course.CID === index.CID) {
              i = i + 1;
            }
          });
          if (i === 0) {
            array.push(index);
          }
        });
        console.log(array);
        setCourses(array);
      });
  }, []);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  const handleChange = (e) => {
    var newScore = { ...score };
    newScore[e.target.id] = e.target.value;
    setScore((score) => newScore);
  };
  const handleSum = () => {
    const listening = parseFloat(score.listening);
    const reading = parseFloat(score.reading);
    const writing = parseFloat(score.writing);
    const total = (listening + reading + writing) / 3;
    setSum((sum) => (Math.round(total * 4) / 4).toFixed(2));
  };
  const addCourseInCartHandler = (title, img, price, id) => {
    setItemsInCart((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          Name: title,
          IMG: img,
          PRICE: price,
          CID: id,
        },
      ];
    });
    alert("Add success!");
    setCourses((courses) => courses.filter((course) => course.CID !== id));
  };
  return (
    <>
      <Carousel backgrounds={bgs} />
      <div className="container bg-sky-300 py-6 px-4 mt-2 font-Poppins">
        <p className=" font-semibold text-3xl md:text-xl text-center duration-300 animate-bounce text-rose-700">
          Determine Band By the First Test Here
        </p>
        <div className="p-3 ring-2 ring-rose-700 flex md:flex-col m-4">
          <div className=" flex flex-col items-center justify-center gap-4 font-semibold  flex-1 border-r-2 md:border-none border-slate-700 border-dashed">
            <a
              href="https://ieltsonlinetests.com/ielts-mock-test-2023-january-listening-practice-test-2"
              target={"_blank"}
              className="w-[400px] text-center sm:w-[200px] p-2 bg-violet-300 rounded-sm ring-2 ring-slate-600 hover:bg-white hover:text-black"
            >
              Listening
            </a>
            <a
              href="https://ieltsonlinetests.com/ielts-mock-test-2023-january-listening-practice-test-2"
              target={"_blank"}
              className="w-[400px] text-center sm:w-[200px] p-2 bg-green-300 rounded-sm ring-2 ring-slate-600 hover:bg-white hover:text-black"
            >
              Reading
            </a>
            <a
              href="https://ieltsonlinetests.com/ielts-mock-test-2023-january-listening-practice-test-2"
              target={"_blank"}
              className="w-[400px] text-center sm:w-[200px] p-2 bg-orange-300 rounded-sm ring-2 ring-slate-600 hover:bg-white hover:text-black"
            >
              Writing
            </a>
          </div>
          <div className="calculator flex flex-col gap-2 flex-2 px-10 py-2">
            <div className="flex items-center justify-between">
              <label className="mr-2" htmlFor="listening">
                Listening:
              </label>
              <input
                onChange={handleChange}
                id="listening"
                type="number"
                step={0.25}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-2" htmlFor="reading">
                Reading:
              </label>
              <input
                onChange={handleChange}
                id="reading"
                type="number"
                step={0.25}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-2" htmlFor="writing">
                Writing:
              </label>
              <input
                onChange={handleChange}
                id="writing"
                type="number"
                step={0.25}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSum}
                className="bg-rose-700 px-3 py-2 rounded-lg font-semibold hover:ring-2 hover:text-yellow-300"
              >
                Get Your Score:
              </button>
              <span className="text-3xl">{sum}</span>
            </div>
          </div>
        </div>
      </div>
      {sectionVariants.map((variant, index) => {
        return (
          <Section
            key={index}
            Type={variant}
            index={index}
            onAdd={addCourseInCartHandler}
            data={
              variant == "Courses"
                ? courses
                : variant == "Tests"
                ? tests
                : blogs
            }
          />
        );
      })}
    </>
  );
};

export default Home;
