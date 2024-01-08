// skillData=[
//   {
//   skil:"html&css",
//   icon:"✌",
//   color:"red"
// },
// {
//   skil:"JS",
//   icon:"👍",
//   color:"blue"
// },
// {
//   skil:"React",
//   icon:"😊",
//   color:"yellow"
// },

// ]

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
        <SkillList />   
        
        </div>
        
       
    </div>
  );
}

function Avatar (){
return <div >
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
  return <div className="skill-list">
    <Skill skill="react" emoji="👍" color="red"/>
    <Skill skill="html&css" emoji="✌"color="green"/>
    <Skill skill="JavaScript" emoji="😊"color="yellow" />
    <Skill skill="Java" emoji="😊"color="blue" />
        </div>
  // console.log(props);
  // return (
  //   <p className="skill" style={{backgroundColor:props.color}}>{props.html}</p> 
  //   )
}
function Skill(props){
  console.log(props);
  return(
    <div className="skill" style={{backgroundColor:props.color}}>
      
      <span >{props.skill}</span>
      <span>{props.emoji}</span>  
      </div>
    
  ) 
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
