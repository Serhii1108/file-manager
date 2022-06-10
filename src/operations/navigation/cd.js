import path from "path";
import { existsSync } from "fs";

import { state } from "../../state.js";
import { showCurrDir } from "../../utils/dir.js";
import { HOME_DIR } from "../../constants.js";

export const cd = async (newPath) => {
  try {
    const userPath = path.join(state.currDir, newPath);
    if (!existsSync(userPath)) {
      throw new Error();
    } else if (state.currDir === HOME_DIR && newPath.startsWith("..")) {
      showCurrDir();
      return;
    }

    state.currDir = userPath;
    showCurrDir();
  } catch (error) {
    console.log(error);
  }
};
