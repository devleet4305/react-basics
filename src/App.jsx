import './App.css'
import ToDo from './Todo.jsx'

function App() {
  return (
    <>
      <h1>vite+ react</h1>
      <ToDo></ToDo>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Developer name="munna"></Developer>
      <Developer name ="tahajib"></Developer>
      <Developer name="rahim"></Developer>
      <Salami event= "eid"></Salami>
    </>
  )
}

function Salami(props) {
  return (
    <div className='student'>
      <p>Salami For: {props.event}</p>
      <p>Amount</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <>
      <h3>Developer: {props.name}</h3>
      <p>Technology</p>
    </>
  )
}

function Person() {
  const age = 17;
  const name = 'munna';
  const personStyle = {
    color: 'purple',
    border: '1px solid purple',
    borderRadius: '8px',
    padding: '12px'
  };

  return (
    <p style={personStyle}>i am a person : {name} {age}</p>
  )
}

export default App
