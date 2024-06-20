/**
 * Check if an object/array is empty.
 * isObjectEmpty({}); // -> true
 * isObjectEmpty({ foo: 'bar' }); // -> false
 */

 const isObjectEmpty = (obj: unknown): boolean => obj && Object.keys(obj).length === 0;
