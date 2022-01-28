const { sql, pool } = require("./");

// ==========================|| CHARACTER DB ||========================== //
const DB_NAME = "[character]";

// ==========================|| SELECT ||========================== //
async function getCharacters() {
  try {
    const p = await pool;

    const result = await p.request().query(`
      SELECT ([char_srl], [char_name], [char_image_url])
      FROM ${DB_NAME}
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

  insertCharacter: insertCharacter,
};
