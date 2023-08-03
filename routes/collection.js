const express = require("express");
const router = express.Router();
const { getBlogs, blogById, getToys } = require("../database/operations");

router.get("/get-toys", async (req, res) => {
  try {
    const toys = await getToys();
    res.send({ msg: "success", status: "200", data: toys });
  } catch (error) {
    res.send({ msg: "error", status: "500", error: error });
  }
});

router.get("/get-blogs", async (req, res) => {
  try {
    const blogs = await getBlogs();
    res.send({ msg: "success", status: "200", data: blogs });
  } catch (error) {
    res.send({ msg: "error", status: "500", error: error });
  }
});

router.get("/get-blog/:id", async (req, res) => {
  try {
    const blog = await blogById(req.params.id);
    res.send({ msg: "success", status: "200", data: blog });
  } catch (error) {
    res.send({ msg: "error", status: "500", error: error });
  }
});

module.exports = router;
