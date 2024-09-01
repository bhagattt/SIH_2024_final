import React, { useState, useRef } from "react";
import "./Quiz2.css";
import { Link } from "react-router-dom";
import { data } from "../assests/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        optionArray[data[index].ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setLock(false);
      optionArray.forEach((option) => {
        option.current.classList.remove("wrong", "correct");
      });
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    optionArray.forEach((option) => {
      option.current.classList.remove("wrong", "correct");
    });
  };

  return (
    <div className="containerq">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={resetQuiz}>Reset</button>
          <Link to="/quizzes" className="home-link">
            Quiz Page
          </Link>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {data[index].question}
          </h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {data[index].option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {data[index].option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {data[index].option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {data[index].option4}
            </li>
          </ul>
          <button onClick={nextQuestion}>Next</button>
          <div className="index">
            {index + 1} of {data.length} Questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
