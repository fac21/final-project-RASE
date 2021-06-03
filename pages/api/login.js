import {
  verifyUser,
  saveUserSession,
  setCookie,
  parseCookies,
} from "../../auth/auth";

export default async (req, res) => {
  console.log(parseCookies(req)); // Checking the cookie

  const method = req.method;
  switch (method) {
    case "GET": {
      res.status(500).json({ message: "Sorry error" });
      break;
    }
    case "POST": {
      const { email, password } = req.body;
      const user = await verifyUser(email, password);
      const sid = await saveUserSession(user);

      setCookie(res, "sid", sid);

      res.redirect("/");
      break;
    }
    default: {
      res.status(500).json({ message: "Sorry error" });
    }
  }
};
