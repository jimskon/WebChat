
// Things to do at page load
function pageInit() {

}

// Respond to send button
function addText() {
	// Get the text from the text box
	var inText = document.chatForm.textInput.value;
	
	// Clear the input text
	document.chatForm.textInput.value = "";
	
	// add to the bottom of the chat box
	document.chatForm.chatText.innerHTML += "You: " + inText+"\n";
}