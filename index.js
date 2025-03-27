const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

app.listen(PORT, () => console.log("server running at", PORT));
