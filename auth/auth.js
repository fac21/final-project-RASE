import bcrypt from "bcryptjs";
import insertUser from "../database/model";

// const COOKIE_OPTIONS = {
//   httpOnly: true,
//   maxAge: 600000,
//   sameSite: "strict",
//   signed: true,
// };


export default function createUser(username, email, password) {
  return bcrypt
    .hash(password, 10)
    .then((hash) => insertUser(username, email, hash));
}

// export function saveUserSession(user) {
//   // const randSid = crypto.randomBytes(18).toString("base64");
//   // return model.createSession(randSid, { user });
// }
