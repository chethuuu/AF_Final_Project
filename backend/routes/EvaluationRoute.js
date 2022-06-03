const express = require("express");
const Evaluations = require('../models/evaluation');
const router = express.Router();

//Create Evaluation
router.post("/add", (req, res, next) => {
  const evaluationModel = new Evaluations({
    group_id: req.body.group_id,
    details: {
      subject: req.body.details.subject,
      assignment: req.body.details.assignment,
      date: req.body.details.date,
      point: req.body.details.point,
      point1: req.body.details.point1,
      point2: req.body.details.point2,
      point3: req.body.details.point3,
      marks: req.body.details.marks,
      marks1: req.body.details.marks1,
      marks2: req.body.details.marks2,
      marks3: req.body.details.marks3,
    },
    amount: req.body.amount,
    amount1: req.body.amount1,
    amount2: req.body.amount2,
    amount3: req.body.amount3,
    total: req.body.total,
    feedback: req.body.feedback
  });
  evaluationModel.save().then(createEvaluation => {
    res.status(201).json({
      message: "Successfully Saved",
      EvaluId: createEvaluation._id
    });
  });
});


//Get all Evaluations
router.get("/getAllevaluation", async (req, res) => {
  try {
    const evaluation = await Evaluations.find({});
    res.status(200).json(evaluation);
  } catch (err) {
    res.json(err);
  }
})


//view selected Evaluation details
router.get('/getone/:id', async (req, res) => {
  let id = req.params.id;
  Evaluations.findById(id, function (err, evalu) {
    res.json(evalu);
  });
});


//get marks of spesific user from Group id 
router.get("/getdata/filter/:grp_id", async(req,res) => {
  try {
    let grp_id = req.params.grp_id;
    const marks = await Evaluations.find({group_id:grp_id});
    res.status(200).json(marks);
  } catch (err) {
      res.json(err);
  }
})

//delete Evaluation list
router.delete("/delete/:id", (req, res, next) => {
  Evaluations.deleteOne({_id: req.params.id}).then(result => {
  console.log(result);
  res.status(200).json({ message: "Successfully Deleted!" });
});
});






module.exports = router;
