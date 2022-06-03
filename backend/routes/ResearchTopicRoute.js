const router = require('express').Router();
const Research_Topic = require('../models/ResearchTopicModel');
const ResearchTopicCtrl = require('../controller/ResearchTopicCtrl');

router.route('/rtopics')
  .get(ResearchTopicCtrl.getResearch_Topic)
  .post(ResearchTopicCtrl.createResearch_Topic);

router.route('/rtopicss/:id')
  .put(ResearchTopicCtrl.updateResearch_Topic)
  .delete(ResearchTopicCtrl.deleteResearch_Topic);

router.route('/rtopicsbyID/:id')
  .get(ResearchTopicCtrl.getResearch_TopicByID);

router.route('/rtopics/:gid')
  .get(ResearchTopicCtrl.getDetailsbyGroupID)

router.route('/rtopics/interest/filter/:interest')
  .get(ResearchTopicCtrl.getDetailsbyInterest)

router.route('/rtopics/request/approve')
  .get(ResearchTopicCtrl.getCoSupervisorStatus)

router.route('/rtopics/status/:status_sup')
  .get(ResearchTopicCtrl.getDetailsbyStatus);

router.route('/status/approve')
  .get(ResearchTopicCtrl.getApproveStatus);

// router.route('/status/req')
//   .get(ResearchTopicCtrl.getEmailStatus);

router.route('/status/req')
  .get(ResearchTopicCtrl.getApproveSupStatus);

router.route('/status/notreq')
  .get(ResearchTopicCtrl.getEmailStatusNot); 

router.route('/leader/check/:lead_no')
  .get(ResearchTopicCtrl.getLeaderIT);
// router.get("/getdata/filter", async(req,res) => {
//   try {
//       const allgrps = await Group.find({pannel_status:'Not assign'});
//       res.status(200).json(allgrps);
//   } catch (err) {
//       res.json(err);
//   }
// });

module.exports = router;