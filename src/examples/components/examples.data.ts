import { join, resolve } from "path";
import { readFileSync, readdirSync, statSync } from "fs";

import { createMarkdownRenderer } from "vitepress";

export declare const data: Record<string, ExampleData>;

export type ExampleData = {
  [key: string]: string | Record<string, string>;
};

export default {
  watch: "/examples/**",
  load() {
    const srcDir = resolve(__dirname, "../../public/examples");
    return readExamples(srcDir);
  },
};

export function readExamples(srcDir: string): Record<string, ExampleData> {
  const data: Record<string, ExampleData> = {};
  const examplesI = readdirSync(srcDir);
  for (const nameI of examplesI) {
    if (nameI === "resources") {
      continue;
    }
    const examplesJ = readdirSync(join(srcDir, nameI));
    for (const nameJ of examplesJ) {
      const examplesK = readdirSync(join(srcDir, nameI, nameJ));
      for (const nameK of examplesK) {
        data[`${nameI}/${nameJ}/${nameK}`] = readExample(
          join(srcDir, nameI, nameJ, nameK)
        );
      }
    }
  }
  return data;
}

function readExample(dir: string): ExampleData {
  const filenames = readdirSync(dir);
  const files: ExampleData = {};
  for (const filename of filenames) {
    const fullPath = join(dir, filename);
    if (statSync(fullPath).isDirectory()) {
      files[filename] = readExample(fullPath);
    } else {
      files[filename] = readFileSync(fullPath, "utf-8");
    }
  }
  return files;
}
