import './App.css'


function App() {
  return (
    <>
      <h1>vite+ react</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </>
  )
}
function Person() {
  const age = 17;
  const name = 'munna';
  return (
    <p>i am a person : {name} {age}
    </p>
  )
}
export default App