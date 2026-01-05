const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";

  return flags;
}


caseInsensitiveFlag.addEventListener("change", getFlags);
globalFlag.addEventListener("change", getFlags);

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const originalText = stringToTest.textContent;

  let regex;
  try {
    regex = new RegExp(pattern, flags);
  } catch (e) {
    
    testResult.innerText = "no match";
    return;
  }

  const matches = originalText.match(regex);

  if (!matches) {
  
    testResult.innerText = "no match";
    return;
  }

  testResult.innerText = matches.join(", ");

  const highlighted = originalText.replace(regex, (m) => {
    return `<span class="highlight">${m}</span>`;
  });

  stringToTest.innerHTML = highlighted;
});
