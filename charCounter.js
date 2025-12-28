 const text = document.getElementById("text-input");

 const charCount = document.getElementById("char-count");

 const max = 50;

 function updateCount() {
   let value = text.value;

  if (text.value.length > max) {
    text.value = value.slice(0, max);
  }
charCount.textContent = `
Character Count: ${value.length}/${max}`;

if (value.length === max) {
  charCount.style.color = "red";
} else {
  charCount.style.color = "";
}
 }

 text.addEventListener("input", updateCount);   
