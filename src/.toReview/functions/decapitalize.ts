/*
 * Decapitalize a string.
 * decapitalize('Hello world'); // -> hello world
 */
const decapitalize = (str: string): string =>
  `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
