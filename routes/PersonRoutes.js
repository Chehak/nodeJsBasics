const express = require("express");
const Person = require("../models/Person");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(300).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:work", async (req, res) => {
  const work = req.params.work;
  console.log(work);
  if (work == "chef" || work == "manager" || work == "worker") {
    try {
      const data = await Person.find({ workType: work });
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No record found for " + work });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error", message: err });
    }
  } else {
    res.status(404).json({ error: "Invalid work type" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const routeId = req.params.id;
    const dataToBeUpdated = req.body;
    const data = await Person.findByIdAndUpdate(routeId, dataToBeUpdated, {
      new: true,
      runValidators: true,
    });
    console.log(data, "data");

    if (!data) {
      res.status(404).json({ message: "Person not found", updatedData: data });
    }
    console.log("data updated");
    res
      .status(200)
      .json({ message: "updated successfully", updatedData: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error", message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await Person.findByIdAndDelete(id);
    if (!data) {
      res.status(404).json({ error: "No data found" });
    }
    console.log("data delete");
    res.status(200).json({ message: "Data Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error", data: err });
  }
});

module.exports = router;
