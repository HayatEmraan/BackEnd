const verifyAdmin = async (req, res, next) => {
  const filter = req.decoded;
  const adminFind = await usersDB.findOne({ email: filter.email });
  if (adminFind.role === "admin") {
    next();
  } else {
    return res.status(403).json({ error: true, message: "forbidden access" });
  }
};

module.exports = verifyAdmin;
