import os from "os";

export const HOME_DIR = os.homedir();

export const commandsList = [
  "up",
  "ls",
  "cd",
  "cat",
  "add",
  "rn",
  "cp",
  "mv",
  "rm",
  "os",
  "hash",
  "compress",
  "decompress",
  "clear",
];

export const errors = {
  INVALID: "Error: Invalid input",
  FAIL: "Error: Operation failed",
  CRASH: "Error: File manager has been crashed",
};
