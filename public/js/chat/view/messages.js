function messagesView(selector, messages, callbacks) {
    var list = $(selector);
    var template = list.find('>li').detach();

    messages.forEach(function (message) {
        var messageElement = template.clone();
        messageElement.find('[data-text]').text(message.text);
        list.append(messageElement);
    })
}