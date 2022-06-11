import { existsSync } from "fs";
import { rm as removeFile } from "fs/promises";
import { errors } from "../../constants.js";

import { getUserPath } from "../../utils/user.js";

export const rm = async (userPath) => {
  try {
    const pathToFile = getUserPath(userPath);

    if (!existsSync(pathToFile)) {
      throw new Error();
    }

    await removeFile(pathToFile).then(() => {
      process.stdout.write("File deleted successfully!\n");
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
