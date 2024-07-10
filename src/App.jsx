import "./App.css";
import Quiz from "./Components/Quiz";
import { Pak_StudiesQuizData } from "./PakStudiesQuiz";
import { QuizData } from "./QuizData";
import { useState } from "react";
import MyComponent from "./Components/MyComponent";

function App() {
  const [quizData, setQuizData] = useState(Pak_StudiesQuizData);

  const updateQuizData = (newData) => {
    setQuizData(newData);
  };

  console.log("Current Quiz Data:", quizData);

  return (
    <>
      <MyComponent />
      <button onClick={() => updateQuizData(QuizData)}>Computer</button>
      <button onClick={() => updateQuizData(Pak_StudiesQuizData)}>
        Pak Studies
      </button>
      {quizData.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz} />
      ))}
    </>
  );
}

export default App;
