const router = require("express").Router();

// project import
const { getUserByLoginId, insertUser } = require("../database/user.db");

// ==========================|| USER ROUTE ||========================== //

// ===============|| LOGIN ||============== //
router.post("/login", async (req, res) => {
  const { user_login_id, user_name, user_image_url } = req.body;

  const result = await getUserByLoginId(user_login_id);

  if (result.recordset[0] === undefined) {
    await insertUser(user_login_id, user_name, user_image_url);
    const data = await getUserByLoginId(user_login_id);
    res.send(data.recordset[0]);
  } else {
    res.send(result.recordset[0]);
  }
});

module.exports = router;
