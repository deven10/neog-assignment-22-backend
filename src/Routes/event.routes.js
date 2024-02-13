const express = require("express");

const eventRouter = express.Router();
eventRouter.use(express.json());

const {
  addEvent,
  findAllEvents,
  updateEvent,
  deleteEvent,
} = require("../Controllers/event.controller");

// creating a new event
eventRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const event = await addEvent(body);
    res.status(201).json({ message: "New Event added Successfully", event });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all events
eventRouter.get("/", async (req, res) => {
  try {
    const events = await findAllEvents();
    if (events.length > 0) {
      res.status(200).json({ message: "Events fetched successfully", events });
    } else {
      res.status(204).json({ message: "No event found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular event
eventRouter.post("/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const body = req.body;
    const event = await updateEvent(eventId, body);
    if (event) {
      res.status(200).json({ message: "Event updated successfully", event });
    } else {
      res.status(204).json({ message: "No event found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular event
eventRouter.delete("/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await deleteEvent(eventId);
    if (event) {
      res.status(200).json({ message: "Event deleted successfully", event });
    } else {
      res.status(204).json({ message: "No event found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = eventRouter;
