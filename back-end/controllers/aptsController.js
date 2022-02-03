const express = require("express");
const appointments = express.Router();
const {
  fetchAllApts,
  fetchApt,
  newApt,
  updateApt,
  deleteApt
} = require("../queries/aptsQueries");

appointments.get("/", async (req, res) => {
  const allApts = await fetchAllApts();
  res.json(allApts);  
});

appointments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apt = await fetchApt(id);
  res.json(apt);
});

appointments.post("/", async (req, res) => {
  const createdApt = await newApt(req.body);
  res.json(createdApt);
});

appointments.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedApt = await updateApt(id, req.body);
  res.json(updatedApt);
});

appointments.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApt = await deleteApt(id)
  res.json(deletedApt)
});

module.exports = appointments;