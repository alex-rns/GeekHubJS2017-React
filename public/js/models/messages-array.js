function MessagesArray() {
    Array.call(this)
}

MessagesArray.prototype = Object.create(Array.prototype);
MessagesArray.prototype.constructor = MessagesArray;

MessagesArray.prototype.add = function (message) {
    if (message instanceof Array) {
        var messages = this;
        message.forEach(function (item) {
            messages.push(item)
        });
    }
    else {
        this.push(message)
    }
    return this;
};

MessagesArray.prototype.remove = function (message) {
    var index = this.indexOf(message);
    if (index === -1) return this;
    this.splice(index, 1);
    return this;
};