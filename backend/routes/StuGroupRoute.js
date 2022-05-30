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



//Get all student Groups
router.get("/getAllGroups", async(req,res) => {
  try {
      const stuGroups = await Group.find({});
      res.status(200).json(stuGroups);
  } catch (err) {
      res.json(err);
  }
})


//Gropu Filter on pannel status
router.get("/getgroup/:pstatus", async(req,res) => {
  try {
    let pstatus = req.params.pstatus;
    const allGroups = await Group.find({pannel_status:pstatus});
    res.status(200).json(allGroups);
  } catch (err) {
      res.json(err);
  }
})


//view selected group detail
router.get('/getone/:id', async(req,res) =>{
  let id = req.params.id;
  Group.findById(id, function(err,group){
    res.json(group);
  });
});






module.exports = router;
