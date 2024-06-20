/**
 * This function remove duplicate value from flat array returning a new array
 */
const removeFlatArrayDuplicateValues = (arr) => [...new Set(arr)];