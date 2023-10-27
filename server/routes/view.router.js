const express = require('express');
const pool = require('../modules/pool');
const { default: logger } = require('redux-logger');
const router = express.Router();



//change to not show id twice 
router.get('/:id', (req, res) => {
  console.log('params', req.params);
  let id = req.params.id;
  //not sure if this where id is working correctly add to end WHERE id=$1 ?
  const queryText = `SELECT *
  FROM posters
  FULL JOIN poster_content ON posters.id = poster_content.poster_id
  WHERE posters.id=`+id;
console.log('queryText', queryText);
  pool.query(queryText)

   .then(result => {
    res.send(result.rows);
    console.log(result.rows);
   })
   .catch(err => {
    console.log('ERROR; Get view poster content');
    res.sendStatus(500)
   })
});



module.exports = router;