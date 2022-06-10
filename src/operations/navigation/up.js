import path from "path";

import { state } from "../../state.js";
import { errors, HOME_DIR } from "../../constants.js";
import { showCurrDir } from "../../utils/dir.js";

export const up = async () => {
  try {
    if (state.currDir === HOME_DIR) {
      showCurrDir();
      return;
    }
    state.currDir = path.dirname(state.currDir);
    showCurrDir();
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
