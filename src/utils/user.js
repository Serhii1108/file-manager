import path from "path";
import { state } from "../state.js";

export const getUserName = () => {
  try {
    const userArg = process.argv.slice(2)[0].slice(2);
    if (userArg.startsWith("username=")) {
      return userArg.slice(9);
    } else {
      throw new Error();
    }
  } catch {
    console.error("Error: Please, write command correctly!\n");
    process.exit();
  }
};

export const getUserPath = (newPath) => {
  return path.isAbsolute(newPath) ? newPath : path.join(state.currDir, newPath);
};
