const fs = require("fs");

/**
 * This function update the src index file placing the new export at the end of each "paragraph"
 * E.G.: the export of the new component will be placed at end of the component's list
 */
exports.updateSrcIndexFile = (folder, componentName, componentType) => {
  // READFILESYNC: Returns the contents of the path.
  fileContent = fs.readFileSync("./src/components/index.ts");
  // array which contains the index of the line break in src/index.ts
  indexes = [...fileContent.toString().matchAll(/^[ \t]*$/gm)];

  fileContent = fileContent.toString().substring(indexes[componentType - 1].index);
  // OPENSYNC: Returns an integer representing the file descriptor.
  fileDescriptor = fs.openSync("./src/components/index.ts", "r+");

  var exportString = new Buffer(
    `export { ${componentName} } from "./${componentName}";\n${fileContent}`,
  );
  /**
   * writeSync - https://www.geeksforgeeks.org/node-js-fs-writesync-method/
   * position: It specifies the position in the file where the text will be written. If the position is not passed in the method or an integer value is not used for specifying position then it will start writing from the 0th position. If a string is already written on that position the method will overwrite the new string passed on that position.
   * https://stackoverflow.com/questions/27352389/how-to-append-to-a-file-on-particular-position-using-node-js
   * */
  fs.writeSync(fileDescriptor, exportString, 0, exportString.length, indexes[componentType - 1].index);

  fs.close(fileDescriptor);
};
