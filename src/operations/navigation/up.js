import path from "path";

import { state } from "../../state.js";
import { errors, HOME_DIR } from "../../constants.js";

export const up = async () => {
  try {
    if (state.currDir === HOME_DIR) {
      return;
    }
    state.currDir = path.dirname(state.currDir);
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
