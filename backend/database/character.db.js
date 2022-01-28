const { sql, pool } = require("./");

// ==========================|| CHARACTER DB ||========================== //
const DB_NAME = "[character]";

// ==========================|| SELECT ||========================== //
async function getCharacters(content, page, count) {
  try {
    const p = await pool;
    const start = (page - 1) * count;

    const result = await p.request().query(`
      SELECT [char_srl], [char_name], [char_image_url]
      FROM ${DB_NAME}
      WHERE [char_name] LIKE '%${content}%'
      ORDER BY [char_srl] DESC
      OFFSET ${start} ROWS
      FETCH NEXT ${count} ROWS ONLY
    `);

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getCount(content) {
  try {
    const p = await pool;

    const result = await p.request().query(`
      SELECT COUNT(*) AS count
      FROM ${DB_NAME}
      WHERE [char_name] LIKE '%${content}%'
    `);

    return result;
  } catch (error) {
    console.log(error);
  }
}

// ==========================|| INSERT ||========================== //
async function insertCharacter(name, image) {
  try {
    const p = await pool;

    await p.request().query(`
      INSERT INTO ${DB_NAME}
      ([char_name], [char_image_url])
      VALUES('${name}', '${image}')
    `);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCharacters: getCharacters,
  getCount: getCount,

  insertCharacter: insertCharacter,
};
