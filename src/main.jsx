import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'  
import Todo from './To-do-Task/Todo'   // task 4
//import Cards from './Shopping-card-Task/Shopping-card'  //task 2 done
//import MainContent from './Component-Task/component'  //task 3 done
//import  Mainroute from './routing.jsx'
//import ParentComp from './context.jsx'
//import  Mainroute from './Routing-Task/routingTask'  //task 5 done
//import MainContext from './Context-Task/context.jsx'  //task 6 done
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Todo/>
  </React.StrictMode>,
)
