const router = require('express').Router();
const Message = require('../../models/Messenger/Message');

//add message
router.post('/', async (req, res) => {
    const newMsg = new Message(req.body);
    try{
        const savedMsg = await newMsg.save();
        res.status(200).json(savedMsg);
    }catch(err){
        res.status(500).json(err);
    }
})

//get Message
router.get('/:conversationId', async (req, res) => {
    try{
        const AllMsgs = await Message.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).json(AllMsgs);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;