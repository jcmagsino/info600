
// This is a function to print a text depending on the button chosen in the HTML code
function changeColor () {
document.getElementById("red").style.backgroundColor = "red" };
		
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.style.backgroundColor = "red" ;
});
