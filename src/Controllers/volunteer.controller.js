const Volunteer = require("../Models/Volunteer");

// ----------------------------
// for creating new Volunteer
async function addVolunteer(volunteerDetails) {
  try {
    const newVolunteer = new Volunteer(volunteerDetails);
    const savedVolunteer = await newVolunteer.save();
    return savedVolunteer;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all Volunteers
async function findAllVolunteers() {
  try {
    const volunteers = await Volunteer.find();
    return volunteers;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an Volunteer
async function updateVolunteer(volunteerId, volunteerDetails) {
  try {
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      volunteerId,
      volunteerDetails,
      {
        new: true,
        runValidators: true,
      }
    );
    return updatedVolunteer;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing Volunteer
async function deleteVolunteer(volunteerId) {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(volunteerId);
    return volunteer;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  addVolunteer,
  findAllVolunteers,
  updateVolunteer,
  deleteVolunteer,
};
