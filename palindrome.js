const checkButton = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

function inputCheck() {

const original = textInput.value;

  if (original === "") {
    alert("Please input a value");
    return;
  }

  if(isPalindrome(original)) {
    result.textContent = `${original} is a palindrome`;
  } else {
    result.textContent = `${original} is not a palindrome`;
  }
}

checkButton.addEventListener("click", inputCheck);
