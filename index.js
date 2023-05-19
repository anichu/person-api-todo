const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("colors");
require("dotenv").config();
const personRoutes = require("./routes/personRoutes");
const cors = require("cors");
const morgan = require("morgan");
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/person/", personRoutes);
app.use(morgan("dev"));

app.get("/", async (req, res) => {
	res.send("Hello World");
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
	console.log(`server is running on port ${port}`.bgRed.white);
});
