import { showCurrDir } from "../utils/dir.js";

export const clear = () => {
  console.clear();
  showCurrDir();
};
