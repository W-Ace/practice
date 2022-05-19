// no-LoD
function displayHappyBirthday(name) {
  const container = document.createElement('div');
  container.className = 'message birthday-message';
  container.appendChild(
    document.createTextNode(`Happy Birthday ${name}!`),
  );
  document.body.appendChild(container);
}
