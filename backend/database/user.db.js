const { sql, pool } = require("./");

// ==========================|| USER DB ||========================== //

// ==========================|| SELECT ||========================== //

async function getUserByLoginId(user_login_id) {
  try {
    const p = await pool;

    const result = await p.request().query(`
      SELECT [user_srl], [user_level], [user_image_url], [user_name]
      FROM [user]
      WHERE [user_login_id] = ${user_login_id}
    `);

    return result;
  } catch (error) {
    console.log(error);
  }
}

// ==========================|| INSERT ||========================== //

async function insertUser(id, name, image) {
  try {
    const p = await pool;

    await p.request().query(`
      INSERT INTO [user]
      ([user_login_id], [user_name], [user_image_url])
      VALUES('${id}', '${name}', '${image}')
    `);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUserByLoginId: getUserByLoginId,

  insertUser: insertUser,
};
