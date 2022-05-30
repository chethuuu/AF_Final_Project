const express = require("express");
const Group = require('../models/StuGroupModel');
const router = express.Router();

//Create Student Group
router.post("/add", (req, res, next) => {
  const StuGroupModel = new Group({
    user_id: req.body.user_id,
    group_id: req.body.group_id,
    leader: {
      name: req.body.leader.name,
      ID: req.body.leader.ID,
      contact: req.body.leader.contact,
      email: req.body.leader.email
    },
    member1: {
      name: req.body.member1.name,
      ID: req.body.member1.ID,
      contact: req.body.member1.contact,
      email: req.body.member1.email
    },
    member2: {
      name: req.body.member2.name,
      ID: req.body.member2.ID,
      contact: req.body.member2.contact,
      email: req.body.member2.email
    },
    member3: {
      name: req.body.member3.name,
      ID: req.body.member3.ID,
      contact: req.body.member3.contact,
      email: req.body.member3.email
    }
    
  });
  StuGroupModel.save().then(createdGroup => {
    res.status(201).json({
      message: "Group created successfully",
      GrpId: createdGroup._id
    });
  });
});


//get no of groups in Group collection
router.get("/getCount", async(req,res) =>{
  try{
    let count = await Group.countDocuments();
    let grpcount = count + 1;
    let GrpId = "Grp_" + grpcount;
    res.status(200).json(GrpId);
  }catch(err){
    res.json(err);
  }
});



//Get all Groups
router.get("/getdata", async(req,res) => {
  try {
      const allGrps = await Group.find({});
      res.status(200).json(allGrps);
  } catch (err) {
      res.json(err);
  }
})



//
router.get('/getItem/:id', async(req,res) =>{
  let id = req.params.id;
  Group.findById(id, function(err,group){
    res.json(group);
  });
});



router.post("/update/:id", (req, res, next) => {
  const StuGroupModel = new Group({
    _id: req.body.id,
    user_id: req.body.user_id,
    group_id: req.body.group_id,
    members: req.body.members,
    pannel_status: req.body.pannel_status,
    pannel: req.body.pannel,
    topic: req.body.topic,
    submissions: req.body.submissions,
    marks: req.body.marks
  });
  Group.updateOne({_id: req.params.id }, StuGroupModel).then(result => {
    res.status(200).json({ message: "Successfully Updated!" });
  });
});


router.delete("/delete/:id", (req, res, next) => {
    Group.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Group deleted!" });
  });
});




module.exports = router;
