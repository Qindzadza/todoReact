export const Task=(props)=>{
    return (
        <div className='task' style={{backgroundColor: props.completed ? "green" : "white"}}> 
        <h1>{props.taskName}</h1>
        <butt onClick={()=>props.completeTask(props.id)}>Complete</butt>
        <button onClick={()=>props.deleteTask(props.id)}>X</button>
      </div>
    )
}