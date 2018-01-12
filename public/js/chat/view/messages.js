function messagesView(selector, messages, callbacks) {
    var list = $(selector);
    var template = list.find('>li').detach();


    messages.forEach(function (message) {
        add(message);
    });

    messages.on('add', function (message) {
        add(message);
    });

    messages.on('remove', function (message, index) {
        remove(index);
    });

    function add(message) {
        var messageElement = template.clone();
        messageElement.find('[data-text]').text(message.text);
        messageElement.find('[data-delete]').on('click', function () {
            callbacks.onDelete(message);
        });
        list.append(messageElement);
    }

    function remove(index) {
        list.children().eq(index).remove();
    }

}