import path from "path";
import { existsSync } from "fs";
import { appendFile } from "fs/promises";

import { state } from "../../state.js";

export const add = async (fileName) => {
  try {
    const pathToFile = path.join(state.currDir, fileName);
    console.log(pathToFile);
    if (existsSync(pathToFile)) {
      throw new Error();
    }

    await appendFile(pathToFile, "");
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
