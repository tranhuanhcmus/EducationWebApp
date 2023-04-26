import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";
import CommentList from "../components/CommentList";
import Quiz from "./../components/Quiz/Quiz";
import { useNavigate } from "react-router-dom";
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
    id: 1,
    image: "/anh5.png",
    name: "Lesson 1",
    time: "15:00",
  },
  {
    id: 2,
    image: "/anh1.png",
    name: "Lesson 2",
    time: "15:00",
  },
  {
    id: 3,
    image: "/anh1.png",
    name: "Lesson 3",
    time: "15:00",
  },
  {
    id: 4,
    image: "/anh1.png",
    name: "Lesson 4",
    time: "15:00",
  },
  {
    id: 5,
    image: "/anh1.png",
    name: "Lesson 5",
    time: "15:00",
  },
  {
    id: 6,
    image: "/anh1.png",
    name: "Lesson 6",
    time: "15:00",
  },
  {
    id: 7,
    image: "/anh1.png",
    name: "Lesson 7",
    time: "15:00",
  },
  {
    id: 8,
    image: "/anh1.png",
    name: "Lesson 8",
    time: "15:00",
  },
];
const questionBank = [
  {
    question:
      "The total length for the writing exam is 1 hour. How many minutes should you spend on the essay?",
    options: ["20", "30", "40", "60"],
    answer: -1,
    keyIndex: 2,
    key: "It is recommended to spend 40 mins on the essay and 20 mins on the graph / letter. The essay is longer and is worth more points",
    check: false,
  },
  {
    question:
      "The more you write in the essay, the more likely you are to get a higher score?",
    options: ["true", "false"],
    answer: -1,
    keyIndex: 1,
    key: "It's about quality, not quantity. You must exceed to 250 word minimum and have adequate support for your ideas, but writing a lot does not necessarily mean you will get a high score.",
    check: false,
  },
  {
    question:
      "You should start writing as soon as you have read the essay question ?",
    options: ["true", "false"],
    answer: -1,
    keyIndex: 1,
    key: "You should check you fully understand the question, brainstorm some ideas, and do a brief plan before you start writing.",
    check: false,
  },
  {
    question:
      "Your essay is judged on four criteria. Which one of these four criteria is incorrect ?",
    options: [
      "Task Response",
      "Coherence and Cohesion",
      "Academic Style",
      "Grammatical Range and Accuracy",
    ],
    answer: -1,
    keyIndex: 2,
    key: "It's 'Lexical Resource'. This refers to your vocabulary and how you use it.",
    check: false,
  },
  {
    question: "Spelling is not that important in IELTS writing?",
    options: ["true", "false"],
    answer: -1,
    keyIndex: 1,
    key: "It's very important as you are graded on your spelling.",

    check: false,
  },
  {
    question: "You can write all of your essay in capital letters if you like?",
    options: ["true", "false"],
    answer: -1,
    keyIndex: 0,
    key: "You can but there is no reason to unless you have very bad joined up writing. Writing in capitals takes some people longer.",
    check: false,
  },
];
const Lesson = () => {
  const lesson = {
    name: "Writing Band 5.0",
    author: "Harry Bui",
    video: "/video/lesson1.mp4",
    content:
      "This lesson will tell about some information and tips you should know in a writing test. Beside that i will analysis  an example writing test ",
    attachment: "Move to test",
    note: "this lesson is so interesting ...",
  };
  const [notes, setNotes] = useState(lesson.note);
  const handleWriteNote = (e) => {
    setNotes((notes) => e.target.value);
  };
  return (
    <>
      <div className="container flex justify-center">
        <div className="flex items-center flex-1 justify-center">
          <IconButton size="small" sx={buttonStyle}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <video width={"80%"} controls autoPlay="true" poster="/anh1.png">
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
        <div className="text-lg font-note font-[300] mt-3 text-left word-break md:m-4 m-6">
          {lesson.content}
        </div>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Test</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-justify md:m-4 m-6">
          <a href="" className="hover:text-indigo-600">
            {" "}
            {lesson.attachment}
          </a>
        </div>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Quiz</b>
          </h3>
        </div>
        <Quiz data={questionBank} />
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Notes</b>
          </h3>
        </div>
        <textarea
          className="text-lg font-note font-[300] mt-3 text-left md:m-4 m-6 w-[80%] "
          value={notes}
          onChange={handleWriteNote}
        ></textarea>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4 ">
            <b>Comments</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-justify md:m-4 m-6">
          <div className="mb-3">
            <textarea className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"></textarea>
            <div className="flex justify-end">
              <Button sx={{ ml: "auto" }} variant="contained">
                Comment
              </Button>
            </div>
          </div>
          <CommentList />
        </div>
      </section>
    </>
  );
};

const LessonList = ({ data }) => {
  const navigate = useNavigate();

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

      <div className="w-full p-2 grid grid-flow-col  sm:auto-cols-[50%]  md:auto-cols-[33%] auto-cols-[20%] items-center overflow-scroll gap-2">
        {list.map((item) => {
          if (item.name.toLowerCase().includes(key))
            return (
              <div
                className="item border-2 p-2 border-solid border-indigo-300 hover:-translate-y-1 hover:cursor-pointer hover:bg-slate-500 hover:text-amber-400 transition-all duration-200"
                key={item.id}
                onClick={() => navigate(`/lesson/${item.id}`)}
              >
                <img
                  className="object-cover object-center md:h-[100px] h-[132px] border-b-4 p-2 border-solid border-red-800"
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
