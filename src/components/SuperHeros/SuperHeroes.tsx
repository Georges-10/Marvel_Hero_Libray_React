import "./SuperHeroes.css";

export default function SuperHeros(props) {
  return (
    <div className="heros">
    {props.children}
    </div>
  );
}
