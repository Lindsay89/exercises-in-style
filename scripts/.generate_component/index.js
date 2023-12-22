/**
 * This file will create the component folder and the component’s files with the correct content.
 */
const fs = require("fs");
const {
  createComponentTestFile,
} = require("./templates/component_spec_template");
const { createComponentFile } = require("./templates/component_template");
const { createComponentIndexFile } = require("./templates/index_template");
const { createComponentScssFile } = require("./templates/scss_template");

function writeFileErrorHandler(err) {
  if (err) throw err;
}

const readline = require("readline");
const { updateSrcIndexFile } = require("./templates/src_index_template");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let componentName;
let prjName;
let folder;
let componentType;
let path;

rl.question(
  "Is it a component (write 1), a view (write 2) or a project components (write 3)?",
  function (type) {
    if (!type) {
      throw new Error("You must choose the component type.");
    }
    const pathName = { 1: "components", 2: "views", 3: "projectComponents" };
    folder = pathName[type];

    rl.question("Component name (use camelCase if needed): ", function (name) {
      if (!name) {
        throw new Error("You must include a component name.");
      }
      componentName =
        name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
      path = `./src/${folder}/${componentName}/`;

      // throw an error if the folder already exists
      if (fs.existsSync(path)) {
        throw new Error(`A folder called "${componentName}" already exists.`);
      }

      // create the folder
      fs.mkdirSync(path);

      rl.question(
        "Project name (use camelCase if needed): ",
        function (project) {
          if (!project) throw new Error("You must include a project name.");
          prjName = project;
          componentType = type;

          rl.close();
        }
      );
    });
  }
);

rl.on("close", function () {
  const componentClassName =
    componentName.slice(0, 1).toLowerCase() +
    componentName.slice(1, componentName.length);

  // component.jsx
  fs.writeFileSync(
    `${path}/${componentName}.tsx`,
    createComponentFile(componentName, prjName),
    writeFileErrorHandler
  );

  // component.scss
  fs.writeFileSync(
    `${path}/${componentClassName}.scss`,
    createComponentScssFile(componentClassName, prjName),
    writeFileErrorHandler
  );

  // spec.jsx
  fs.writeFileSync(
    `${path}/${componentName}.spec.tsx`,
    createComponentTestFile(componentName, prjName, componentClassName),
    writeFileErrorHandler
  );

  // index.tsx
  fs.writeFileSync(
    `${path}/index.ts`,
    createComponentIndexFile(componentName),
    writeFileErrorHandler
  );
  if (componentType === 1) {
    // update the src index file
    updateSrcIndexFile(folder, componentName, componentType);
  }

  process.exit(0);
});
