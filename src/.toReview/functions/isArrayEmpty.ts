/**
 * Check if an array is empty.
 * isArrayEmpty([]); // -> true
 * isArrayEmpty([1, 2, 3]); // -> false
 */

 const isArrayEmpty = (arr: unknown[]): boolean => Array.isArray(arr) && !arr.length;