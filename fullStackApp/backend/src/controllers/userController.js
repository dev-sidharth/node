const { User, validateUser } = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//user signup
const signup = async (req, res) => {

  const { password, username, email } = req.body;

  const user = await User.findOne({username: username});
  if(user) return res.status(400).send('user already exists.')

  const newUser = new User(req.body);
  newUser.password = await bcrypt.hash(password, saltRounds);
  try {
    await newUser.save();
    return res.status(200).send("Signed up successfully.");
  } catch (error) {
    res.status(400).send("something went wrong");
  }
};

//user login
const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).send("no user found");

  const result = await bcrypt.compare(password, user.password);
  if(!result) return res.status(400).send('wrong password');

  return res.status(200).send('Login successfully.')
};

module.exports = { signup, login };
