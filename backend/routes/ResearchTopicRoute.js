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
  .get(ResearchTopicCtrl.getResearch_TopicByID)
  

router.get("/rtopics/:gid", async (req, res) => {
  try {
    let gid = req.params.gid;
    const rtopics = await Research_Topic.find({gid:gid});
    res.status(200).json(rtopics);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;