import "./Superhero.css";
import {useState} from 'react'
const imgDefault= "https://st5.depositphotos.com/17433220/73304/i/450/depositphotos_733041078-stock-photo-silhouette-adult-man-male-avatar.jpg"
const detailsDefault="aucun detail sur ce hero"

export default function Hero({ className = "hero",img=imgDefault,details=detailsDefault, ...props }) {
  const [toggleDetail,setToggleDetail]= useState(false);
  return (
    <div className={className}>
      <h2>{props.name}</h2>
      <img alt={props.name} src={img} />
      <p> {props.description} </p>
      Film:{" "}
      {(props.films && (
        <ul>
          {props.films.map((film: string) => (
            <li key={props.id}>{film}</li>
          ))}
        </ul>
      )) ||
        "aucun film pour ce heroooos"}
        <button onClick={()=>setToggleDetail((dts)=>!dts)}>
          
           {toggleDetail ? "Hide Details" : "Show Detail"}</button>
           {" "}
           {toggleDetail &&  <div style={{whiteSpace:"pre-line", marginTop:"10px"}}>{details}</div>}
    </div>
  );
}
