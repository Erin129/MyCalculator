import { useState } from "react"
import "./App.css"

function App() {
  const [display, setDisplay] = useState("0");
  const [prevInput, setPrevInput] = useState(null); // Store the previous input for operations
  const [operator, setOperator] = useState(null); // Store the selected operator
  const [waitingForOperand, setWaitingForOperand] = useState(false); // Flag to indicate if we are waiting for the next operand
  const [expression, setExpression] = useState(""); // Store the full expression for display

  function handleDigit(digit){
    if(waitingForOperand){
      setDisplay(digit);
      setWaitingForOperand(false);
    }
    else{
      setDisplay(display === "0" ? digit: display+ digit); // Append digit to the current display
    }
  }

  function danleDecimal(){
    
  }

}

export default App
