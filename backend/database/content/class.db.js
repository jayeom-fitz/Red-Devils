const { sql, pool } = require("../");

// ==========================|| CONTENT CLASS DB ||========================== //
const DB_NAME = "[content.class]";

// ==========================|| SELECT ||========================== //
async function getClasses(active) {
  try {
    const p = await pool;

    const result = await p.request().query(`
      SELECT *
      FROM ${DB_NAME}
      ${active === -1 ? null : `WHERE [class_active]=${active}`}
      ORDER BY [class_sort] 
    `);

    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getClasses: getClasses,
};
