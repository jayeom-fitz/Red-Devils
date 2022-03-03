const router = require("express").Router();

// project import
const {
  getContent,
  insertContent,
  deleteContent,
} = require("../database/content/db");
const { getCategories } = require("../database/content/category.db");

// ==========================|| CONTENT ROUTE ||========================== //

// ===============|| basic ||============== //
router.get("/", (req, res) => {
  const { active, categoryId, start, count, search } = req.query;

  getContent(
    parseInt(active),
    categoryId,
    parseInt(start),
    parseInt(count),
    search ? search : ""
  ).then((result) => {
    res.send({ contentList: result.recordset });
  });
});

router.put("/", (req, res) => {
  const { user_srl, cont_title, cont_content, cont_link, category_id } =
    req.body;

  insertContent(
    user_srl,
    cont_title,
    cont_content,
    cont_link ? 1 : 0,
    category_id
  )
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
});

router.delete("/", (req, res) => {
  const { cont_srl } = req.body;

  deleteContent(cont_srl)
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
});

// ===============|| category ||============== //
router.get("/category", (req, res) => {
  const { active } = req.query;

  getCategories(active ? parseInt(active) : -1).then((result) => {
    res.send({
      categories: result.recordset,
    });
  });
});

module.exports = router;
