import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skillData=[
  {
  skill:"html&css",
  icon:"✌",
  color:"red"
},
{
  skill:"JS",
  icon:"👍",
  color:"blue"
},
{
  skill:"React",
  icon:"😊",
  color:"yellow"
},

]

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
      <SkillList />   
    </div>
  );
}

function Avatar (){
return <div>
  <img className="avatar" src="/image/btmn.png" alt ="Batman"></img>
</div>  
}
function Intro (){
  return (
    <div>
    <h1>Sen ✌</h1>
    <p className="data">Some text about me</p>
    </div>
  )
}
function SkillList (){
  return (
    <ul className="skill-list">
      {skillData.map((skill)=><Skill skillObj={skill} />)}
    </ul>
  )
}
function Skill(props){
  console.log(props);
  return(
    <li className="skill" style={{backgroundColor:props.skillObj.color}}>
      <span >{props.skillObj.skill}</span>
      <span>{props.skillObj.emoji}</span>  
    </li> 
  ) 
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
