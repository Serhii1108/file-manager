import path from "path";
import { existsSync } from "fs";
import { appendFile } from "fs/promises";

import { state } from "../../state.js";
import { showCurrDir } from "../../utils/dir.js";

export const add = async (fileName) => {
  try {
    const pathToFile = path.join(state.currDir, fileName);

    if (existsSync(pathToFile)) {
      throw new Error();
    }

    await appendFile(pathToFile, "").then(() => {
      process.stdout.write("\nFile created successfully!\n");
      showCurrDir();
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
