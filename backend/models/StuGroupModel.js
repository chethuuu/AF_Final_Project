const mongoose = require('mongoose')

const StuGroupSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    group_id: {
        type: String,
        required: true,
        trim: true
    },

    leader: {
        name: {type: String, required: true},
        ID: {type: String, required: true},
        contact: {type: String, required: true},
        email: {type: String, required: true}
    },

    member1: {
        name: {type: String, required: true},
        ID: {type: String, required: true},
        contact: {type: String, required: true},
        email: {type: String, required: true}
    },

    member2: {
        name: {type: String, required: true},
        ID: {type: String, required: true},
        contact: {type: String, required: true},
        email: {type: String, required: true}
    },

    member3: {
        name: {type: String, required: true},
        ID: {type: String, required: true},
        contact: {type: String, required: true},
        email: {type: String, required: true}
    },

    pannel_status: {
        type: String,
        required: true,
        default: "Not assign"
    },

    pannel:{type:Object, default:{},
            panel1: { type:Object, default:{},
                ID: {type: String, required: true},
                name: {type: String, required: true}, 
                email: {type: String, required: true}
            },
            panel2:{type:Object, default:{},
                ID: {type: String, required: true},
                name: {type: String, required: true}, 
                email: {type: String, required: true}
            },
    }

    
});

module.exports = mongoose.model('StuGroups', StuGroupSchema);