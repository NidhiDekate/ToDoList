import React, { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList';

const App = () =>{
const [curText, upText] = useState();
const [cuList, upList] = useState([]);
const DisplayText =(event)=>{
  upText(event.target.value);
}
const listOfItems = () =>{
  upList((oldItems) =>{
    return [...oldItems, curText];
  } );
  upText(" ");
};
const deleteItems = (id) =>{
console.log("hkds");
upList((oldItems) =>{
  return oldItems.filter((arrElement, index) =>{
      return index !== id;
  })
})

} 
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="heading">Wonder To Dos</h1>
          <br />
          <input type="text" className="inputFeild" placeholder="Add Items" value={curText} onChange={DisplayText}/>
          <button className="inputbtn" onClick={listOfItems}> Add </button>
          <ol>{
              cuList.map((itemVal, index) => {
                return <ToDoList 
                          text = {itemVal} 
                          id={index}
                          key={index}
                          onSelect={deleteItems}
                          />;
              })}
          </ol>
        </div>
      </div>
      <div className="todointro">
      <p>Having a to-do-list its not only about organizing the daily task but also keeping track of progress and completing them to meet goals.But finding the best task management software system can be overwhelming.Hence we present you the
          <b className="logo">WonderToDos</b></p>
      </div>
    </>
  );
}

export default App;