import path from "path";
import { pipeline } from "stream";
import { promisify } from "util";
import { createBrotliCompress } from "zlib";
import { existsSync, createReadStream, createWriteStream } from "fs";

import { getUserPath } from "../../utils/user.js";
import { errors } from "../../constants.js";

export const compressFile = async (userPathSrc, userPathDist) => {
  try {
    const fileName = path.win32.basename(userPathSrc);
    const src = getUserPath(userPathSrc);
    const dist = getUserPath(path.join(userPathDist, fileName + ".br"));

    if (!existsSync(src) || existsSync(dist)) {
      throw new Error();
    }

    const pipe = promisify(pipeline);

    const zip = createBrotliCompress();
    const source = createReadStream(src);
    const destination = createWriteStream(dist);

    await pipe(source, zip, destination)
      .catch((err) => {
        throw err;
      })
      .then(() => {
        console.log("\nFile was successfully compressed!\n");
      });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
