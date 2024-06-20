const isNestedObject = (obj) => {
  const objEntries = Object.entries(obj).flat();

  return objEntries.find((el) => el.constructor === Object);
};

const deepCopy = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }
  return newObj;
};

const cloneObject = (obj) => {
  if (!!isNestedObject) {
    return deepCopy(obj);
  }
  return { ...obj };
};
