import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { ENV } from "./config/env.js";


if (process.env.NODE_ENV !== "production") {
  app.listen(ENV.PORT, () => {
    console.log(`🚀 Server running on port ${ENV.PORT}`);
  });
}


export default app;
