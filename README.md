# Extract Markdown 

## About

Exctract frontmatter and content from markdown file.

## Install

```bash
npm i ptm-frontmatter -D
```

## Usage

#### `example.md`

```markdown

---
title: 'Hello World'
date: '2022-02-22'
---

# Mingalarpar

Hello guys
```

#### `javascript`

```javascript

import frontmatter from "ptm-frontmatter";

var fileContent = frontmatter('./example.md');
var data = fileContent.data;
var content = fileContent.content;

/*=============================================*/

console.log(fileContent);
/*
{
  data: { title: 'Hello World', date: '2022-02-22' },
  content: '\n# Mingalarpar\n\nHello guys'
}
*/

/* ================================================*/

console.log(data);
// { title: 'Hello World', date: '2022-02-22' }

/*===================================================*/

console.log(data.title);
// Hello World

/*===================================================*/

console.log(data.date);
// 2022-02-22

/*==================================================*/

console.log(content);
/* 

# Mingalarpar

Hello guys 
*/
```