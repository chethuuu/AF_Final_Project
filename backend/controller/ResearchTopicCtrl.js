const Research_Topic = require('../models/ResearchTopicModel');

const ResearchTopicCtrl = {

  //get Research_Topic
  getResearch_Topic: async (req, res) => {
    try {
      const rtopics = await Research_Topic.find()
      res.json(rtopics)
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //get Research_Topic by ID
  getResearch_TopicByID: async (req, res) => {
    let id = req.params.id;
    Research_Topic.findById(id, function (err, rtopics) {
      res.json(rtopics);
    });
  },

  //add Research_Topic
  createResearch_Topic: async (req, res) => {
    try {
      const { gid, lead_no, lead_email, name, interest, request, status_sup, status_co } = req.body;

      // //Test Cases
      // if (groups.lead_no.length < 5)
      //   return res.status(400).json({
      //     errorMessage: "Please enter a lead_no of at least 12 characters.",
      //   });


      // if (groups.lead_email.length < 5)
      //   return res.status(400).json({
      //     errorMessage: "Please enter a lead_email of at least 5 characters.",
      //   });




      const rtopics = await Research_Topic.findOne({ gid, lead_no, lead_email, name })
      if (rtopics) return res.status(400).json({ msg: "This Research Topic already exists." })

      const newResearch_Topic = new Research_Topic({ gid, lead_no, lead_email, name, interest, request, status_sup, status_co })

      await newResearch_Topic.save()
      res.json({ msg: "Created a Research Topic" })

    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //update Research Topic
  updateResearch_Topic: async (req, res) => {
    try {
      const { gid, lead_no, lead_email, name, interest, request, status_sup, status_co } = req.body;
      await Research_Topic.findOneAndUpdate({ _id: req.params.id }, { gid, lead_email, lead_no, name, interest, request, status_sup, status_co })

      res.json({ msg: "Updated Research Topic" })

    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //delete Research Topic
  deleteResearch_Topic: async (req, res) => {
    try {
      await Research_Topic.findByIdAndDelete(req.params.id)
      res.json({ msg: "Deleted a Research Topic" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //get details by groupID
  getDetailsbyGroupID: async (req, res) => {
    try {
      let gid = req.params.gid;
      const rtopics = await Research_Topic.find({ gid: gid });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get details by Interest
  getDetailsbyInterest: async (req, res) => {
    try {
      let interest = req.params.interest;
      const rtopics = await Research_Topic.find({ interest: interest });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get details by Co-Supervisor status
  getDetailsbyStatus: async (req, res) => {
    try {
      let status_sup = req.params.status_sup;
      const rtopics = await Research_Topic.find({ status_sup: status_sup });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get only approved and requested topics
  getApproveStatus: async (req, res) => {
    try {
      const rtopics = await Research_Topic.find({ $and: [{ status_sup: 'Approved' }, { request: 'Requested' }] });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get only approved topics to Panel Member
  getCoSupervisorStatus: async (req, res) => {
    try {
      const rtopics = await Research_Topic.find({ $and: [{ status_sup: 'Approved' }, { status_co: 'Approved' }] });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get Supervisor Status Approved Topic
  getApproveSupStatus: async (req, res) => {
    try {
      const rtopics = await Research_Topic.find({ status_sup: 'Approved' });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get Not Requested Topics
  getEmailStatusNot: async (req, res) => {
    try {
      const rtopics = await Research_Topic.find({ request: 'Not Requested' });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },

  //get leader by IT Number
  getLeaderIT: async (req, res) => {
    try {
      let lead_no = req.params.lead_no;
      const rtopics = await Research_Topic.find({ lead_no: lead_no });
      res.status(200).json(rtopics);
    } catch (err) {
      res.json(err);
    }
  },
}

module.exports = ResearchTopicCtrl;