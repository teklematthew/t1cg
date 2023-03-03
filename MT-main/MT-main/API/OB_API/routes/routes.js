import express from "express";
import users from "../models/users.js";

const router = express.Router();

router
  // Get users
  .get("/", async (req, res) => {
    try {
      const hm = await users.find();
      res.send(hm);
    } catch {
      res.status(404).send({ message: "Failed to find users!" });
    }
  })
  // Post a new user
  .post("/post", async (req, res) => {
    try {
      const result = await users.insertMany({
        id: req.body.id,
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      });

      res.send(result);
    } catch {
      res.status(403).send({ message: "Failed to post user!" });
    }
  });

export default router;
