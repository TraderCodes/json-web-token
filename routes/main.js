const express = require('express');
const router = require.Router();

const { login, dashboard } = require('../controllers/main');

router.route('/dashboard').get(dashboard);
router.route('/login').put(login);

module.exports = router;
