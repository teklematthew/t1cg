import express from "express";
import registration from "../../models/registration.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

const router = express.Router();

router
  .post("/post", async (req, res) => {
    // Creating empty user object
    let newUser = new registration();

    const { username, password, passwordAgain } = req.body;
    const oldUserName = await registration.findOne({ username });

    try {
      const allUsers = new registration({
        username: username,
        password: password,
      });
      if (oldUserName) {
        res.status(500).send({ message: "Error: Username already exists" });
      } else if (password != passwordAgain) {
        res.status(500).send({ message: "Error: Passwords don't match" });
      } else {
        const salt = await bcrypt.genSalt(10);
        // Generate salt to hash password
        newUser.password = await bcrypt.hash(password, salt);
        newUser.username = req.body.username;

        await newUser.save();
        console.log(newUser);
        res
          .status(201)
          .send({ message: { username } + " is successfully registered!" });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "internal server error" });
    }
  })

  .get("/", async (req, res) => {
    try {
      const hm = await registration.find();
      res.send(hm);
    } catch {
      res.status(404).send({ message: "Failed to find users!" });
    }
  })

  .post("/login", async (req, res) => {
    try {
      const usernameMatch = await registration.findOne({
        username: req.body.username.toLowerCase(),
      });
      console.log(usernameMatch);
      if (!usernameMatch) {
        return res.status(500).send({ message: "Username not found!" });
      }

      const match = await bcrypt.compare(
        req.body.password,
        usernameMatch.password
      );
      if (!match) {
        return res
          .status(500)
          .send({ message: "Password doesn't match with the given username" });
      }

      const accessToken = genToken(req.body.username);

      const jwt1 = accessToken.substring(0, 6);
      const jwt2 = accessToken.substring(6, accessToken.length);

      return res
        .cookie("jwt1", jwt1, {
          secure: true,
          httpOnly: true,
          sameSite: "strict",
        })
        .status(201)

        .json({
          message: req.body.username + " is successfully logged in!",
          accessToken: jwt2,
        });
    } catch (e) {
      console.log("yello", e);
      res.status(500).send({ message: "internal server error" });
    }
  })

  .post("/logout", (req, res, next) => {
    return res
      .clearCookie("jwt1")
      .status(200)
      .json({ message: "Successfully logged out!" });
  });

const genToken = (username) => {
  return jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "8h",
  });
};

export default router;
