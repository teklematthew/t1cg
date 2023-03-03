import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    username: String,
    password: String,
  },

  { versionKey: false }
);

const modelCall = mongoose.model("registration", schema);
export default modelCall;
