const express = require("express");
const users = express.Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require("../queries/users");
const { checkBoolean, checkName, validatePhoto } = require("../validations/checkUsers.js");

//Events controller to be used at a later point
const eventsController = require("./eventsController.js");
users.use("/:user_Id/events", eventsController);


// INDEX
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();

  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "Show All Users error" });
  }
});


// SHOW
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Show one User failed" });
  }
});

// CREATE
users.post("/", checkBoolean, checkName, validatePhoto, async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// Delete
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);

  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json("User not found");
  }
});

// UPDATE
users.put("/:id", checkName, checkBoolean, validatePhoto, async (req, res) => {
  const { id } = req.params;
  const updatedUser = await updateUser(id, req.body);
  res.status(200).json(updatedUser);
});


module.exports = users;