window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const buttonTest = document.querySelector("#buttonTest");

buttonTest.addEventListener('click', event => {
  buttonTest.style.backgroundColor = "red";
});
