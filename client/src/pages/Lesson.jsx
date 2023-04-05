import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";
import Comment from "../components/Comment";
import Quiz from "./../components/Quiz";
const buttonStyle = {
  border: "solid 1px black",
  color: "black",
  backgroundColor: "transparent",
  "&:hover": {
    color: "white",
    backgroundColor: "black",
  },
};
const data = [
  {
    image: "/anh5.png",
    name: "Title of lesson 1",
    time: "15:00",
  },
  {
    image: "/anh1.png",
    name: "Title of lesson 2",
    time: "15:00",
  },
  {
    image: "/anh1.png",
    name: "Title of lesson 3",
    time: "15:00",
  },
  {
    image: "/anh1.png",
    name: "Title of lesson 4",
    time: "15:00",
  },
  {
    image: "/anh1.png",
    name: "Title of lesson 5",
    time: "15:00",
  },
];
const Lesson = () => {
  const lesson = {
    name: "Listening Band 6.0",
    author: "Harry Bui",
    video: "/video.mp4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia temporibus est animi, ex dolores ad provident dignissimos voluptas nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia temporibus est animi, ex dolores ad provident dignissimos voluptas nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia temporibus est animi, ex dolores ad provident dignissimos voluptas nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia temporibus est animi, ex dolores ad provident dignissimos voluptas nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia temporibus est animi, ex dolores ad provident dignissimos voluptas nemo.",
    attachment: "a article link",
    note: "this lesson is so interesting ...",
  };
  return (
    <>
      <div className="container flex justify-center">
        <div className="flex items-center flex-1 justify-center">
          <IconButton size="small" sx={buttonStyle}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <video width={"80%"} controls autoPlay poster="/anh1.png">
          <source src={lesson.video} type="video/mp4" />
        </video>
        <div className="flex items-center flex-1 justify-center">
          <IconButton size="small" sx={buttonStyle}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
      <div className="playlist my-4">
        <div className=" mx-3 pt-2 search text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <a className="text-2xl font-Bebas uppercase mr-4         ">
            <b>{lesson.name}</b>
          </a>
          - <h4 className="ml-4 text-lg">{lesson.author}</h4>
        </div>
        <LessonList data={data} />
      </div>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Content</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-justify m-4 md:m-6">
          {lesson.content}
        </div>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Navigations</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-justify m-4 md:m-6">
          {lesson.attachment}
        </div>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Quiz</b>
          </h3>
        </div>
        <Quiz />
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Notes</b>
          </h3>
        </div>
        <textarea
          className="text-lg font-note font-[300] mt-3 text-justify m-4 md:m-6 w-[80%] "
          value={lesson.note}
        ></textarea>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Comments</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-justify m-4 md:m-6">
          <div className="mb-3">
            <textarea className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"></textarea>
            <div className="flex justify-end">
              <Button sx={{ ml: "auto" }} variant="contained">
                Comment
              </Button>
            </div>
          </div>
          <Comment />
        </div>
      </section>
    </>
  );
};

const LessonList = ({ data }) => {
  const [list, setList] = React.useState(data);
  const [key, setKey] = React.useState("");

  return (
    <>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1"
        placeholder="Enter name of lesson"
        onChange={(e) => setKey(e.target.value)}
      />

      <div className="w-full p-2 grid grid-flow-col  auto-cols-[50%] lg:auto-cols-[20%] md:auto-cols-[25%] sm:auto-cols-[33%] items-center overflow-scroll gap-2">
        {list.map((item) => {
          if (item.name.toLowerCase().includes(key))
            return (
              <div
                className="item border-2 p-2 border-solid border-indigo-300 hover:-translate-y-1 hover:cursor-pointer hover:bg-slate-500 hover:text-amber-400 transition-all duration-200"
                key={item.name}
              >
                <img
                  className="object-cover object-center h-[100px] md:h-[132px] border-b-4 p-2 border-solid border-red-800"
                  src={item.image}
                  width={"inherit"}
                  alt="thumbnail-lesson"
                />
                <h6>
                  <b>{item.name}</b>
                </h6>
                <div className="text-xs w-full text-end">{item.time}</div>
              </div>
            );
        })}
      </div>
    </>
  );
};

export default Lesson;
