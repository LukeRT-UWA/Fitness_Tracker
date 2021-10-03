const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Please enter a type"
  },
  name: {
    type: String,
    trim: true,
    required: "Please enter a name"
  },
  duration: {
    type: Number,
    required: "Enter an amount"
  },
  weight: {
    type: Number,
    required: "Enter an amount"
  },
  reps: {
    type: Number,
    required: "Enter an amount"
  },
  sets: {
    type: Number,
    required: "Enter an amount"
  },
});

const workoutSchema = new Schema({
  day: {
      type: Date,
      required: "A date is required",
      default: Date.now()
  },
  exercises: {
      type: [exerciseSchema],
      
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
