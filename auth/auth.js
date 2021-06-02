import bcrypt from "bcryptjs";
import model, { selectUser } from "../database/model";
import crypto from "crypto";

export const COOKIE_OPTIONS = {
    httpOnly: true,
    maxAge: 600000,
    sameSite: "strict",
    signed: true,
};

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

export async function saveUserSession(username) {
    const sid = crypto.randomBytes(18).toString("base64");
    return model.createSession(sid, { username });
}