/**
 * This is a script to add translations
 **/

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addTranslation = (dir, data) =>
  fs.writeFile(dir, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    }
  });

rl.question("Insert translation key: ", (key) => {
  if (!key) throw new Error("You must include a translation key.");
  const directories = fs
    .readdirSync("./src/locales", { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  async function promptValues() {
    for (const directory of directories) {
      const answer = await askQuestion(`Add translation for ${directory}: `);
      const dir = `./src/locales/${directory}/translations.json`;
      if (fs.existsSync(dir)) {
        fs.readFile(dir, "utf8", (err, data) => {
          if (err) {
            console.error("Error reading file:", err);
            return;
          }
          const index = data.indexOf("}");
          const updatedContent =
            data.substring(0, index - 1) +
            `,\n "${key}":"${answer}"\n` +
            data.substring(index);
          addTranslation(dir, updatedContent);
        });
      } else {
        fs.appendFile(dir, answer, (err) => {
          if (err) {
            console.error("Error creating file:", err);
            return;
          }
          const content = `{\n "${key}":"${answer}"\n}`;
          addTranslation(dir, content);
        });
      }
    }

    rl.close();
  }

  function askQuestion(question) {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  promptValues();
});
