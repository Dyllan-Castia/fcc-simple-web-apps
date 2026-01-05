//Define varieables that access a contenteditable field, a button that checks the content in that field, and a result message after checking the content.
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

//Define regular expressions that check incoming message strings agains common spam messages.
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

//Build an array with regular expression variables to pass into the isSpam function.
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

//Function that tests the message agains all regular expressions in the array.
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

//Event listener for the check message button that will return the result message.
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
