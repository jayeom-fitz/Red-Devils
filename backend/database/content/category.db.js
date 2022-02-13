const { sql, pool } = require("../");

// ==========================|| CONTENT CATEGORY DB ||========================== //
const DB_NAME = "[content.category]";

// ==========================|| SELECT ||========================== //
async function getCategories(active) {
  try {
    const p = await pool;

    const result = await p.request().query(`
      SELECT *
      FROM ${DB_NAME}
      ${active === -1 ? null : `WHERE [cate_active]=${active}`}
      ORDER BY [cate_sort] 
    `);

    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategories: getCategories,
};
