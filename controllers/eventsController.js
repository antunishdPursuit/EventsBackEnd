const express = require("express");
const events = express.Router({ mergeParams: true });
const {
  getAllEvents,
  getEvent,
  newEvent,
  deleteEvent,
  updateEvent,
} = require("../queries/events");

// INDEX
events.get("/", async (req, res) => {
    const { user_Id } = req.params;

    try {
      const allEvents = await getAllEvents(user_Id);
      res.json(allEvents);
    } catch (err) {
      res.json(err);
    }
  });

// SHOW
events.get("/:eventid", async (req, res) => {
  const { user_Id, eventid  } = req.params;
  const event = await getEvent(user_Id, eventid);

  if (event.id = eventid) {
    res.json(event);
  } else {
    res.status(404).json({ error: `There is no eventID: ${eventid} within user_id: ${user_Id}` });
  }
});

// Post
events.post("/", async (req, res) => {
  const { user_Id  } = req.params;
  const event = await newEvent(user_Id, req.body);

  res.status(200).json(event);
});

// UPDATE
events.put("/:eventid", async (req, res) => {
  const { user_Id, eventid } = req.params;
  const updatedEvent = await updateEvent(user_Id, eventid, req.body);

  if (updatedEvent.eventid = eventid) {
    res.status(200).json(updatedEvent);
  } else {
    res.status(404).json("Event not found");
  }
});

// DELETE
events.delete("/:eventid", async (req, res) => {
  const { user_Id, eventid } = req.params;
  const deletedEvent = await deleteEvent(user_Id, eventid);

  if (deletedEvent.id = eventid) {
    res.status(200).json(deletedEvent);
  } else {
    res.status(404).json({ error: "Event not found" });
  }
});

module.exports = events;