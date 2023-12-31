const db = require("../db/dbConfig.js");

// Shows all Users
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

// Show one User by id
const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

// CREATE one User
const createUser = async (user) => {
  const { profile_picture, username, bio, looking_for_group, date_created } = user
  try {
    const newUser = await db.one('INSERT INTO users (profile_picture, username, bio, looking_for_group, date_created) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
      [
        profile_picture,
        username,
        bio,
        looking_for_group,
        date_created
      ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

// Delete one User by id
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one("DELETE FROM users WHERE id = $1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

// Update one User by id
const updateUser = async (id, user) => {
  const { profile_picture, username, bio, looking_for_group, date_created } = user
  try {
    const updatedUser = await db.one("UPDATE users SET profile_picture=$1, username=$2, bio=$3, looking_for_group=$4, date_created=$5 where id=$6 RETURNING *",
      [
        profile_picture, 
        username, 
        bio, 
        looking_for_group, 
        date_created, 
        id
      ]
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};