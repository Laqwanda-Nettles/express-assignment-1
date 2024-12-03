import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.post("/data", (req, res) => {
  res.type("json");
  res.send(`{
        "name": "Monkey D. Luffy",
        "crew": "Straw Hat Pirates",
        "title": "captain",
        "age": 19
        }`);
});

app.listen(3000, () => {
  console.log("Server Intialized on Port 3000!");
});
