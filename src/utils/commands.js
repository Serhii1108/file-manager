import { showCurrDir } from "./dir.js";
import { commandsList, errors } from "../constants.js";
import { up } from "../operations/navigation/up.js";

export const checkCommand = (command) => {
  try {
    const commandSplit = command.trim().split(" ");
    const baseCommand = commandSplit[0].toLowerCase();

    if (!commandsList.includes(baseCommand)) {
      throw new Error(errors.INVALID);
    }

    switch (baseCommand) {
      case "up":
        up().then(showCurrDir());
        break;
      default:
        break;
    }
  } catch (err) {
    console.error(`\n${err.message}\n`);
  }
};
