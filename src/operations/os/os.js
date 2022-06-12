import os from "os";

import { errors, HOME_DIR } from "../../constants.js";
import { showCurrDir } from "../../utils/dir.js";

export const getOsInfo = (userArg) => {
  try {
    const arg = userArg.slice(2).toLowerCase();

    switch (arg) {
      case "eol":
        printEOL();
        break;

      case "cpus":
        printCpus();
        break;

      case "homedir":
        printHomeDir();
        break;

      case "username":
        printUsername();
        break;

      case "architecture":
        printArchitecture();
        break;

      default:
        throw new Error();
    }

    showCurrDir();
  } catch {
    console.error(`\n${errors.INVALID}\n`);
  }
};

const printEOL = () => {
  const eol = os.EOL === "\r\n" ? "\\r\\n" : "\\n";
  console.log(`\n${eol}\n`);
};

const printCpus = () => {
  let cpus = [];
  os.cpus().forEach(({ model, speed }) => {
    cpus.push({ model, speed: `${speed / 1000} MHz` });
  });
  console.log(`\nOverall amount of CPUS: ${cpus.length}\n`);
  console.log(cpus);
};

const printHomeDir = () => {
  console.log(`\nHome directory: ${HOME_DIR}`);
};

const printUsername = () => {
  const username = os.userInfo("utf8").username;
  console.log(`\nUsername: ${username}`);
};

const printArchitecture = () => {
  console.log(`\nArchitecture: ${process.arch}`);
};
