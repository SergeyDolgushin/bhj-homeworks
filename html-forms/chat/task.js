const chatWidget = document.querySelector('.chat-widget');


class ChatWidget {
  #idleTimer = null;
  #currentChatState = null;

  constructor(container) {
    this.messagesContainer = container.querySelector('.chat-widget__messages');
    this.inputMessage = container.querySelector('.chat-widget__input');
    this.#currentChatState = this.messagesContainer.innerHTML;

    this.chatEvents();
  }

  chatEvents() {
    chatWidget.addEventListener('click', () => this.openChat(this.robotHello()), {once: true})
    this.getMessage();
  }

  openChat(clb) {
    chatWidget.classList.add('chat-widget_active');
    this.addMessageToChat(clb);
    this.#idleTimer = this.askUser('Чем вам помочь?');
  }

  getMessage() {
    this.inputMessage.addEventListener('keyup', (evt) => {
      if (evt.key === 'Enter' && evt.target.value) {
        this.addMessageToChat(this.userMessage((evt.target.value.trim())));
        evt.target.value = '';
        this.addMessageToChat(this.robotAnswer(
          'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
        ));
        this.messagesContainer.scrollIntoView({block: "end"});
      }

      if (this.#idleTimer) {
        clearTimeout(this.#idleTimer);
      }
    });
  }

  addMessageToChat(html) {
    this.#currentChatState = this.messagesContainer.innerHTML;
    this.messagesContainer.innerHTML = this.#currentChatState + html;
  }

  askUser(text) {
    return setTimeout(() => this.addMessageToChat(this.robotAnswer(text)), 5000);
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
