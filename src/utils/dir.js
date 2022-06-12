import { state } from "../state.js";

export const showCurrDir = () => {
  process.stdout.write(`\nYou are currently in ${state.currDir}\n\n`);
};
