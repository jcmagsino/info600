window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const buttonTest = document.querySelector( "button" );

    buttonTest.addEventListener('click', event => {
      buttonTest.style.backgroundColor = "red";
    });
});
