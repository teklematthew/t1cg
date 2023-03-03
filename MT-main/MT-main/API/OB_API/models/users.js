import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    id: String,
    username: String,
    name: String,
    email: String,
    phoneNumber: String,
  },
  { versionKey: false }
);

const modelCall = mongoose.model("users", schema);
export default modelCall;
