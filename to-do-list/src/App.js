
import './App.css';
import  {useState} from "react";
import {Task} from "./Task"

function App() {
  const [todoList, setTodoList]=useState([]);
  const [newTask, setNewTask]=useState("");
  const handelChange=(event)=>{
    setNewTask(event.target.value);
  }
  const addTask=()=>{
    const task= {
      id:todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName: newTask,
      
    };
    setTodoList(task.taskName !== "" ? [...todoList,task]: todoList);
    
  }
  const deleteTask=(id)=>{
    // const newTodoList= todoList.filter((task)=>{
      // if(task===taskName){
      //   return false
      // }else {
      //   return true
      // }
     
    // })
    // setTodoList(newTodoList)
    // meore gze
    setTodoList(todoList.filter((task)=>task.id!==id))
  }
  const completeTask=(id)=>{
    setTodoList(todoList.map((task)=>{
      if(task.id===id){
        return {...task,completed: true}
      }else{
        return task
      }
    }))
  }
  return (
    <div className="App">
     <div className="addTask">
      <input onChange={handelChange}/>
      <button onClick={addTask}>Add Task</button>
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return <Task  taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>
        // return <div className='task'> 
        //   <h1>{task.taskName}</h1>
        //   <button onClick={()=>deleteTask(task.id)}>X</button>
        // </div>
      })}
     </div>
    </div>
  );
}

export default App;
