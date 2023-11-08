import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>First Name: {props.name}</h1>
    <h2>Last Name: Doe</h2>
    <h2>Age: 30</h2>
    </>
  );
}

const App = () => {

  return (
    <div className="App">
      <Person name = "John"></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

export default App;
