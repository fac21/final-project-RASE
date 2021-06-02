import { verifyUser, saveUserSession, COOKIE_OPTIONS } from "../../auth/auth";


export default async(req, res) => {
    const method = req.method;
    switch (method) {
        case "GET":
            {
                res.status(500).json({ message: "Sorry error" });
                break;
            }
        case "POST":
            {
                const { email, password } = req.body;
                const user = await verifyUser(email, password);
                const sid = await saveUserSession(user);
                res.cookies("sid", sid, COOKIE_OPTIONS);
                res.status(200).json({ message: user });
                // res.status(200).redirect(`/`);
                break;
            }
        default:
            {
                res.status(500).json({ message: "Sorry error" });
            }
    }
};