import PostMessage from "../models/postMessage.js";

//Logic to get all the posts
export const getPosts = async (req, res) => {
  //   res.send("This works");
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//logic to create a post
export const createPost = async (req, res) => {
  //   res.send("Post Creation");
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    //http://www.restapitutorial.com/httpstatuscodes.html - here you can check the meaning of 201, 400 number codes which show the status of the request.

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
