// script.js
const defaultMarkdown = `
# Heading 1

## Subheading 1

[Link](https://www.example.com)

\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**

New line after this line.
Second line.
`;

// Set the initial content of the editor and preview
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Configure marked options
marked.setOptions({
  breaks: true // Interpret carriage returns as <br> elements
});

editor.value = defaultMarkdown;
preview.innerHTML = marked.parse(defaultMarkdown);

// Add event listener to update the preview as the user types
editor.addEventListener('keyup', event => {
  const markdownText = event.target.value;
  preview.innerHTML = marked.parse(markdownText);
});