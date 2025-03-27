const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/JobGenie", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected!"));

// Define a User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});
const User = mongoose.model("User", userSchema);

// API endpoint to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to add a new user
app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));