const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
// register controller
const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { registerUser };
