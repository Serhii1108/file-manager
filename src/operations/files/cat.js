import { existsSync, createReadStream } from "fs";

import { errors } from "../../constants.js";
import { showCurrDir } from "../../utils/dir.js";
import { getUserPath } from "../../utils/user.js";

export const cat = (userPath) => {
  try {
    const pathToFile = getUserPath(userPath);

    if (!existsSync(pathToFile)) {
      throw new Error();
    }

    const readStream = new createReadStream(pathToFile, "utf8");

    readStream.on("data", (data) => {
      process.stdout.write(`${data}\n`);
      showCurrDir();
    });

    readStream.on("error", () => {
      throw new Error();
    });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
