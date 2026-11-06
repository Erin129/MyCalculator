import { useState } from "react"
import "./App.css"

function App() {
  const [input1, setInput1] = useState("");
  const[ input2, setInput2]=useState("");
  const[operator, setOperator]=useState("+");//default operator is addition
  const[result, setResult]=useState(null);//result is null until user clicks calculate button
  const [error, setError]=useState("");

  //send user inputs to backend for calculations
  async function calculate(){
    setResult(null);
    setError("");

    //make sure both inpputs are provided
    if(input1.trim() === ""|| input2.trim() === ""){
      setError("Please provide both inputs.");
      return;
    }

    try{
      const response = await fetch("http://localhost:3000/api/calculate", {
        method: "POST", //send a POST request to the backend
        headers:{
          "Content-Type": "application/json", //send JSON data
        },
        body: JSON.stringify({
          input1: Number(input1),
          input2: Number(input2),
          operator: operator,
        }),
      }
    );

    const data = await response.json(); //parse the JSON response from the backend

    //handle errors from the backend
    if(!response.ok){
      setError(data.error);
      return;
    }

    //display the result from the backend
    setResult(data.result);
  }
  catch(err){
    setError("Unable to connect to backend server");
  }  
  }


return (
  <div className = "container">
    <h1>My Calculator</h1>
    <div className="calculator">
      <input
        type="number"
        placeholder="Enter first number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <select value={operator} 
      onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        placeholder="Enter second number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      
      <button onClick={calculate}>Calculate</button>

      {result !== null && (<h2>Result: {result}</h2>)}
      {error && (<h2 className="error">{error}</h2>)} {/*display error message if there is an error*/}

    </div>
  </div>
);
}

export default App;
