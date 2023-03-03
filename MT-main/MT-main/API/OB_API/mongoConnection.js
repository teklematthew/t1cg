import mongoose from "mongoose";

import app from "./index.js";

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));
mongoose.connection.once("connected", () =>
  console.log("\x1b[users app connected to mongo\x1b[0m")
);
mongoose.connection.on("error", (err) => console.log(err));

const port = 4000;
app.listen(port, () => {
  console.log(`users listening on port ${port}`);
});
