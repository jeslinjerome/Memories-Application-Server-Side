import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
//every routs in postRouts is gona start with /post

const app = express();

app.use("/posts", postRoutes);
//every routs in postRouts is gona start with /post we addded the prefex post like "http://localhost:5000/posts"

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(express.json()); //use middleware to remove undefine from the console

const CONNECTION_URL =
  "mongodb+srv://jeslin:caglar0511@cluster0.eihyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

//database connected online on cluster atlas
//go to: https://www.mongodb.com/cloud/atlas
