const UserModel = require("../model/UserModel");

const addUser = async (req, res) => {
  try {
    const { username, mobileNumber } = req.body;

    const user = await UserModel.findOne({ mobileNumber });

    if (user) {
      return res.json({ isRegistered: true });
    }

    const path = req.file.filename;
    const newUser = new UserModel({
      username,
      mobileNumber,
      picture: path,
    });

    await newUser.save();

    return res.status(201).json({ message: "User added" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ message: "Internal Error Occurred" });
  }
};
const getUserById = async (req, res) => {
  try {
    // const data = await UserModel.findOne({ _id: req.params.id });
    const data = await UserModel.findOne({ mobileNumber });
// 
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ message: "Internal Error Occurred" });
  }
};

module.exports = { addUser, getAllUsers, getUserById };
