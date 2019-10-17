const buttonTest = document.querySelector("#buttonTest");

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

buttonTest.addEventListener('click', event => {
  buttonTest.style.backgroundColor = "red";
});
