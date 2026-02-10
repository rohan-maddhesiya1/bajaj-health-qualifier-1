import { ApiError } from "../utils/ApiError.js";

export const generateFibonacci = (n) => {
  // Validation
  if (!Number.isInteger(n) || n < 0) {
    throw new ApiError(422, "Fibonacci input must be a non-negative integer");
  }

  // Edge cases
  if (n === 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};
