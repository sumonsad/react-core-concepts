import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const student = ['Bipul','Junayed','Abir','Raiyaan','Shohab','Babu'];
  const products = [
    {name:'photoshop',price:'$99.9'},
    {name:'Illustrator',price:'$90.9'},
    {name:'Adobe Reader',price:'80.9'}
  ]
  // const productNames = products.map(product => product);
  // console.log(productNames);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1 style={{color:'yellow'}}>React component</h1>
          <Counter></Counter>
          <Users></Users>
        <ul>
          {
            student.map(student=><li>{student}</li>)
          }
        </ul>
          {
            products.map(product=><Product product={product}></Product>)
          }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name = {student[0]} profession = "Student"></Person>
        <Person name="Junayed" profession = "Student"></Person>
        <Person name="Abir" profession = "Student"></Person>
        <Person name = "Raiyaan" profession = "Cute Baby"></Person>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    width:'200px',
    height:'200px',
    float:'left'
  }
  const {name, price} = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
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
