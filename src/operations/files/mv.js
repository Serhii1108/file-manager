import path from "path";
import { existsSync } from "fs";
import { copyFile, rm } from "fs/promises";

import { getUserPath } from "../../utils/user.js";
import { errors } from "../../constants.js";
import { showCurrDir } from "../../utils/dir.js";

export const mv = async (userPathSrc, userPathDist) => {
  try {
    const fileName = path.win32.basename(userPathSrc);
    const src = getUserPath(userPathSrc);
    const dist = getUserPath(path.join(userPathDist, fileName));

    if (!existsSync(src) || existsSync(dist)) {
      throw new Error();
    }
    await copyFile(src, dist).then(
      rm(src).then(() => {
        process.stdout.write("\nFile moved successfully!\n");
        showCurrDir();
      })
    );
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
