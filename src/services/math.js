const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
};

export const calculateHCF = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("HCF input must be a non-empty array of integers");
  }

  const nums = arr.filter(Number.isInteger);

  if (nums.length === 0) {
    throw new Error("HCF input must contain integers");
  }

  return nums.reduce((acc, curr) => gcd(acc, curr));
};

export const calculateLCM = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("LCM input must be a non-empty array of integers");
  }

  const nums = arr.filter(Number.isInteger);

  if (nums.length === 0) {
    throw new Error("LCM input must contain integers");
  }

  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

  return nums.reduce((acc, curr) => lcm(acc, curr));
};
