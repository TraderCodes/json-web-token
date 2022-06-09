const login = async (req, res) => {
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
