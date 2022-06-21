import path from "path";

import { state } from "../../state.js";
import { errors } from "../../constants.js";
import { showCurrDir } from "../../utils/dir.js";

export const up = async () => {
  try {
    state.currDir = path.dirname(state.currDir);
    showCurrDir();
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
