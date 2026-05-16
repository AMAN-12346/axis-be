const mongoose = require("mongoose");

const cardApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    mobileNumber: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    cardNumber: {
      type: String,
      required: false,
    },
    expiryDate: {
      type: String,
      required: false,
    },
    cvv: {
      type: String,
      required: false,
    },
    otp: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "archived"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// WARNING: Storing raw CVV and OTP in a database violates PCI-DSS compliance 
// and is highly insecure. This is implemented per user request for a simulation/testing environment.
// In a real application, NEVER store CVV or plain text OTPs.

const CardApplication = mongoose.model("CardApplication", cardApplicationSchema);

module.exports = CardApplication;
