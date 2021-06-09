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
    console.error(error);
  }
}

export async function verifyUser(email, password) {
  const [user, selectUserError] = await getDataOrError(selectUser(email));
  if (!selectUserError && user) {
    const [match, matchError] = await getDataOrError(
      bcrypt.compare(password, user.password)
    );
    if (!matchError && match) {
      delete user.password;
      return user;
    } else if (!match) {
      throw new Error("Password mismatch");
    }
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

export const authenticated = (handler) => async (req, res) => {
  let decoded, err;
  const token = parseCookies(req).sid;
  try {
    if (token) decoded = verify(token, process.env.GUID);
  } catch (err) {
    console.error(err);
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
  const token = parseCookies(req).sid;
  try {
    if (token) decoded = verify(token, process.env.GUID);
  } catch (err) {
    console.error(err);
  }
  if (!err && decoded) {
    const sessionData = await selectSession(decoded.sid);
    if (sessionData) {
      req.session = sessionData;
      return sessionData;
    }
  }
}

export async function logOutSession(req, res) {
  let decoded, err;
  const token = parseCookies(req).sid;
  try {
    decoded = verify(token, process.env.GUID);
  } catch (err) {
    console.error(err);
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

async function getDataOrError(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}
