const router = require("express").Router();

// ==========================|| USER ROUTE ||========================== //

// ===============|| LOGIN ||============== //
router.post("/login", async (req, res) => {
  const { user_login_id, user_name, user_image_url } = req.body;

  console.log(req.body);
});

module.exports = router;
