import { ApiError } from "../utils/ApiError.js";

export const filterPrimes = (arr) => {
  if (!Array.isArray(arr)) {
    throw new ApiError(422, "Prime input must be an array of integers");
  }

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter((n) => Number.isInteger(n) && isPrime(n));
};
