const path = require('path');
const router = require('express').Router();

//catchall route that sends user to index
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//notes page route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;