const { toyCollection, blogsCollection } = require("./mongodb");

const getBlogs = async () => {
  const blogs = await blogsCollection().find().toArray();
  return blogs;
};

const blogById = async (id) => {
  const blog = blogsCollection.findOne({ _id: new ObjectId(id) });
  return blog;
};

const getToys = async () => {
  const toys = await toyCollection().find().toArray();
  return toys;
};

module.exports = {
  getBlogs,
  blogById,
  getToys,
};
