import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function MyComponent() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Component</button>
      <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
        <div className="box">This is a transition component</div>
      </CSSTransition>
    </div>
  );
}

export default MyComponent;
