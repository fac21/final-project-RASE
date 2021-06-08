import bcrypt from "bcryptjs";
import {
  createSession,
  selectUser,
  insertUser,
  selectSession,
  deleteSession,
} from "../database/model";
import { serialize, parse } from "cookie";
import { sign, verify } from "jsonwebtoken";
import crypto from "crypto";

export const COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  maxAge: 60 * 60,
  sameSite: "strict",
  signed: true,
};

export const JWT_OPTIONS = {
  algorithm: "RS256",
  expiresIn: "1h",
};

export async function createUser(username, email, password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await insertUser(username, email, hash);

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function verifyUser(email, password) {
  try {
    const user = await selectUser(email);
    if (!user) {
      console.log("Error1");
      throw new Error("Password mismatch");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("Error2");
      throw new Error("Password mismatch");
    } else {
      delete user.password;
      return user;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function saveUserSession(user) {
  const sid = crypto.randomBytes(18).toString("base64");
  await createSession(sid, { user });
  const claims = { sid };
  const jwt = await sign(claims, process.env.GUID);
  return jwt;
}

export const setCookie = (res, name, value, options = COOKIE_OPTIONS) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
  if ("maxAge" in options) {
    options.expires = new Date(Date.now() + options.maxAge);
  }
  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};
export function parseCookies(req) {
  return parse(req ? req.headers.cookie || "" : document.cookie);
}

// export const authenticated = (handler) => async (req, res) => {
//   return verify(
//     parseCookies(req).sid,
//     process.env.GUID,
//     async function (err, decoded) {
//       if (!err && decoded) {
//         const sessionData = await selectSession(decoded.sid);
//         if (sessionData) {
//           req.session = sessionData;
//           return await handler(req, res);
//         } else {
//           res.redirect("/login");
//         }
//       }
//       res.redirect("/login");
//     }
//   );
// };

// export async function pageAuthenticated(req) {
//   return verify(
//     parseCookies(req).sid,
//     process.env.GUID,
//     async function (err, decoded) {
//       if (!err && decoded) {
//         const sessionData = await selectSession(decoded.sid);
//         if (sessionData) req.session = sessionData;
//       }
//     }
//   );
// }

export const authenticated = (handler) => async (req, res) => {
  let decoded, err;
  try {
    const token = parseCookies(req).sid;
    decoded = verify(token, process.env.GUID);
  } catch (err) {
    console.log(err);
  }
  if (!err && decoded) {
    const sessionData = await selectSession(decoded.sid);
    if (sessionData) {
      req.session = sessionData;
      return await handler(req, res);
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};

export async function pageAuthenticated(req) {
  let decoded, err;
  try {
    const token = parseCookies(req).sid;
    decoded = verify(token, process.env.GUID);
  } catch (err) {
    console.log(err);
  }
  if (!err && decoded) {
    const sessionData = await selectSession(decoded.sid);
    if (sessionData) req.session = sessionData;
  } else {
  }
}

export async function logOutSession(req, res) {
  let decoded, err;
  try {
    const token = parseCookies(req).sid;
    decoded = verify(token, process.env.GUID);
  } catch (err) {
    console.log(err);
  }
  if (!err && decoded) {
    delete req.session;
    await deleteSession(decoded.sid);
    res.setHeader(
      "Set-Cookie",
      serialize("sid", String("deleted"), {
        path: "/",
        expires: new Date("Thu, 01 Jan 1950 00:00:00 GMT"),
      })
    );
  } else {
    res.redirect("/login");
  }
}
