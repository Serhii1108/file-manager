import { existsSync } from "fs";

import { state } from "../../state.js";
import { showCurrDir } from "../../utils/dir.js";
import { errors } from "../../constants.js";
import { getUserPath } from "../../utils/user.js";

export const cd = async (newPath) => {
  try {
    const userPath = getUserPath(newPath);

    if (!existsSync(userPath)) {
      throw new Error();
    }

    state.currDir = userPath;
    showCurrDir();
  } catch {
    console.log(`\n${errors.FAIL}\n`);
  }
};
