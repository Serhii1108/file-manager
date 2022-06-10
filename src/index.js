import { checkCommand } from "./utils/commands.js";
import { showCurrDir } from "./utils/dir.js";
import { getUserName } from "./utils/user.js";

const input = process.stdin;
const output = process.stdout;

const username = getUserName();

const startFileManager = () => {
  output.write(`Welcome to the File Manager, ${username}!\n`);
  showCurrDir();
  output.write("You can enter a command\n\n");

  input.on("data", (data) => {
    const userInput = data.toString();
    if (userInput.includes(".exit")) {
      finishFileManager();
    } else {
      checkCommand(userInput);
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
