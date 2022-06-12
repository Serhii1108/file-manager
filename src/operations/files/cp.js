import path from "path";
import { existsSync } from "fs";
import { copyFile } from "fs/promises";

import { getUserPath } from "../../utils/user.js";
import { errors } from "../../constants.js";

export const cp = async (userPathSrc, userPathDist) => {
  try {
    const fileName = path.basename(userPathSrc);
    const src = getUserPath(userPathSrc);
    const dist = getUserPath(path.join(userPathDist, fileName));

    if (!existsSync(src) || existsSync(dist)) {
      throw new Error();
    }
    await copyFile(src, dist).then(() => {
      process.stdout.write("\nFile copied successfully!\n");
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
