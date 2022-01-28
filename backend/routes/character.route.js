const router = require("express").Router();

// project import
const {
  getCharacters,
  getCount,
  insertCharacter,
} = require("../database/character.db");

// ==========================|| CHARACTER ROUTE ||========================== //

// ===============|| basic ||============== //
router.put("/", (req, res) => {
  const { char_name, char_image_url } = req.body;

  insertCharacter(char_name, char_image_url)
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
});

// ===============|| list ||============== //
router.get("/list", async (req, res) => {
  const { page, count, name } = req.query;

  const p = parseInt(page);
  const c = parseInt(count);

  const result = await getCount(name);
  const countChar = result.recordset[0].count;

  getCharacters(name, p, c)
    .then((result) => {
      res.send({
        characters: result.recordset,
        count: countChar,
      });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
