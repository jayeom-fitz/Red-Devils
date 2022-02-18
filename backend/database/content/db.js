const { sql, pool } = require("../");

// ==========================|| CONTENT DB ||========================== //
const DB_NAME = "[content]";

// ==========================|| SELECT ||========================== //

async function getCount(active, classId, categoryId, start, search) {
  try {
    const p = await pool;

    let query = `
      SELECT COUNT(*) AS count
      FROM ${DB_NAME}
      WHERE [cont_active]=${active} AND [cont_srl]>=${start}`;
    if (classId) query += ` AND [class_id]='${classId}'`;
    if (categoryId) query += ` AND [cate_id]='${categoryId}'`;
    if (search) query += ` AND [cont_title] LIKE '%${search}%'`;

    const result = await p.request().query(query);

    return result.recordset[0].count;
  } catch (error) {
    console.log(error);
  }
}

async function getContent(active, classId, categoryId, start, count, search) {
  try {
    const p = await pool;

    const startValue =
      start === 0
        ? start
        : await getCount(active, classId, categoryId, start, search);

    let query = `
      SELECT a.[cont_srl], a.[class_id], a.[cont_title], a.[cont_content], a.[cont_regist_date],
            b.[user_srl], b.[user_image_url], b.[user_name]
      FROM ${DB_NAME} AS a
      INNER JOIN [user] AS b ON a.[user_srl] = b.[user_srl]
      WHERE [cont_active]=${active} `;
    if (classId) query += ` AND [class_id]='${classId}'`;
    if (categoryId) query += ` AND [cate_id]='${categoryId}'`;
    if (search) query += ` AND [cont_title] LIKE '%${search}%'`;
    query += ` ORDER BY [cont_regist_date] DESC 
              OFFSET ${startValue}
              ROWS FETCH NEXT ${count} ROWS ONLY`;

    const result = await p.request().query(query);

    return result;
  } catch (error) {
    console.log(error);
  }
}

// ==========================|| INSERT ||========================== //

async function insertContent(
  user_srl,
  cont_title,
  cont_content,
  class_id,
  category_id
) {
  try {
    const p = await pool;
    await p.request().query(`
      INSERT INTO ${DB_NAME}
      ([user_srl], [cont_title], [cont_content], [class_id], [cate_id])
      VALUES(${user_srl}, '${cont_title}', '${cont_content}', '${class_id}', '${category_id}')
    `);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getContent: getContent,
  insertContent: insertContent,
};
