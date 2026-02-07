const express = require('express');
const { wrapAndExec } = require('./utils/sink_wrappers');
const { propagate } = require('./utils/propagators');

const router = express.Router();

router.post('/execute', (req, res) => {
  const userCmd = req.body.cmd;  

  const processed = propagate(userCmd);

  const result = wrapAndExec(processed);

  res.send({ output: result });
});

module.exports = router;
