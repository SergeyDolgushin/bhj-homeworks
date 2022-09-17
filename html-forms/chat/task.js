const chatWidget = document.querySelector('.chat-widget');


class ChatWidget {
  constructor(container) {
    this.messagesContainer = container.querySelector('.chat-widget__messages');
    this.inputMessage = container.querySelector('.chat-widget__input');

    this.chatEvents();
  }

  chatEvents() {
    chatWidget.addEventListener('click', () => this.openChat(this.robotHello()), {once: true})
    this.getMessage();
  }

  openChat(clb) {
    chatWidget.classList.add('chat-widget_active');
    this.addMessageToChat(clb);
  }

  getMessage() {
    this.inputMessage.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter') {
        this.addMessageToChat(this.userMessage((evt.target.value.trim())));
        evt.target.value = '';
        this.addMessageToChat(this.robotAnswer(
          'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
        ));
      }
    });
  }

  addMessageToChat(html) {
    const currentChatState = this.messagesContainer.innerHTML;
    this.messagesContainer.innerHTML = currentChatState + html;
  }

  robotHello() {
    const currentTime = new Date();
    return `
      <div class="message">
        <div class="message__time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
        <div class="message__text">Добрый день!</div>
      </div>
    `
  }

  userMessage(text) {
    const currentTime = new Date();
    return `
      <div class="message message_client">
        <div class="message__time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
        <div class="message__text">${text}</div>
      </div>
    `
  }

  robotAnswer(text) {
    const currentTime = new Date();
    return `
      <div class="message">
        <div class="message__time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
        <div class="message__text">${text}</div>
      </div>
    `
  }
}

new ChatWidget(chatWidget);
