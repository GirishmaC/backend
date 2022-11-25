const express = require('express');
const storeData = require('../controllers/data');
const myRouter = express.Router();
myRouter.route('/Data').get(storeData.dataController);

module.exports = myRouter;