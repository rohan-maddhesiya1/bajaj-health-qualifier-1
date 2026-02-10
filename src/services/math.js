import { ApiError } from "../utils/ApiError.js";

const gcd = (a, b) => {
  while (b !== 0) [a, b] = [b, a % b];
  return Math.abs(a);
};

export const calculateHCF = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new ApiError(422, "HCF input must be a non-empty integer array");
  }
  return arr.reduce((acc, cur) => gcd(acc, cur));
};

export const calculateLCM = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new ApiError(422, "LCM input must be a non-empty integer array");
  }

  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
  return arr.reduce((acc, cur) => lcm(acc, cur));
};
