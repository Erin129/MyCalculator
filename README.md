# Full Stack Calculator
<p>A simple full-stack calculator application that performs basic arithmetic operations. The project uses a React frontend to collect user input and display results, while a Node.js and Express backend handles calculations and input validation through a REST API. </p>

-----------

<h3>Features</h3>

-Addition, subtraction, multiplication, and division

-Input validation to ensure valid numbers are provided

-Error handling for invalid inputs and division by zero

-React frontend connected to an Express backend through API requests

-----------
<h3>Technologies Used</h3>

*Frontend*

-React

-JavaScript

-HTML

-CSS

-Vite

*Backend*

-Node.js

-Express.js

-REST API

-----------

<h3>Project Structure</h3>
<img width="821" height="401" alt="image" src="https://github.com/user-attachments/assets/5d7530dc-1642-43d5-87ad-0a5b605a1e8e" />

-----------

## Getting Started

<h3>Prerequisites</h3>

-Node.js and npm installed

-Git (optional)

-----------

<h3>1. Clone the Repository</h3>

-git clone https://github.com/YOUR-USERNAME/MyCalculator.git

-cd MyCalculator

-----------

<h3>2. Set Up the Backend</h3>

-cd backend

-npm install

-node server.js

-The backend server should start on: http://localhost:3000

-----------

<h3>3. Set Up the Frontend</h3>

-cd frontend

-npm install

-npm run dev

-Open the local URL displayed in your terminal (typically http://localhost:5173 or another available port).

-----------

## API Endpoint

The backend provides a REST API endpoint for performing calculations via POST /api/calculate.

Example Request:

<img width="232" height="180" alt="image" src="https://github.com/user-attachments/assets/5bd5dc42-1a69-468d-a5e0-e8443f6ea7bc" />

Example Result:

<img width="165" height="111" alt="image" src="https://github.com/user-attachments/assets/7a7ca5fd-c7ab-4f32-9a79-7766cc8b208d" />

Supported operators: +, -, *, /

The API also validates inputs and returns appropriate error responses for invalid operations, non-numeric inputs, and division by zero.

-----------

## Future Iterations

-Improve the calculator frontend interface and styling

-Add automated backend tests

-Support additional mathematical operations


 *Enjoy my bare-bones calculator app :)*


