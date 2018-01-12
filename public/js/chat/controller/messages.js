function messagesController() {

    messagesView('#messages', messages, {
        onDelete: function (message) {
            messages.remove(message);
        }
    });

    var form = newMessageFormView('#new-message-form', {
        onSend: function (text) {
            messages.add({text: text});
            form.clear();
        }
    });
}