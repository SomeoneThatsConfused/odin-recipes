window.addEventListener('DOMContentLoaded', function() {
  let message = document.createElement('div');
  message.id = 'message';
  let img = document.createElement('img');
  img.src = 'images/GUI-images/checkmark.svg';
  img.id = 'checkmark';
  let closeBtn = document.createElement('button');
  closeBtn.id = 'close-btn';
  closeBtn.innerHTML = '&times;';
  message.appendChild(closeBtn);
  message.appendChild(img);
  let messageText = document.createElement('span');
  messageText.id = 'message-text';
  messageText.innerHTML = 'Design based of The Odin Project theodinproject.com';
  message.appendChild(messageText);
  document.body.insertBefore(message, document.body.firstChild);
  setTimeout(function() {
    message.classList.remove('show');
    setTimeout(function() {
      message.remove();
    }, 500);
  }, 3000);
  message.classList.add('show');

  closeBtn.addEventListener('click', function() {
    message.classList.remove('show');
    setTimeout(function() {
      message.remove();
    }, 100);
  });
});