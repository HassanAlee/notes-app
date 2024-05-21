const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// register controller
const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
// login controller
const loginUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).json({ message: "Wrong email or password" });
    }
    const validPassword = bcrypt.compareSync(
      req.body.password,
      existingUser.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong email or password" });
    }
    const { password: pass, ...rest } = existingUser._doc;
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { registerUser, loginUser };
