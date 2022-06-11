import { existsSync } from "fs";

import { state } from "../../state.js";
import { isSubDirectory, showCurrDir } from "../../utils/dir.js";
import { errors, HOME_DIR } from "../../constants.js";
import { getUserPath } from "../../utils/user.js";

export const cd = async (newPath) => {
  try {
    const userPath = getUserPath(newPath);

    if (!existsSync(userPath)) {
      throw new Error();
    } else if (!isSubDirectory(userPath)) {
      // tip: user cannot go above his HOME_DIR
      state.currDir = HOME_DIR;
      showCurrDir();
      return;
    }

    state.currDir = userPath;
    showCurrDir();
  } catch {
    console.log(`\n${errors.FAIL}\n`);
  }
};
