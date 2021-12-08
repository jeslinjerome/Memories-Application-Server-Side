import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

//like "http://localhost:5000/posts"
router.get("/", getPosts);
router.post("/", createPost);

export default router;

// // like "http://localhost:5000/posts"
// router.get("/", (req, res) => {
//     res.send('This Works');
// });
/**** we do it like this but this can make the logics in many numbers and that can mess the code 
so for this we make the seperate controllers for the logis.for clean and readable logics****/
