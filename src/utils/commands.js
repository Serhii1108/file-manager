import { commandsList, errors } from "../constants.js";

import { up } from "../operations/navigation/up.js";
import { ls } from "../operations/navigation/ls.js";
import { cd } from "../operations/navigation/cd.js";

export const checkCommand = (command) => {
  try {
    const regExp = /(?:[^\s"']+|['"][^'"]*["'])+/g;

    const commandSplit = command.match(regExp);
    const baseCommand = commandSplit[0].toLowerCase();

    if (!commandsList.includes(baseCommand)) {
      throw new Error(errors.INVALID);
    }

    switch (baseCommand) {
      case "up":
        up();
        break;
      case "ls":
        ls();
        break;
      case "cd":
        if (commandSplit.length === 2) {
          const userPath = commandSplit[1].replace(
            /^["'](.+(?=["']$))["']$/,
            "$1"
          );
          cd(userPath);
        } else {
          console.error(`\n${errors.INVALID}\n`);
        }
        break;
      default:
        break;
    }
  } catch (err) {
    console.error(`\n${err.message}\n`);
  }
};
