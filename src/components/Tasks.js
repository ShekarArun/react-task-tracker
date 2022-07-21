
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.msg}</h3>))}
    </>
  )
}

export default Tasks
