import { commandsList, errors } from "../constants.js";

import { up } from "../operations/navigation/up.js";
import { ls } from "../operations/navigation/ls.js";
import { cd } from "../operations/navigation/cd.js";
import { cat } from "../operations/files/cat.js";
import { add } from "../operations/files/add.js";
import { rm } from "../operations/files/rm.js";
import { rn } from "../operations/files/rn.js";
import { cp } from "../operations/files/cp.js";

const splitRegExp = /(?:[^\s"']+|['"][^'"]*["'])+/g;
const removeQuotesRegExp = /^["'](.+(?=["']$))["']$/;

export const checkCommand = (command) => {
  try {
    const commandSplit = command.match(splitRegExp);
    const baseCommand = commandSplit[0].toLowerCase();
    if (!commandsList.includes(baseCommand)) {
      throw new Error(errors.INVALID);
    }

    const isCommandWithOneArg = commandSplit.length === 2;
    const isCommandWithTwoArg = commandSplit.length === 3;

    const userFirstArg =
      isCommandWithOneArg || isCommandWithTwoArg
        ? commandSplit[1].replace(removeQuotesRegExp, "$1")
        : "";

    const userSecondArg = isCommandWithTwoArg
      ? commandSplit[2].replace(removeQuotesRegExp, "$1")
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
      case "rm":
        if (isCommandWithOneArg) {
          rm(userFirstArg);
        } else {
          console.error(`\n${errors.INVALID}\n`);
        }
        break;
      case "rn":
        if (isCommandWithTwoArg) {
          rn(userFirstArg, userSecondArg);
        } else {
          console.error(`\n${errors.INVALID}\n`);
        }
        break;
      case "cp":
        if (isCommandWithTwoArg) {
          cp(userFirstArg, userSecondArg);
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
