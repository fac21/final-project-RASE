import db from "./connection";

export default function insertUser(name, email, hash) {
    const INSERT_USER = `
  INSERT INTO user_table (username, email, password) VALUES ($1, $2, $3)
  RETURNING id, email, username;
  `;
    return db.query(INSERT_USER, [name, email, hash]).then((result) => {
        result.rows[0];
    });
}