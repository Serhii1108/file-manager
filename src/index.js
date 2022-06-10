import { HOME_DIR } from "./constants.js";
import { getUserName } from "./utils/user.js";

const input = process.stdin;
const output = process.stdout;

const username = getUserName();

const startFileManager = () => {
  output.write(`Welcome to the File Manager, ${username}!\n`);
  output.write(`\nYou are currently in ${HOME_DIR}\n`);
  output.write("\nYou can enter a command\n\n");

  input.on("data", (data) => {
    const userInput = data.toString();
    if (userInput.includes(".exit")) {
      finishFileManager();
    }
  });

  process.on("SIGINT", () => {
    finishFileManager();
  });
};

const finishFileManager = () => {
  output.write(`\nThank you for using File Manager, ${username}!\n`);
  process.exit();
};

startFileManager();
