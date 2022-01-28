const router = require("express").Router();

// project import
const { insertCharacter } = require("../database/character.db");

// ==========================|| CHARACTER ROUTE ||========================== //

// ===============||  ||============== //
router.post("/", (req, res) => {
  const { char_name, char_image_url } = req.body;

  insertCharacter(char_name, char_image_url)
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
});

// ===============||  ||============== //

module.exports = router;
