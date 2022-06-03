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


router.get('/marking/:id', (req, res) => {
    let id = req.params.id;
    Marking.findById(id, function (err, user) {
        res.json(user);
    });
});


//Display only Presentation marking schemas
router.get("/getdata/presentation", async (req, res) => {
    try {
      const present = await Marking.find({ subject: 'Presentation' });
      res.status(200).json(present);
    } catch (err) {
      res.json(err);
    }
  })

module.exports = router;