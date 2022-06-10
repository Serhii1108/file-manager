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
