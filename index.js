import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3100;

// Middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Handle GET request to render the initial form
app.get("/", (req, res) => {
    res.render("index", { numOfletters: null }); // Render with no data initially
});

// Handle POST request to calculate the number of letters
app.post("/submit", (req, res) => {
    const firstName = req.body["fname"];
    const lastName = req.body["lname"];

    if (!firstName || !lastName) {
        return res.render("index", { numOfletters: null }); // Return to the form if input is empty
    }

    const numOfLetters = firstName.length + lastName.length;
    res.render("index", { numOfletters: numOfLetters });
});

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
