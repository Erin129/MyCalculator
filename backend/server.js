const express = require('express'); // Import the express library (server and API routes)
const cors = require('cors'); //imports cors (allows requests from frontend)

const app = express();
const PORT = 3000;
//middleware
app.use(cors());
app.use(express.json()); //allows express to parse JSON data

//create first test endpoint
app.get("/api/health", (req, res) => {
    res.json({status: "Calculator api is running yay!" });
});

//write main post endpoint for calculator. this will take in two numbers and an operation, provide input validation, and return the result of the operation
app.post("/api/calculate", (req, res) => {
    const {input1, input2, operator} = req.body;

    //input validation
    if(
        typeof input1 !== "number" || typeof input2 !== "number"
        || !Number.isFinite(input1) || !Number.isFinite(input2)
    )
    {
        return res.status(400).json({error: "Invalid input. Please provide two valid numbers.", });
    }


    let ans;

    //code the basic calculator operations - add more later
    switch(operator){
        case "+":
            ans = input1 + input2;
            break;

        case "-":
            ans=input1-input2;
            break;

        case "*":
            ans=input1*input2;
            break;

        case "/":
            if(input2 === 0){
                return res.status(400).json({error: "Cannot divide by zero.", });
            }
            ans = input1/input2;
            break;

        default:
            return res.status(400).json({error: "Invalid operator.", });
    }

    res.json({result: ans});
});


//make sure to have listen at the end of the file so that the server listens for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});