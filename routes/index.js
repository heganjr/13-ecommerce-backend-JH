const router = require('express').Router();
const apiRoutes = require('./api');
// Win JS, when you give just the folder name it then tries to find a file called index.js as the main source.

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;