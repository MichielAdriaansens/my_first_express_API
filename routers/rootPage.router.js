const express = require('express');
const ctrlRenderRootPage = require('../controllers/rootPage.controller');

const rootPageRouter = express.Router();


rootPageRouter.get('/', ctrlRenderRootPage);

module.exports = rootPageRouter;