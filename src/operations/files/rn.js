import path from "path";
import { existsSync } from "fs";
import { rename } from "fs/promises";

import { getUserPath } from "../../utils/user.js";

export const rn = async (userPath, newFileName) => {
  try {
    const pathToOldFile = getUserPath(userPath);
    const pathToNewFile = path.join(path.dirname(pathToOldFile), newFileName);

    if (!existsSync(pathToOldFile) && existsSync(pathToNewFile)) {
      throw new Error();
    }

    await rename(pathToOldFile, pathToNewFile).then(() => {
      process.stdout.write("File name changed successfully!\n");
      process.stdout.write(`New name: ${newFileName}\n`);
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
