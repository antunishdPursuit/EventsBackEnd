const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
    try {
      const allUsers = await db.any("SELECT * FROM users");
      return allUsers;
    } catch (error) {
      return error;
    }
  };

// ONE User
const getUser = async (id) => {
    try {
      const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
      return oneUser;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createUser = async (user) => {
    try {
      const newUser = await db.one(`
        INSERT INTO users (profile_picture, username, bio, looking_for_group, date_created)
        VALUES ($1, $2, $3, $4, $5);`, [
        user.profile_picture,
        user.username,
        user.bio,
        user.looking_for_group,
        user.date_created
      ]
      );
      return newUser;
    } catch (error) {
      return error;
    }
  };
  
  // Delete
  const deleteUser = async (id) => {
    try {
      const deletedUser = await db.one(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        id
      );
      return deletedUser;
    } catch (error) {
      return error;
    }
  };
  
  //Update
  const updateUser = async (id, user) => {
    try {
      const updatedUser = await db.one(
        "UPDATE User SET profile_picture=$1, username=$2, bio=$3, looking_for_group=$4, date_created=$5 where id=$5 RETURNING *",
        [user.profile_picture, user.username, user.bio, user.looking_for_group, user.date_created, id]
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