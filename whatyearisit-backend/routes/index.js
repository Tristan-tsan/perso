var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get("/year", (req, res, next) => {
  let year = new Date().getFullYear().toString();
  console.log(year);
  res.json({year: year});
  });

module.exports = router;
