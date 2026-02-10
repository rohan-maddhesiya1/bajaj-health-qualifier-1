import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { ENV } from "./config/env.js";


app.listen(ENV.PORT, () => {
  console.log(`🚀 Server running on port ${ENV.PORT}`);
});
