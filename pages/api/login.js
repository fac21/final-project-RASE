import { verifyUser, saveUserSession, setCookie } from "../../auth/auth";

export default async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET": {
      res.status(500).json({ message: "Sorry error" });
      break;
    }
    case "POST": {
      const { email, password } = req.body;
      const user = await verifyUser(email, password);
      if (user) {
        const jwt = await saveUserSession(user);
        setCookie(res, "sid", jwt);
      }
      res.redirect("/");
      break;
    }
    default: {
      res.status(500).json({ message: "Sorry error" });
    }
  }
};
