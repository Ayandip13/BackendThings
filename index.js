import express from "express";
import { path } from "express/lib/application";

const app = express();

app.use(express.json()); //it's a middleware. We use this to parse the JSON data
app.use(express.urlencoded({ extended: true })); //this used to parse the form data(like html form submission)
app.use(express.static(path.join(__dirname, "public"))); //This line configures Express to serve static files from the "public" folder. 
// It ensures that files like CSS, images, and JavaScript can be accessed directly via the browser.

app.set("view-engine", "ejs");

const PORT = 3000;

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.send("About page");
});

app.listen(PORT, () => {
  console.log("Server stared at :", PORT);
});
