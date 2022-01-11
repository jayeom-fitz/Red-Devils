const router = require("express").Router();

// ==========================|| USER ROUTE ||========================== //

// ===============|| LOGIN ||============== //
router.post("/login", (req, res) => {
  console.log(req.body);
});

module.exports = router;
