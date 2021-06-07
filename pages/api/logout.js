import { authenticated, logOutSession } from "../../auth/auth";

export default authenticated(async (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET": {
      res.status(500).json({ message: "Sorry error" });
      break;
    }
    case "POST": {
      await logOutSession(req, res);
      res.redirect("/");
      break;
    }
    default: {
      res.status(500).json({ message: "Sorry error" });
    }
  }
});
