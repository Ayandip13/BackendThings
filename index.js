import express from "express"; // Import Express framework
import cookieParser from 'cookie-parser' // Middleware to parse cookies from incoming requests
import jwt from 'jsonwebtoken' // Library for handling JSON Web Tokens (JWT)

const app = express(); // Initialize Express app
app.use(cookieParser()); // Use cookie-parser middleware to handle cookies

// Route to generate and store a JWT in cookies
app.get("/", (req, res) => {
    const token = jwt.sign({email: "a@a.com"}, "secret"); // Generate JWT with payload {email: "a@a.com"} and secret key
    res.cookie("token", token); // Store the token in a cookie named "token"
    res.send('done'); // Respond to client
});

// Route to read and verify JWT from cookies
app.get('/read', (req, res) => {
    console.log(req.cookies.token); // Log the token from cookies

    res.send('Read page'); // Respond before verifying (should be moved after verification)

    const data = jwt.verify(req.cookies.token, "secret"); // Verify JWT using the same secret key
    console.log(data); // Log the decoded JWT data
});

app.listen(3000, () => {
    console.log("Server running on port 3000"); // Start the server and log the message
});



//That is how we use cookie.. 
//Cookie means some data which are needed to store in the browser from server for authentication purpose 