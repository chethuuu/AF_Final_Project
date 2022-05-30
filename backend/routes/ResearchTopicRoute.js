const router = require('express').Router();
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

router.route('/rtopics/filter/:interest')
  .get(ResearchTopicCtrl.getDetailsbyInterest)

module.exports = router;