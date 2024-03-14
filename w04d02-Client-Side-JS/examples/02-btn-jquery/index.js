
$(() => {
  console.log("Document is ready!");
  const button = $('#idbtn');
  console.log(button);

  button.on('click', () => {
    console.log("the button has been clicked");
    const numbString = $('#number');
    console.log(numbString);
    const number = Number(numbString.text());
    numbString.text(number + 1);
  })
})