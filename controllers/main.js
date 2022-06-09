

const CustomAPIError = require ('../errors/custom-error')
const login = async (req, res) => {


  // find the value that user enter
  const { username, password } = req.body;
  // check if password and username are there
if(!username || !password){
  throw new CustomAPIError('please enter a username and password',400)



}

  res.send('fake login ');
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
