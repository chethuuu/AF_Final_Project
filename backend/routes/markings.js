const router = require("express").Router();
const { route } = require("express/lib/application");
const res = require("express/lib/response");
let Marking =require("../models/marking");

router.route("/add").post((req,res)=>{

    const subject = req.body.subject;
    const assignment = req.body.assignment;
    const date = Date(req.body.date);
    const point= req.body.point;
    const marks = Number(req.body.marks);
    const point1= req.body.point1;
    const marks1 = Number(req.body.marks1);
    const point2= req.body.point2;
    const marks2 = Number(req.body.marks2);
    const point3= req.body.point3;
    const marks3 = Number(req.body.marks3);

    const newMarking = new Marking({

        subject ,
        assignment,
        date,
        point,
        marks,
        point1,
        marks1,
        point2,
        marks2,
        point3,
        marks3,

    })
    
    newMarking.save().then(()=>{
        res.json("Marking Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Marking.find().then((markings)=>{
        res.json(markings)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async (req, res)=>{
    let markingID = req.params.id;
    const{subject,assignment,date,point,marks, point1,marks1,point2,marks2,point3,marks3}= req.body;
     
const updateMarking ={
    subject, 
    assignment,
    date,
    point,
    marks,
    point1,
    marks1,
    point2,
    marks2,
    point3,
    marks3,
}


const update = await Marking.findByIdAndUpdate(markingID, updateMarking)
.then(()=>{
    res.status(200).send({status:"User update"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data"});
 })
})


router.route("/delete/:id").delete(async (req,res)=>{
 let markingID = req.params.id;

 await Marking.findByIdAndDelete(markingID)
 .then(()=>{
     res.status(200).send({status:"User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error : err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let markingID = req.params.id;
    const user = await Marking.findBYId(markingID)
    .then((marking)=>{
        res.status(200).send({status:"User fetched", marking})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})
module.exports = router;