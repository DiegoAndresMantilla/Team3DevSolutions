const User = require("../model/User");

const createUser = (req, res) => {
  let user = new User({
    id_user: req.body.id_user,
    identification: req.body.identification,
    name_user: req.body.name_user,
    lastname_user: req.body.lastname_user,
    address: req.body.address,
    phone: req.body.phone,
    password: req.body.password,
  });
  user.save((err, use) => {
    err && res.status(500).json(err.message);
    res.status(200).json(use);
  });
};

const getUsers = (req, res) => {
  User.find((err, use) => {
    err && res.status(500).send(err.message);
    res.status(200).json(use);
  });
};

const getIdUser = async (req, res) => {
  try {
    const userObj = await User.findOne({
      id_user: req.query.id_user,
    });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json({
        identification: userObj.identification,
        userid: userObj.id_user,
        cedula: userObj.identification,
        name: userObj.name_user,
        lastName: userObj.lastname_user,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getIdUsers = async (req, res) => {
  try {
    const userObj = await User.findOne({
      id_user: req.query.id_user,
      identification: req.query.identification,
    });
    if (userObj == null) {
      res.status(400).json("User not found");
    } else {
      res.json({
        userid: userObj.id_user,
        cedula: userObj.identification,
        name: userObj.name_user,
        lastName: userObj.lastname_user,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.query.id_user;
    const updatedUser = await User.findOneAndUpdate(
      { id_user: id },
      {
        identification: req.body.identification,
        name_user: req.body.name_user,
        lastname_user: req.body.lastname_user,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.send(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const id=req.query.id_user;
    const user = await User.findOneAndDelete({
      id_user: id});
    if (!user) {
      return res.status(404).send("Product not found");
    }
    res.send(`User with id ${id} deleted`); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getIdUsers,
  getIdUser,
};
