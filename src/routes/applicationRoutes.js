const express = require("express");
const { 
  createApplication, 
  updateApplication, 
  getAllApplications 
} = require("../controllers/applicationController.js");

const router = express.Router();

router.post("/", createApplication);
router.put("/:id", updateApplication);
router.get("/", getAllApplications);

module.exports = router;
