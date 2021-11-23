const ctrluser = {},
  User = require("../models/user");

ctrluser.create = async (req, res) => {
  const newuser = new User({
    user: req.body.user,
    status: req.body.status
  });
  await newuser.save();
  res.json({
    msg: "User created successfully",
    status: true  
  });
};
ctrluser.list = async (req, res) => {
  const user = await User.find();
  //console.log("users", users);

  res.json(user);
};
ctrluser.update = async (req, res) => {
  const { _id, user, } = req.body;
  await User.findOneAndUpdate(
    { _id: _id },
    { 
      user: user,
    }
  );
  res.json({ status: true });
};
ctrluser.delete = async (req, res) => {
  const { _id } = req.params;
  const users = await User.deleteOne({ _id: _id });
  res.json({ status: true });
};
ctrluser.search = async (req, res ) => {
  console.log(req.body.user)
  const user = await User.find( { user : { $regex: ".*" + req.body.user + ".*" } })
  res.json(user)
}
ctrluser.active = async (req, res) => {
  console.log(req.body)
  const { _id, status } = req.body;
  await User.findOneAndUpdate(
    { _id: _id },
    { 
      status: status
    }
  );
  res.json({ status: true });
};
ctrluser.searchget = async (req, res ) => {
  console.log(req.params.user)
  const user = await User.find( { user : { $regex: ".*" + req.params.user + ".*" } })
  res.json(user)
}
module.exports = ctrluser;