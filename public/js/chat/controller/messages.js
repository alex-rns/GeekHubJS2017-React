function messagesController() {

    messagesView('#messages', messages, {
        onDelete: function (message) {
            messages.remove(message);
        }
    });

    messagesFormView('#message-input', {
        onSend: function (text) {
            messages.add({text: text});
        }
    });
}