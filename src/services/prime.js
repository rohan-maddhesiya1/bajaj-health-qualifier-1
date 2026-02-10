const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

export const filterPrimes = (arr) => {
  // Validation
  if (!Array.isArray(arr)) {
    throw new Error("Prime input must be an array of integers");
  }

  return arr.filter(
    (num) => Number.isInteger(num) && isPrime(num)
  );
};
