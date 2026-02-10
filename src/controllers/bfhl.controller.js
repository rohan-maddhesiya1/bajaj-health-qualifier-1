import { ENV } from "../config/env.js";
import { generateFibonacci } from "../services/fibonacci.sevices.js";
import { filterPrimes } from "../services/prime.js";
import { calculateHCF, calculateLCM } from "../services/math.js";
import { getAIResponse } from "../services/ai.js";
import { ApiError } from "../utils/ApiError.js";

export const handleBfhl = async (req, res) => {
    try {
        const body = req.body;

        // Basic validation: body must exist
        if (!body || typeof body !== "object") {
            throw new ApiError(400, "Invalid request body");
        }

        // Exactly one key must be present
        const keys = Object.keys(body);
        if (keys.length !== 1) {
            throw new ApiError(400, "Request must contain exactly one key");
        }

        const key = keys[0];
        const value = body[key];

        let result;

        switch (key) {
            case "fibonacci":
                result = generateFibonacci(value);
                break;

            case "prime":
                result = filterPrimes(value);
                break;

            case "hcf":
                result = calculateHCF(value);
                break;

            case "lcm":
                result = calculateLCM(value);
                break;

            case "AI":
                result = await getAIResponse(value);
                break;

            default:
                return res.status(400).json({
                    is_success: false,
                    error: "Unsupported key",
                });
        }

        return res.status(200).json({
            is_success: true,
            official_email: ENV.OFFICIAL_EMAIL,
            data: result,
        });


    } catch (err) {
        const status = err instanceof ApiError ? err.statusCode : 500;

        return res.status(status).json({
            is_success: false,
            error: err.message || "Internal Server Error",
        });
    }
};
