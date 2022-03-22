const express = require("express");
const router = express.Router();
const Payload = require("../models/payloadModel");

// add a new twit
router.post("/", async (req, res) => {
  try {
    const createEntity = new Payload(req.body);

    await createEntity.save();

    if (createEntity) {
      res.json({
        status: 200,
        message: "Entity Created Successfully!",
        data: createEntity,
      });
    } else {
      res.status(401).json({
        error: "Unauthorized access... please, login!",
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
