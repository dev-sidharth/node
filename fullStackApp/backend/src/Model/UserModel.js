const mongoose = require("mongoose");
const Joi = require("joi");

const validateNewUser = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
  });
  return schema.validate(data);
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/, // Basic email validation
  },
  password: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true, maxlength: 15,}, // Add phone number field
  // Optional fields
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 12,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 12,
  },
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.validateUser = validateNewUser;
