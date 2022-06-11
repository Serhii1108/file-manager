import { commandsList, errors } from "../constants.js";

import { up } from "../operations/navigation/up.js";
import { ls } from "../operations/navigation/ls.js";
import { cd } from "../operations/navigation/cd.js";
import { cat } from "../operations/files/cat.js";
import { add } from "../operations/files/add.js";

export const checkCommand = (command) => {
  try {
    const regExp = /(?:[^\s"']+|['"][^'"]*["'])+/g;

    const commandSplit = command.match(regExp);
    const baseCommand = commandSplit[0].toLowerCase();
    if (!commandsList.includes(baseCommand)) {
      throw new Error(errors.INVALID);
    }

    const isCommandWithOneArg = commandSplit.length === 2;

    const userFirstArg = isCommandWithOneArg
      ? commandSplit[1].replace(/^["'](.+(?=["']$))["']$/, "$1")
      : "";

    switch (baseCommand) {
      case "up":
        up();
        break;
      case "ls":
        ls();
        break;
      case "cd":
        if (isCommandWithOneArg) {
          cd(userFirstArg);
        } else {
          console.error(`\n${errors.INVALID}\n`);
        }
        break;
      case "cat":
        if (isCommandWithOneArg) {
          cat(userFirstArg);
        } else {
          console.error(`\n${errors.INVALID}\n`);
        }
        break;
      case "add":
        if (isCommandWithOneArg) {
          add(userFirstArg);
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
