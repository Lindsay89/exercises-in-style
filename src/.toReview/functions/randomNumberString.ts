/**
 * Generate a random number string based on the current time.
 * randomNumberString(); // -> 1646617484381wml196a8iso
 */
const randomNumberString = (): string =>
  new Date().getTime() + Math.random().toString(36).slice(2);
