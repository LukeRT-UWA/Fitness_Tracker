const router = require("express").Router();
const Workout = require('../models/workout.js');
//get last workout
router.get("api/workouts", (req, res) => {

})

//add exercise
router.post("api/workouts/:id", (req, res) => {
    
})

//create workout
router.post("api/workouts", (req, res) => {
    
})

//get workouts in range
router.get("api/workouts/range", (req, res) => {

})
module.exports = router;
