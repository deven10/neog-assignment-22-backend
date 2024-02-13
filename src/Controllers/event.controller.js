const Event = require("../Models/Event");

// ----------------------------
// for creating new Event
async function addEvent(eventDetails) {
  try {
    const newEvent = new Event(eventDetails);
    const savedEvent = await newEvent.save();
    return savedEvent;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all Events
async function findAllEvents() {
  try {
    const events = await Event.find();
    return events;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an Event
async function updateEvent(eventId, eventDetails) {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventDetails, {
      new: true,
      runValidators: true,
    });
    return updatedEvent;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing Event
async function deleteEvent(eventId) {
  try {
    const event = await Event.findByIdAndDelete(eventId);
    return event;
  } catch (e) {
    throw e;
  }
}

module.exports = { addEvent, findAllEvents, updateEvent, deleteEvent };
