import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";
import CommentList from "../components/CommentList";
import Quiz from "./../components/Quiz/Quiz";
import { useLocation } from "react-router-dom";
import { makeRequest } from "./../utils/axios";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../utils/Loading";
import { getImage, getVideo } from "../utils/fetchData";
import utils from "./../utils/utils";

const buttonStyle = {
  border: "solid 1px black",
  color: "black",
  backgroundColor: "transparent",
  "&:hover": {
    color: "white",
    backgroundColor: "black",
  },
};

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
  const currentUser = useSelector((state) => state.auth.user);

  const location = useLocation();
  console.log(location.state);
  const CID = location.state.CID;
  const LID = location.state.LID;
  const author = location.state.author;
  const courseImage = location.state.courseImage;
  const [image, setImage] = React.useState("not yet");

  const [data, setData] = useState([]);
  const [position, setPosition] = useState(null);
  const [notes, setNotes] = useState("");
  const [bending, setBending] = useState(true);
  const [videoURL, setVideoURL] = useState("");

  const [cmt, setCmt] = useState("");
  const [key, setKey] = React.useState("");

  const queryClient = useQueryClient();

  // click button to change lesson
  const handleCLick = (arg) => {
    if (typeof arg !== "number") {
      switch (arg) {
        case "next":
          if (position < data.length - 1) setPosition((pos) => pos + 1);
          break;

        case "prev":
          if (position > 0) setPosition((pos) => pos - 1);
          break;

        default:
          return;
      }
    } else setPosition((pos) => arg);
  };

  //fetching lessons and loadImageCourse
  useEffect(() => {
    const loadImage = async () => {
      const newImage = await getImage(`${courseImage}`);
      setImage(newImage);
    };
    const fetchLesson = () => {
      setBending(true);
      makeRequest({
        url: `/course/${CID}`,
        method: "get",
      })
        .then((res) => setData(res.data))
        .then(() => setBending(false))
        .then(() => setPosition(LID))
        .catch(() => console.log("Error when get lessons"));
    };
    fetchLesson();
    loadImage();
  }, []);

  //change on position (when change lesson)
  useEffect(() => {
    const loadVideo = async () => {
      const URL = await getVideo(data[position].VIDEO);
      setVideoURL(URL);
    };

    const fetchingNotes = async () => {
      const res = await makeRequest({
        url: "/ln",
        method: "post",
        data: {
          LID: data[position].LID,
          ID: currentUser.ID,
        },
      });
      if (res.data.length > 0) {
        setNotes(res.data[0].CONTENT);
      } else setNotes("");
    };

    if (!bending) {
      loadVideo();
      fetchingNotes();
    }
  }, [position]);

  const handleSaveNote = async () => {
    //check have note?
    var res = await makeRequest({
      url: "/ln",
      method: "post",
      data: {
        LID: data[position]?.LID,
        ID: currentUser.ID,
      },
    });
    const haveNote = res.data.length > 0;
    const NID = currentUser.ID + data[position].LID;
    if (!haveNote) {
      //add note
      res = await makeRequest({
        url: "/an",
        method: "post",
        data: {
          LID: data[position].LID,
          ID: currentUser.ID,
          NID: NID,
          Content: notes,
        },
      });
    } else {
      //update note
      res = await makeRequest({
        url: "/un",
        method: "put",
        data: {
          LID: data[position].LID,
          ID: currentUser.ID,
          NID: NID,
          Content: notes,
        },
      });
    }
    console.log(res);
    alert(res.data[0]?.RESULT);
  };

  const saveComment = async () => {
    const currentDate = (+new Date()).toString(36);
    const CMTID = currentDate + CID + currentUser.ID;
    const Content = cmt;

    const res = await makeRequest({
      url: "/accmt",
      method: "post",
      data: {
        CmtID: CMTID.slice(0, 22),
        Content: `Lesson ${data[position].NAME}: ${Content}`,
        CID: CID,
        ID: currentUser.ID,
      },
    });
    return res;
  };
  const { mutate: addComment } = useMutation(saveComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  return !bending ? (
    <div>
      <div className="container flex justify-center">
        <div className="flex items-center flex-1 justify-center">
          <IconButton
            size="small"
            sx={buttonStyle}
            onClick={() => handleCLick("prev")}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div className="h-[100%]">
          <video
            key={videoURL}
            height="100%"
            width="80%%"
            controls
            autoPlay
            poster={image}
            className="mx-auto"
          >
            <source src={videoURL} type="video/mp4" />
          </video>
        </div>
        <div className="flex items-center flex-1 justify-center">
          <IconButton
            size="small"
            sx={buttonStyle}
            onClick={() => handleCLick("next")}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
      <div className="playlist my-4">
        <div className=" mx-3 pt-2 search text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <a className="text-2xl font-Bebas uppercase mr-4         ">
            <b>{data[position].NAME}</b>
          </a>
          - <h4 className="ml-4 text-lg">{author}</h4>
        </div>
        <>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1"
            placeholder="Enter name of lesson"
            onChange={(e) => setKey(e.target.value)}
          />

          <div className="w-full p-2 grid grid-flow-col  sm:auto-cols-[50%]  md:auto-cols-[33%] auto-cols-[20%] items-center overflow-scroll gap-2">
            {data.map((item, index) => {
              if (item.NAME.toLowerCase().includes(key))
                return (
                  <div
                    className="item border-2 p-2 border-solid border-indigo-300 hover:-translate-y-1 hover:cursor-pointer hover:bg-slate-500 hover:text-amber-400 transition-all duration-200"
                    key={index}
                    onClick={() => handleCLick(index)}
                  >
                    <img
                      className="object-cover object-center md:h-[100px] h-[132px] border-b-4 p-2 border-solid border-red-800"
                      src={image}
                      width={"inherit"}
                      alt="thumbnail-lesson"
                    />
                    <h6>
                      <b>{item.NAME}</b>
                    </h6>
                    <div className="text-xs w-full text-end">
                      {item.DURATION}
                    </div>
                  </div>
                );
            })}
          </div>
        </>
      </div>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Content</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-left word-break md:m-4 m-6">
          {data[position].CONTENT}
        </div>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4         ">
            <b>Test</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-center  duration-300 px-3 py-2 hover:text-yellow-400 hover:font-bold bg-indigo-500 w-[400px] sm:w-[90%] mx-auto">
          <a href={data[position].ATTACHMENT} target={"_blank"}>
            {" "}
            <i className="mr-2 fa-solid fa-graduation-cap"></i>
            MOVE TO TEST OF {data[position].NAME}
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
        <div className="w-full flex items-center">
          <textarea
            className="text-lg font-note font-[300] mt-3 text-left md:m-4 m-6 w-[80%] "
            value={notes}
            onChange={(e) => {
              setNotes((notes) => e.target.value);
            }}
          ></textarea>
          <Button
            className="ml-auto h-8"
            variant="contained"
            onClick={handleSaveNote}
          >
            Save
          </Button>
        </div>
      </section>
      <section className="container">
        <div className="mx-3 pt-2 text-indigo-500 flex items-center border-b-4 border-solid border-red-800 ">
          <h3 className="text-2xl font-Bebas uppercase mr-4 ">
            <b>Comments</b>
          </h3>
        </div>
        <div className="text-lg font-note font-[300] mt-3 text-justify md:m-4 m-6">
          <div className="mb-3">
            <textarea
              value={cmt}
              onChange={(e) => setCmt(e.target.value)}
              className="m-0 p-2 text-lg font-note font-[300] text-justify  w-full h-32"
            ></textarea>
            <div className="flex justify-end gap-3">
              <button
                className="px-3 py-2 mt-2  text-center bg-slate-300 rounded-md  ring-slate-500 hover:ring-2"
                onClick={() => setCmt("")}
              >
                Cancel
              </button>
              <button
                className="px-3 py-2 mt-2  text-center bg-indigo-500 rounded-md  ring-slate-500 hover:ring-2"
                onClick={() => {
                  addComment();
                  setCmt("");
                }}
                disabled={!utils.checkUser(currentUser)}
              >
                Comment
              </button>
            </div>
          </div>
          <CommentList CID={CID} />
        </div>
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default Lesson;
