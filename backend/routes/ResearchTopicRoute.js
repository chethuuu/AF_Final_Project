const router = require('express').Router(); 
const ResearchTopicCtrl = require('../controller/ResearchTopicCtrl');

router.route('/rtopics')
    .get(ResearchTopicCtrl.getResearch_Topic)
    .post(ResearchTopicCtrl.createResearch_Topic);

router.route('/rtopics/:id')
    .get(ResearchTopicCtrl.getResearch_TopicByID)
    .put(ResearchTopicCtrl.updateResearch_Topic)
    .delete(ResearchTopicCtrl.deleteResearch_Topic);

module.exports = router;