const router = require('express').Router();
const Conversation = require('../../models/Messenger/Conversation');

//new Conversation
router.post('/', async (req, res) => {
    const newConvo = new Conversation({
        members: [req.body.senderID, req.body.receverID],
    });

    try{
        const savedCnvo = await newConvo.save();
        res.status(200).json(savedCnvo);
    }catch(err){
        res.sendStatus(500).json(err);
    }
})

//get conversation of a user
router.get('/:userID', async (req,res) => {
    try{
        const convo = await Conversation.find({
            members:{$in:[req.params.userID]},
        });
        res.status(200).json(convo);
    }catch(err){
        res.sendStatus(500).json(err);
    }
})

module.exports = router;