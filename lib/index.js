import { load } from 'js-yaml';
import fs from 'fs';
const findMetaIndices = (mem, item, i) => {
    if (/^---/.test(item)) {
      mem.push(i)
    }
  
    return mem
}

const emptyObject = {}

const getData  = ({ lines, metaIndices }) => {
  if (metaIndices.length > 0) {
    const data = lines.slice(metaIndices[0] + 1, metaIndices[1])
    return load(data.join('\n'))
  }

  return emptyObject
}
const getContent = ({ lines, metaIndices }) => {
    if (metaIndices.length > 0) {
      lines = lines.slice(metaIndices[1] + 1, lines.length)
    }
  
    return lines.join('\n')
}

const frontmatter = filePhat => {
    const contents    = fs.readFileSync(filePhat, 'utf8');
    const lines       = contents.split('\n');
    const metaIndices = lines.reduce(findMetaIndices, []);
    const data        = getData({ lines, metaIndices });
    const content     = getContent({ lines, metaIndices });
  
    return { data, content }
  }
  
  export default frontmatter
