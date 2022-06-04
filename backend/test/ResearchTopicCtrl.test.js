const mongoose = require('mongoose');
const User = require('../models/ResearchTopicModel');

describe('Research Topic Model Test', () => {
    beforeAll(async () => {
        process.env.MONGODB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        };
    });

    it('without required field should failed', async () => {
        const topicWithoutRequiredField = new User({ lead_no: "IT20065294" });
        let err;
        try {
            const savedTopicWithoutRequiredField = await topicWithoutRequiredField.save();
            error = savedTopicWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.lead_email).toBeDefined();
    });
});

