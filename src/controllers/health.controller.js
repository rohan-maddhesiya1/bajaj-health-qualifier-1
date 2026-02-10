import { ENV } from "../config/env.js";


export const healthCheck = (req, res) => {
  return res.status(200).json({
    is_success: true,
    official_email:ENV.OFFICIAL_EMAIL,
  });
};
