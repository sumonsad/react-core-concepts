import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Bipul','Junayed','Abir','Raiyaan'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1 style={{color:'yellow'}}>React Practice</h1>
        <Person name = {name[0]} profession = "Student"></Person>
        <Person name="Junayed" profession = "Student"></Person>
        <Person name="Abir" profession = "Student"></Person>
        <Person name = "Raiyaan" profession = "Cute Baby"></Person>
        
      </header>
    </div>
  );
}

function Person(props){
  var personStyle = {
    border:'2px solid red',
    width:'400px',
    margin:'5px',
    padding:'5px'
  }
  return (
  <div style= {personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Profession: {props.profession}</h3>
  </div>
  )
}

export default App;
