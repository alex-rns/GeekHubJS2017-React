function messagesFormView(selector, callbacks) {
    var form = $(selector);
    var textInput = form.find('[name=text]');

    form.on('submit', function (event) {
        event.preventDefault();

        var text = textInput.val().trim();

        if(!text) return;

        callbacks.onSend(text);

        textInput.val('');
    })
}