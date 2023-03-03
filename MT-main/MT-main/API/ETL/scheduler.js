import schedule from "node-schedule";
import { extract } from "./ETL.js";

export const job = schedule.scheduleJob("*/1 * * * *", () => {
  extract();
  console.log("ran");
});
