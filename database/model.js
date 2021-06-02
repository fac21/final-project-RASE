import db from "./connection";

export function selectUser(email) {
  const SELECT_USER = `
    SELECT id, email, password, username FROM user_table WHERE email=$1
  `;
  return db.query(SELECT_USER, [email]).then((result) => result.rows[0]);
}

export function createSession(sid, data) {
  const INSERT_SESSION = `
    INSERT INTO sessions_table (sid, data) VALUES ($1, $2)
    RETURNING sid
  `;
  return db
    .query(INSERT_SESSION, [sid, data])
    .then((result) => result.rows[0].sid);
}

export default {
  createSession,
  selectUser,
};
