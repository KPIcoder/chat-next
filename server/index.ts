import fsp from "node:fs/promises";

export const doServerLogic = async () =>
  fsp.readFile(process.cwd() + "example.txt", { encoding: "utf-8" });
