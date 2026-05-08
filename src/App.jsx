import './App.css'

function App() {
  return (
    <>
      <h1>vite+ react</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Developer name="munna"></Developer>
      <Developer name ="tahajib"></Developer>
      <Developer></Developer>
    </>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <>
      <h3>Developer</h3>
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
