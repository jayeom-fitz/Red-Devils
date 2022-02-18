const router = require("express").Router();

// project import
const { getContent, insertContent } = require("../database/content/db");
const { getClasses } = require("../database/content/class.db");
const { getCategories } = require("../database/content/category.db");

// ==========================|| CONTENT ROUTE ||========================== //

// ===============|| basic ||============== //
router.get("/", (req, res) => {
  const { active, classId, categoryId, start, count, search } = req.query;

  getContent(
    parseInt(active),
    classId,
    categoryId,
    parseInt(start),
    parseInt(count),
    search ? search : ""
  ).then((result) => {
    res.send({ contentList: result.recordset });
  });
});

router.put("/", (req, res) => {
  const { user_srl, cont_title, cont_content, class_id, category_id } =
    req.body;

  insertContent(user_srl, cont_title, cont_content, class_id, category_id)
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
});

// ===============|| class ||============== //
router.get("/class", (req, res) => {
  const { active } = req.query;

  getClasses(active ? parseInt(active) : -1).then((result) => {
    res.send({
      classes: result.recordset,
    });
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
