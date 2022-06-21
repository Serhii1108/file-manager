import { existsSync } from "fs";
import { readdir } from "fs/promises";

import { errors } from "../../constants.js";
import { state } from "../../state.js";
import { showCurrDir } from "../../utils/dir.js";

export const ls = async () => {
  try {
    if (!existsSync(state.currDir)) {
      throw new Error();
    }
    await readdir(state.currDir).then((files) => {
      console.log(files);
      showCurrDir();
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
