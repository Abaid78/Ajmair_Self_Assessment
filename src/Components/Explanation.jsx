import style from "./Explanation.module.css";
function Explanation({ toggle }) {
  return (
    <div className={style.background_color}>
      <button onClick={toggle}>close</button>
      <h1>Explanation</h1>
    </div>
  );
}
export default Explanation;
