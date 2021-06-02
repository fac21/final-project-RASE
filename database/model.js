import db from "./connection";

// User
function selectUser(email) {
  const SELECT_USER = `
    SELECT id, email, password, username FROM user_table WHERE email=$1
  `;
  return db.query(SELECT_USER, [email]).then((result) => result.rows[0]);
}

function insertUser(name, email, hash) {
  const INSERT_USER = `
INSERT INTO user_table (username, email, password) VALUES ($1, $2, $3)
RETURNING id, email, username;
`;
  return db.query(INSERT_USER, [name, email, hash]).then((result) => {
    result.rows[0];
  });
}

// Session
function createSession(sid, data) {
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
  insertUser,
};
