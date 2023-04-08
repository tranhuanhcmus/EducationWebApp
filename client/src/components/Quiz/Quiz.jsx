import React, { useState } from "react";

const Quiz = ({ data }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [questions, setQuestion] = useState(data);
  const [score, setScore] = useState(0);
  const [showKey, setShowKey] = useState(false);
  console.log(score);
  const handleClick = () => {
    if (currentQ < questions.length - 1) {
      setShowKey(false);
      return setCurrentQ((q) => q + 1);
    }

    setScore(0);
    questions.map((q) => {
      if (q.check == true) {
        setScore((score) => score + 10);
      }
    });
    setShowKey(false);
    setCurrentQ(0);
  };

  const handleChoose = (index) => {
    let newQuestions = [...questions];
    newQuestions[currentQ].answer = index;

    if (newQuestions[currentQ].keyIndex == newQuestions[currentQ].answer) {
      newQuestions[currentQ].check = true;
    } else newQuestions[currentQ].check = false;
    setShowKey(true);
    setQuestion((questions) => newQuestions);
  };

  return (
    <div className=" mx-auto w-[50%] p-4 ring-1 ring-slate-300  bg-white shadow-lg my-4 rounded-md">
      <h1 className=" uppercase text-center text-3xl font-[900] font-roboto w-full text-indigo-900">
        Quiz Lesson
      </h1>
      <div className="content flex justify-center flex-col gap-4">
        <h1 className="px-4 uppercase  text-lg font-[900] font-Bebas w-full text-black underline">
          Question {currentQ + 1}:
        </h1>
        <div className=" p-8 text-3xl text-amber-900 text-center no-underline font-note bg-yellow-400 rounded-md ring-8 ring-amber-900 break-word">
          {questions[currentQ].question}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-1 grid-cols-2 grid-row-2 auto-rows-max ">
          {questions[currentQ].options.map((item, index) => (
            <p
              key={index}
              className={`option p-2 flex justify-center items-center break-all text-md text-amber-900 font-note ${
                showKey
                  ? index == questions[currentQ].answer
                    ? questions[currentQ].check == true
                      ? "bg-green-300"
                      : "bg-red-300"
                    : ""
                  : ""
              } rounded-md ring-2 ring-slate-200 h-16 md:h-24 hover:cursor-pointer hover:ring-2 hover:ring-indigo-600`}
              onClick={() => handleChoose(index)}
            >
              {item}
            </p>
          ))}
        </div>

        {showKey && (
          <div className="p-4 text-xl text-amber-900 text-center no-underline font-note  rounded-md ring-2  break-word">
            {questions[currentQ].key}
          </div>
        )}

        <button
          className=" self-end py-2 bg-indigo-600 font-note font-bold md:text-sm text-xl text-white uppercase rounded-3xl md:w-[25%] w-[200px]  hover:bg-deep_purple_A201 hover:ring-yellow-400 ring-2 "
          onClick={handleClick}
        >
          {currentQ == questions.length - 1 ? "Again" : "Next >"}
        </button>
        <div className="list flex justify-center gap-4">
          {questions.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-5 h-5 rounded-full ring-1 ring-amber-400 ${
                  index == currentQ ? "bg-yellow-500" : "bg-white"
                } text-[0.75rem] text-indigo-900 flex justify-center items-center hover:cursor-pointer`}
                onClick={() => {
                  setCurrentQ(index), setShowKey(false);
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
