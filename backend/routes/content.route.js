const router = require("express").Router();

// project import
const { getClasses } = require("../database/content/class.db");
const { getCategories } = require("../database/content/category.db");

// ==========================|| CONTENT ROUTE ||========================== //

// ===============|| basic ||============== //
router.put("/", (req, res) => {
  const { title, content, class_id, category_id } = req.body;
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
