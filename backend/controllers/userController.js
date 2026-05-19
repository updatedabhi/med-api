const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = { getUsers };
