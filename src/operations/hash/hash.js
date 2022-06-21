import path from "path";
import { readFile } from "fs/promises";
import { createHash } from "crypto";

import { getUserPath } from "../../utils/user.js";
import { errors } from "../../constants.js";

export const getFileHash = async (userPath) => {
  try {
    const pathToFile = getUserPath(userPath);

    await readFile(pathToFile).then((fileBuffer) => {
      const hash = createHash("sha256").update(fileBuffer);
      const hex = hash.digest("hex");

      console.log(
        `\nHash for file "${path.win32.basename(pathToFile)}": ${hex}\n`
      );
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
