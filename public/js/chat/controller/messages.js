function messagesController() {

    messagesView('#messages', messages, {
        onDelete: function (message) {
            messages.remove(message);
        }
    });

    let form = newMessageFormView('#new-message-form', {
        onSend: function (text) {
            messages.add({text: text});
            form.clear();
        }
    });

    reactMessagesView(messages, {});
    reactMessagesView(messages2, {});

}

function reactMessagesView(messages) {

    let items = messages.map(function (message) {
        return (
            <li class="message">
                <div>{message.text}</div>
                <button type="button">Delete</button>
            </li>
        )
    });

    return <ul class="messages">{items}</ul>;
};

function main(applicationState) {
    let root;

    if (applicationState.page === 'chat'){
        root = (
            <chat>
                {reactMessagesView(applicationState.messages)}
            </chat>
        );
    }
    else if (applicationState.page === 'homeworks'){
        root = [
            <homework id="1"/>,
            <homework id="2"/>
        ];
    }
}

