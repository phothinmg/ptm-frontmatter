import frontmatter from "../src/lib/index.js";

const a = frontmatter('./index.md').data;

console.log(a)