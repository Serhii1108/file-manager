import { commandsList, errors } from "../constants.js";

export const checkCommand = (command) => {
  try {
    const commandSplit = command.trim().split(" ");
    const baseCommand = commandSplit[0].toLowerCase();

    if (!commandsList.includes(baseCommand)) {
      throw new Error(errors.INVALID);
    }
  } catch (err) {
    console.error(`\n${err.message}\n`);
  }
};
