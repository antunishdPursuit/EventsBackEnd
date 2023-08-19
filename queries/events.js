const db = require("../db/dbConfig.js");

// Index all events for one user
const getAllEvents = async (user_id) => {
    try {
        const allEvents = await db.any(
        "SELECT * FROM events WHERE user_id=$1",
        user_id
        );
        return allEvents;
    } catch (err) {
        return err;
    }
}

// get one event from the seleceted user
const getEvent = async (user_id, eventid) => {
    try {
        const oneEvent = await db.one("SELECT events.id,events.artist, events.venue, events.city, events.artist_picture, events.price, events.user_id FROM users JOIN events ON users.id = events.user_id WHERE events.user_id=$1 AND events.id=$2;", [user_id, eventid]);
        return oneEvent;
    } catch (error) {
        return error;
    }
};

// Create a new event for user
const newEvent = async (user_Id, event) => {
    const { artist, venue, city, artist_picture, price } = event

    try {
        const newEvent = await db.one(
            "INSERT INTO events (artist, venue, city, artist_picture, price, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                artist,
                venue,
                city,
                artist_picture,
                price,
                user_Id,
            ]
        );
        return newEvent;
    } catch (error) {
        return error;
    }
};

// Update one event from one user
const updateEvent = async (user_Id, eventid, event) => {
    const { artist, venue, city, artist_picture, price, } = event

    try {
        const updatedEvent = await db.one(
            "UPDATE events SET artist=$1, venue=$2, city=$3, artist_picture=$4, price=$5, user_id=$6 where id=$7 RETURNING *",
            [
                artist,
                venue,
                city,
                artist_picture,
                price,
                user_Id,
                eventid,
            ]
        );
        return updatedEvent;
    } catch (error) {
        return error;
    }
};

// Delete one event from one user
const deleteEvent = async (user_Id, id) => {
    try {
        const deletedEvent = await db.one(
            "DELETE FROM events WHERE user_id = $1 AND id = $2 RETURNING *",
            [
                user_Id,
                id
            ]
        );
        return deletedEvent;
    } catch (error) {
        return error;
    }
};

module.exports = {
  getAllEvents,
  getEvent,
  newEvent,
  deleteEvent,
  updateEvent,
};