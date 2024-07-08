import "./App.css";
import Quiz from "./Components/Quiz";
import { Pak_StudiesQuizData } from "./PakStudiesQuiz";
import { QuizData } from "./QuizData";
import { useState } from "react";
import MyComponent from "./Components/MyComponent";
function App() {
  const [QuizDataa, setQuizData] = useState(Pak_StudiesQuizData);
  console.log(Pak_StudiesQuizData);
  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };
  function set(value) {
    setQuizData(value);
  }
  console.log("App Component");

  return (
    <>
      <MyComponent />
      <button onClick={() => set(QuizData)}>Computer</button>
      <button onClick={() => set(Pak_StudiesQuizData)}>Pak Studies</button>
      {QuizDataa.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </>
  );
}

export default App;
