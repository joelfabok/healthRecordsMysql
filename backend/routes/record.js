const express = require('express');

const {
    createRecord,
    getRecords,
} = require('../controllers/record');


const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { patientById } = require('../controllers/patient');
const { createRecordValidator } = require('../validator');

const router = express.Router();

router.get('/records', getRecords);
router.post('/record/new/:patientId', createRecord);

// any route containing :userId, our app will first execute userById()
router.param('userId', userById);
// any route containing :postId, our app will first execute postById()
router.param('patientId', patientById);


module.exports = router;


