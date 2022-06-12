import path from "path";
import { pipeline } from "stream";
import { promisify } from "util";
import { createBrotliDecompress } from "zlib";
import { existsSync, createReadStream, createWriteStream } from "fs";

import { getUserPath } from "../../utils/user.js";
import { errors } from "../../constants.js";

export const decompressFile = async (userPathSrc, userPathDist) => {
  try {
    const fileName = path.win32.basename(userPathSrc, ".br");
    const src = getUserPath(userPathSrc);
    const dist = getUserPath(path.join(userPathDist, fileName));

    if (!existsSync(src) || existsSync(dist)) {
      throw new Error();
    }

    const pipe = promisify(pipeline);

    const unzip = createBrotliDecompress();
    const source = createReadStream(src);
    const destination = createWriteStream(dist);

    await pipe(source, unzip, destination)
      .catch((err) => {
        throw err;
      })
      .then(() => {
        console.log("\nFile was successfully decompressed!\n");
      });
  } catch {
    console.error(`\n${errors.FAIL}\n`);
  }
};
