const router = require('express').Router(); 
const ResearchTopicCtrl = require('../controller/ResearchTopicCtrl');

router.route('/rtopics')
    .get(ResearchTopicCtrl.getResearch_Topic)
    .post(ResearchTopicCtrl.createResearch_Topic);

router.route('/rtopics/:id')
    //.get(ResearchTopicCtrl.getResearch_TopicByID)
    .put(ResearchTopicCtrl.updateResearch_Topic)
    .delete(ResearchTopicCtrl.deleteResearch_Topic);

router.get('/rtopics/:id'), async(req,res) => {
        let id = req.params.id;
        Research_Topic.findById(id, function(err,rtopics) {
        res.json(rtopics);
    });
}

module.exports = router;