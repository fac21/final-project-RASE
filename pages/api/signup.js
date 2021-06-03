import { createUser } from "../../auth/auth";

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
        const user = await createUser(username, email, password);
        console.log(user);
        res.redirect("/");
        break;
        // res.status(200).json("account created");
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
