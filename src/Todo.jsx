// export default function Todo({ task }) {
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         <li>Task: {task}</li>
//         <li>Build a Todo App</li>
//         <li>Deploy to Production</li>
//       </ul>
//     </div>
//   );
// }
export default function ToDo({ task , isDone}) {
    if(isDone === true){
        return <li>Done: {task}</li>
    }
    else{
        return <li>Pending: {task}</li>
    }
}