// LoD
// 不應該讓 message 與 DOM 的實作細節直接互動
function displayMessage(message, className) {
  const container = document.createElement('div');
  container.className = `message ${className}`;
  container.appendChild(
    document.createTextNode(message),
  );
  document.body.appendChild(container);
}

// 要通過另一個對象 bridge 連接這兩個陌生人
function displayHappyBirthday(name) {
  return displayMessage(`Happy Birthday ${name}!`, 'birthday-message');
}

// 要通過另一個對象 bridge 連接這兩個陌生人
function displayHappyNewYear(name) {
  return displayMessage(`Happy New Year! ${name}!`, 'happy-new-year-message');
}
