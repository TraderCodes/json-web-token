const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');
const login = async (req, res) => {
  // find the value that user enter
  const { username, password } = req.body;
  // check if password and username are there
  if (!username || !password) {
    throw new CustomAPIError('please enter a username and password', 400);
  }
  const id = new Date().getDate();
  // return token
  // pass in secret in the second param
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: 'user created account', token });
};
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: 'Hello bitch', secret: `here is your key ${luckyNumber}` });
};
module.exports = {
  login,
  dashboard,
};
