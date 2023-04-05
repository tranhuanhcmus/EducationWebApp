import React, { useState } from "react";

const Quiz = ({ data }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [questions, setQuestion] = useState(data);
  const [score, setScore] = useState(0);
  console.log(score);
  const handleClick = () => {
    if (currentQ < questions.length - 1) {
      return setCurrentQ((q) => q + 1);
    }

    setScore(0);
    questions.map((q) => {
      if (q.check == true) {
        setScore((score) => score + 10);
      }
    });
  };

  const handleChoose = (index) => {
    let newQuestions = [...questions];
    newQuestions[currentQ].answer = index;

    if (newQuestions[currentQ].key == newQuestions[currentQ].answer) {
      newQuestions[currentQ].check = true;
    } else newQuestions[currentQ].check = false;

    setQuestion((questions) => newQuestions);
  };

  return (
    <div className=" my-2 p-4 container  bg-amber-950/70 shadow-sm">
      <h1 className=" uppercase text-center text-3xl font-[900] font-roboto w-full text-yellow-300">
        Quiz Lesson
      </h1>
      <div className="content flex justify-center flex-col gap-4">
        <h1 className="px-4 uppercase  text-2xl font-[900] font-Bebas w-full text-sky-500 underline">
          Question {currentQ + 1}:
        </h1>
        <div className=" p-8 text-3xl text-amber-900 text-center no-underline font-note bg-yellow-400 rounded-md ring-8 ring-amber-900 break-all">
          {questions[currentQ].question}
        </div>
        <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-row-2 auto-rows-max ">
          {questions[currentQ].options.map((item, index) => (
            <p
              key={index}
              className={`option p-2 flex justify-center items-center break-all text-md text-amber-900 font-note ${
                index == questions[currentQ].answer
                  ? "bg-amber-400/80"
                  : "bg-amber-200"
              } rounded-md ring-2 ring-yellow-200 h-16 md:h-24 hover:cursor-pointer hover:bg-amber-400/80`}
              onClick={() => handleChoose(index)}
            >
              {item}
            </p>
          ))}
        </div>

        <button
          className="px-3 py-2 bg-green-500 font-note font-bold text-2xl uppercase rounded-xl w-[75%] md:w-[320px] self-center hover:bg-green-500/80 hover:ring-yellow-400 ring-4"
          onClick={handleClick}
        >
          {currentQ == questions.length - 1 ? "Submit" : "Next"}
        </button>
        <div className="list flex justify-center gap-4">
          {questions.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-5 h-5 rounded-full ring-1 ring-amber-400 ${
                  index == currentQ ? "bg-yellow-500" : "bg-white"
                } text-[0.75rem] text-indigo-900 flex justify-center items-center hover:cursor-pointer`}
                onClick={() => setCurrentQ(index)}
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
