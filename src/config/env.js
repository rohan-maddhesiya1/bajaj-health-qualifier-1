
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../../.env");

dotenv.config({ path: envPath });


export const ENV = {
  PORT: process.env.PORT || 3000,
  OFFICIAL_EMAIL: process.env.OFFICIAL_EMAIL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

