const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Create UserSchema
const UserSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 12
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contact:{
        type: String,
        required: true
    },

    type:{
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'admin', 'Supervisor', 'CoSupervisor', 'PanelMember'],
        required: true
    },
    
    interest:{
        type: String,
        required: true
    },

    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]

});

//Convert password to Encrypted Mode
UserSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();
    //Set Strong Encrypted
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

//Compare password with encrypted password
UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err);
        else {
            if (!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    });
}

module.exports = mongoose.model('User', UserSchema);