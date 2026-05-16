const CardApplication = require("../models/CardApplication.js");
const ApiResponse = require("../utils/ApiResponse.js");

// Create initial application
const createApplication = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, dateOfBirth } = req.body;
    
    const application = await CardApplication.create({
      fullName,
      email,
      mobileNumber,
      dateOfBirth,
    });

    return res.status(201).json(
      new ApiResponse(201, application, "Application created successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message || "Internal Server Error")
    );
  }
};

// Update application (Card details or OTP)
const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const application = await CardApplication.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!application) {
      return res.status(404).json(
        new ApiResponse(404, null, "Application not found")
      );
    }

    return res.status(200).json(
      new ApiResponse(200, application, "Application updated successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message || "Internal Server Error")
    );
  }
};

// Get all applications (for admin dashboard)
const getAllApplications = async (req, res) => {
  try {
    const applications = await CardApplication.find({ status: { $ne: "archived" } }).sort({ createdAt: -1 });
    return res.status(200).json(
      new ApiResponse(200, applications, "Applications fetched successfully")
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message || "Internal Server Error")
    );
  }
};

module.exports = {
  createApplication,
  updateApplication,
  getAllApplications
};
