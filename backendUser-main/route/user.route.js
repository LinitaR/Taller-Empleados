const express = require('express'),
router =  express.Router(),
userctrl = require('../controllers/user.controller')

router.get('/', userctrl.list)
router.post('/', userctrl.create)
router.delete('/:_id', userctrl.delete)
router.put('/', userctrl.update)
router.put('/active', userctrl.active)
router.post('/search', userctrl.search)
router.get('/searchget', userctrl.searchget)


module.exports = router