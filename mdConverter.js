function convertMarkdown() {
  const inputEl = document.getElementById("markdown-input");

  let md = inputEl.value;

//escape raw html tags
  md = md
    .replace(/&/g, "&amp;")
   .replace(/</g, "&lt;");

//Headings
     md = md.replace(/^\s*###\s+(.+)$/gm, "<h3>$1</h3>");
  md = md.replace(/^\s*##\s+(.+)$/gm, "<h2>$1</h2>");
  md = md.replace(/^\s*#\s+(.+)$/gm, "<h1>$1</h1>");

//Block Quotes
  md = md.replace(/^\s*>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

//images
   md = md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

//links
     md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');


//bold
     md = md.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
md = md.replace(/__(.+?)__/g, "<strong>$1</strong>");

  //italic
  md = md.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>");
  md = md.replace(/(?<!_)_([^_\n]+)_(?!_)/g, "<em>$1</em>");

  return md;
}

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function render() {
  const html = convertMarkdown();

   if (htmlOutput) htmlOutput.textContent = html;

   if (preview) preview.innerHTML = html;

}

if (markdownInput) {
  markdownInput.addEventListener("input", render);
  render();
   }
