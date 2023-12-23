import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"; 

/*
defaultMarkdown contains valid markdown that represents at least one of each of the
 following elements: a header (h1 size), a sub-header (h2 size), a link, inline code, a list item,
 an image, and bolded text
*/

const defaultMarkdown = `
# Welcome to cod3astro's React markdown previewer!

## This is a sub-heading...
### And here are some other cool stuff:

Here are some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is a multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  } 
}
\`\`\`

You can also make text **bold**...
or _italic_
or... **_both_**

There is also [links](https://www.freecodecamp.com), and 
> Block Quotes!

![React logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb//a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That looks like this.
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (
     <>
     <div>
      <h1>MarkdownPreviewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
     </div>
     </>
  );
}

export default App
