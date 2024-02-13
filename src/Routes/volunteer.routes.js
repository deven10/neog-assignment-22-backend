const express = require("express");

const volunteerRouter = express.Router();
volunteerRouter.use(express.json());

const {
  addVolunteer,
  findAllVolunteers,
  updateVolunteer,
  deleteVolunteer,
} = require("../Controllers/volunteer.controller");

// creating a new volunteer
volunteerRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const volunteer = await addVolunteer(body);
    res
      .status(201)
      .json({ message: "New Volunteer added Successfully", volunteer });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all volunteers
volunteerRouter.get("/", async (req, res) => {
  try {
    const volunteers = await findAllVolunteers();
    if (volunteers.length > 0) {
      res
        .status(200)
        .json({ message: "Volunteers fetched successfully", volunteers });
    } else {
      res.status(204).json({ message: "No volunteer found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular volunteer
volunteerRouter.post("/:volunteerId", async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const body = req.body;
    const volunteer = await updateVolunteer(volunteerId, body);
    if (volunteer) {
      res
        .status(200)
        .json({ message: "Volunteer updated successfully", volunteer });
    } else {
      res.status(204).json({ message: "No volunteer found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular volunteer
volunteerRouter.delete("/:volunteerId", async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const volunteer = await deleteVolunteer(volunteerId);
    if (volunteer) {
      res
        .status(200)
        .json({ message: "Volunteer deleted successfully", volunteer });
    } else {
      res.status(204).json({ message: "No volunteer found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = volunteerRouter;
