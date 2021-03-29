export default class NotificationMessage {

  static notificationVisible = false;
  static notificationElement = {};

  constructor(
    message = 'Notification',
    {
      duration = 2000,
      type = 'success'
    } = {}
  ) {

    this.message = message;
    this.duration = duration;
    this.notificationType = type === "error" ? "error" : "success";

    this.render();
  }

  render() {

    if (NotificationMessage.notificationVisible) {
      this.destroy();
    }

    const element = document.createElement('div');

    element.innerHTML = this.generateNotification();
    this.element = element.firstElementChild;

  }

  show(obj = null) {

    const wrapper = obj ?? document.querySelector('body');

    wrapper.append(this.element);

    NotificationMessage.notificationVisible = true;
    NotificationMessage.notificationElement = this.element;

    setTimeout(() => {
      this.destroy();
      NotificationMessage.notificationVisible = false;
    }, this.duration);


  }

  generateNotification() {
    return `
  <div class="notification ${this.notificationType}" style="--value:${Math.floor(this.duration / 1000)}s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.notificationType}</div>
      <div class="notification-body">
        ${this.message}
      </div>
    </div>
  </div>
    `;
  }

  remove() {
    NotificationMessage.notificationVisible = false;
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

}
