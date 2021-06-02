import bcrypt from "bcryptjs";
import { createSession, selectUser, insertUser } from "../database/model";
import { serialize, parse } from "cookie";
import crypto from "crypto";

export const COOKIE_OPTIONS = {
  path: "/",
  httpOnly: true,
  maxAge: 600000000,
  sameSite: "strict",
  signed: true,
};

export async function createUser(username, email, password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await insertUser(username, email, hash);

    console.log("user", user);
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function verifyUser(email, password) {
  try {
    const user = await selectUser(email);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Password mismatch");
    } else {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
}

export function saveUserSession(user) {
  const sid = crypto.randomBytes(18).toString("base64");
  return createSession(sid, { user });
}

export const setCookie = (res, name, value, options = COOKIE_OPTIONS) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if ("maxAge" in options) {
    options.expires = new Date(Date.now() + options.maxAge);
  }

  res.setHeader("set-Cookie", serialize(name, String(stringValue), options));
};

export function parseCookies(req) {
  return parse(req ? req.headers.cookie || "" : document.cookie);
}
