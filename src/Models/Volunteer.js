const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    interests: {
      type: [String],
      required: true,
    },
    roles: {
      type: [String],
      required: true,
    },
    events: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);
module.exports = Volunteer;
