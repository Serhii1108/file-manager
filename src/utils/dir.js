import path from "path";

import { state } from "../state.js";
import { HOME_DIR } from "../constants.js";

export const showCurrDir = () => {
  process.stdout.write(`\nYou are currently in ${state.currDir}\n\n`);
};

export const isSubDirectory = (userPath) => {
  const relative = path.relative(HOME_DIR, userPath);
  const isSubDir =
    relative && !relative.startsWith("..") && !path.isAbsolute(relative);

  return isSubDir;
};
