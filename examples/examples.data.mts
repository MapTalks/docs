import fs from 'fs'
import path from 'path'
import { ExampleData } from './utils'
import { createMarkdownRenderer } from 'vitepress'

export declare const data: Record<string, ExampleData>

export type ExampleData = {
  [key: string]: string | Record<string, string>
}

export default {
  watch: 'src/**',
  async load() {
    const md = await createMarkdownRenderer(process.cwd(), undefined, '/')
    const srcDir = path.resolve(__dirname, './src')
    const files = readExamples(srcDir)
    for (const step in files) {
      const stepFiles = files[step]
      const desc = stepFiles['description.md'] as string
      if (desc) {
        stepFiles['description.md'] = md.render(desc)
      }
    }
    return files
  }
}

export function readExamples(srcDir: string): Record<string, ExampleData> {
  const examples = fs.readdirSync(srcDir)
  const data: Record<string, ExampleData> = {}
  for (const name of examples) {
    data[name] = readExample(path.join(srcDir, name))
  }
  return data
}

function readExample(dir: string): ExampleData {
  const filenames = fs.readdirSync(dir)
  const files: ExampleData = {}
  for (const filename of filenames) {
    const fullPath = path.join(dir, filename)
    files[filename] = fs.readFileSync(fullPath, 'utf-8')
  }
  return files
}
