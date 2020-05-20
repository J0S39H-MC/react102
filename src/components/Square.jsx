import React from 'react'
// import ReactDom from 'react-dom'

//In React, function components are a simpler way to write components that only contain a render method and don’t have their own state.
//Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered.
//Function components are less tedious to write than classes, and many components can be expressed this way.

// Square is controlled component and there doesn't need to be defined as class since it only accepts prop args and returns out .jsx

function Square(props){  
        return (
         // Board passes props to the Square component via it's constructor
         // onClick and value props are being passed to the component
         <button className="square" onClick={props.onClick}>
           {props.value}
         </button>
       );     
}

 export default Square