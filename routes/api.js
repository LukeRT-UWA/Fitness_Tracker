const router = require("express").Router();
const Workout = require('../models/workout.js');
//get last workout

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
            "$addFields": {
                "totalDuration": {
                    "$sum": "$exercises.duration"
                }
            }
    }]).then((result) => {
        res.json(result)
    })
});

//get workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([{ 
       "$sort" : { day : -1} 
    },
    { 
        "$limit" : 7 
    },
    {
        "$addFields": {
            "totalDuration": {
                "$sum": "$exercises.duration"
            }
        }
}]).then((result) => {
        res.json(result)
    })
});

//add exercise
router.put('/api/workouts/:id', function(req, res){
    Workout.findByIdAndUpdate(req.params.id, {
        "$push": {
            "exercises": req.body
        }
    }, {new: true})
    .then((updated) => {
        res.json(updated);
    })

});

//add workout
router.post('/api/workouts', function(req, res){
    Workout.create({})
    .then((created) => {
        res.json(created);
    })
});


module.exports = router;
