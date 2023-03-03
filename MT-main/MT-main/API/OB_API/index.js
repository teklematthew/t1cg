import cors from "cors";

import express from "express";

import { json, urlencoded } from "express";
import registration from "./routes/registrationRoutes/registration.js";
import routes from "./routes/routes.js";

const app = express();

// middleware
app.use(
  cors({
    credentials: true, // permission to pass jwt tokens
    // Only ports that can be accepted from cors
    origin: [
      "http://localhost:3030",
      "http://localhost:4000",
      "http://127.0.0.1:4000", // for live-server ((for later ticket))
    ],
  })
);
app.use(urlencoded({ extended: true })); // parse url-encored bodies
app.use(json());

// routes
app.use("/users", routes);
app.use("/registration", registration);

export default app;
