import { createUser, saveUserSession, setCookie } from "../../auth/auth";
// import { authenticated } from "../../auth/auth";

export default async (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET": {
      res.status(200).json({ method });
      break;
    }
    case "POST": {
      const { username, email, password } = req.body;

      try {
        console.log(username, email, password);
        const user = await createUser(username, email, password);
        const jwt = await saveUserSession(user);
        setCookie(res, "sid", jwt);
        res.redirect("/");
        break;
      } catch (error) {
        console.error(error);
        res.status(200).json({ Error: "This account already exists" });
        break;
      }
    }
    default: {
      res.status(500).json({ message: "We only accept POST requests" });
    }
  }
};
